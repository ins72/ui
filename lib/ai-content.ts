import { getCachedApiResponse, cacheApiResponse } from './redis';

// AI Content Generation Configuration
const AI_CONFIG = {
  // Content types
  CONTENT_TYPES: {
    BLOG_POST: 'blog_post',
    PRODUCT_DESCRIPTION: 'product_description',
    EMAIL_SUBJECT: 'email_subject',
    SOCIAL_POST: 'social_post',
    COURSE_CONTENT: 'course_content',
    LANDING_PAGE: 'landing_page',
  },
  
  // Tone options
  TONES: {
    PROFESSIONAL: 'professional',
    FRIENDLY: 'friendly',
    CONVERSATIONAL: 'conversational',
    AUTHORITATIVE: 'authoritative',
    ENTHUSIASTIC: 'enthusiastic',
  },
  
  // Content length options
  LENGTHS: {
    SHORT: 'short',
    MEDIUM: 'medium',
    LONG: 'long',
  },
};

// AI Content Generation Interface
interface ContentGenerationRequest {
  type: string;
  topic: string;
  keywords: string[];
  tone: string;
  length: string;
  targetAudience: string;
  industry: string;
  language: string;
  additionalContext?: string;
}

interface ContentGenerationResponse {
  content: string;
  title?: string;
  metaDescription?: string;
  tags?: string[];
  seoScore?: number;
  readabilityScore?: number;
  suggestions?: string[];
}

interface ContentOptimizationRequest {
  content: string;
  targetKeywords: string[];
  contentType: string;
  targetAudience: string;
}

interface ContentOptimizationResponse {
  optimizedContent: string;
  seoScore: number;
  readabilityScore: number;
  keywordDensity: Record<string, number>;
  suggestions: string[];
  metaTitle?: string;
  metaDescription?: string;
}

/**
 * AI Content Generation System
 */
class AIContentGenerator {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || '';
    this.baseUrl = 'https://api.openai.com/v1';
  }

  /**
   * Generate content using AI
   */
  async generateContent(request: ContentGenerationRequest): Promise<ContentGenerationResponse> {
    try {
      const cacheKey = `ai_content:${JSON.stringify(request)}`;
      
      // Check cache first
      const cached = await getCachedApiResponse<ContentGenerationResponse>(cacheKey);
      if (cached) {
        return cached;
      }

      const prompt = this.buildPrompt(request);
      const response = await this.callOpenAI(prompt, request.type);
      
      const result: ContentGenerationResponse = {
        content: response.content,
        title: response.title,
        metaDescription: response.metaDescription,
        tags: response.tags,
        seoScore: this.calculateSEOScore(response.content, request.keywords),
        readabilityScore: this.calculateReadabilityScore(response.content),
        suggestions: this.generateSuggestions(response.content, request.type),
      };

      // Cache the result
      await cacheApiResponse(cacheKey, result, 'public');

      return result;
    } catch (error) {
      console.error('AI content generation failed:', error);
      throw new Error('Failed to generate content');
    }
  }

  /**
   * Optimize existing content
   */
  async optimizeContent(request: ContentOptimizationRequest): Promise<ContentOptimizationResponse> {
    try {
      const prompt = this.buildOptimizationPrompt(request);
      const response = await this.callOpenAI(prompt, 'optimization');
      
      const result: ContentOptimizationResponse = {
        optimizedContent: response.optimizedContent,
        seoScore: this.calculateSEOScore(response.optimizedContent, request.targetKeywords),
        readabilityScore: this.calculateReadabilityScore(response.optimizedContent),
        keywordDensity: this.calculateKeywordDensity(response.optimizedContent, request.targetKeywords),
        suggestions: this.generateOptimizationSuggestions(response.optimizedContent, request),
        metaTitle: response.metaTitle,
        metaDescription: response.metaDescription,
      };

      return result;
    } catch (error) {
      console.error('Content optimization failed:', error);
      throw new Error('Failed to optimize content');
    }
  }

  /**
   * Generate blog post suggestions
   */
  async generateBlogSuggestions(topic: string, industry: string): Promise<string[]> {
    try {
      const prompt = `Generate 10 blog post title suggestions for the topic "${topic}" in the ${industry} industry. 
      Make them SEO-friendly and engaging. Return as a JSON array of strings.`;
      
      const response = await this.callOpenAI(prompt, 'suggestions');
      return response.suggestions || [];
    } catch (error) {
      console.error('Blog suggestions generation failed:', error);
      return [];
    }
  }

  /**
   * Generate social media content
   */
  async generateSocialContent(content: string, platform: string): Promise<string[]> {
    try {
      const prompt = `Generate 5 social media posts for ${platform} based on this content: "${content}". 
      Make them engaging and platform-appropriate. Return as a JSON array of strings.`;
      
      const response = await this.callOpenAI(prompt, 'social');
      return response.posts || [];
    } catch (error) {
      console.error('Social content generation failed:', error);
      return [];
    }
  }

  /**
   * Generate email subject lines
   */
  async generateEmailSubjects(content: string, audience: string): Promise<string[]> {
    try {
      const prompt = `Generate 10 email subject lines for this content: "${content}" targeting ${audience}. 
      Make them compelling and click-worthy. Return as a JSON array of strings.`;
      
      const response = await this.callOpenAI(prompt, 'email');
      return response.subjects || [];
    } catch (error) {
      console.error('Email subject generation failed:', error);
      return [];
    }
  }

  /**
   * Build AI prompt based on request
   */
  private buildPrompt(request: ContentGenerationRequest): string {
    const { type, topic, keywords, tone, length, targetAudience, industry, additionalContext } = request;
    
    let prompt = `Generate ${tone} ${type} content about "${topic}" for ${targetAudience} in the ${industry} industry.`;
    
    if (keywords.length > 0) {
      prompt += ` Include these keywords naturally: ${keywords.join(', ')}.`;
    }
    
    if (length === 'short') {
      prompt += ' Keep it concise (150-300 words).';
    } else if (length === 'medium') {
      prompt += ' Make it comprehensive (500-800 words).';
    } else {
      prompt += ' Make it detailed (1000-1500 words).';
    }
    
    if (additionalContext) {
      prompt += ` Additional context: ${additionalContext}`;
    }
    
    prompt += ' Return as JSON with content, title, metaDescription, and tags fields.';
    
    return prompt;
  }

  /**
   * Build optimization prompt
   */
  private buildOptimizationPrompt(request: ContentOptimizationRequest): string {
    const { content, targetKeywords, contentType, targetAudience } = request;
    
    return `Optimize this ${contentType} content for SEO and readability targeting ${targetAudience}. 
    Focus on these keywords: ${targetKeywords.join(', ')}. 
    Original content: "${content}"
    Return optimized content as JSON with optimizedContent, metaTitle, and metaDescription fields.`;
  }

  /**
   * Call OpenAI API
   */
  private async callOpenAI(prompt: string, type: string): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an expert content creator and SEO specialist. Generate high-quality, engaging content that is optimized for search engines and user engagement.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      try {
        return JSON.parse(content);
      } catch {
        // If not JSON, return as plain content
        return { content };
      }
    } catch (error) {
      console.error('OpenAI API call failed:', error);
      throw error;
    }
  }

  /**
   * Calculate SEO score
   */
  private calculateSEOScore(content: string, keywords: string[]): number {
    if (keywords.length === 0) return 80;
    
    let score = 100;
    const contentLower = content.toLowerCase();
    
    keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      const count = (contentLower.match(new RegExp(keywordLower, 'g')) || []).length;
      
      if (count === 0) {
        score -= 20;
      } else if (count < 2) {
        score -= 10;
      } else if (count > 5) {
        score -= 15; // Over-optimization penalty
      }
    });
    
    // Check content length
    const wordCount = content.split(' ').length;
    if (wordCount < 300) score -= 10;
    if (wordCount > 2000) score -= 5;
    
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Calculate readability score
   */
  private calculateReadabilityScore(content: string): number {
    const sentences = content.split(/[.!?]+/).length;
    const words = content.split(' ').length;
    const syllables = this.countSyllables(content);
    
    if (sentences === 0 || words === 0) return 0;
    
    const fleschScore = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));
    return Math.max(0, Math.min(100, fleschScore));
  }

  /**
   * Count syllables in text
   */
  private countSyllables(text: string): number {
    const words = text.toLowerCase().split(' ');
    let count = 0;
    
    words.forEach(word => {
      word = word.replace(/[^a-z]/g, '');
      if (word.length <= 3) {
        count += 1;
      } else {
        count += word.replace(/[^aeiouy]+/g, '').length;
      }
    });
    
    return count;
  }

  /**
   * Calculate keyword density
   */
  private calculateKeywordDensity(content: string, keywords: string[]): Record<string, number> {
    const result: Record<string, number> = {};
    const words = content.toLowerCase().split(/\s+/);
    const totalWords = words.length;
    
    keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      const count = (content.toLowerCase().match(new RegExp(keywordLower, 'g')) || []).length;
      result[keyword] = totalWords > 0 ? (count / totalWords) * 100 : 0;
    });
    
    return result;
  }

  /**
   * Generate content suggestions
   */
  private generateSuggestions(content: string, type: string): string[] {
    const suggestions: string[] = [];
    
    if (content.length < 300) {
      suggestions.push('Consider adding more detail to improve SEO and user engagement');
    }
    
    if (content.length > 2000) {
      suggestions.push('Consider breaking this into multiple articles for better readability');
    }
    
    if (type === 'blog_post' && !content.includes('##')) {
      suggestions.push('Add subheadings to improve readability and SEO structure');
    }
    
    if (!content.includes('http')) {
      suggestions.push('Consider adding relevant links to improve SEO and user experience');
    }
    
    return suggestions;
  }

  /**
   * Generate optimization suggestions
   */
  private generateOptimizationSuggestions(content: string, request: ContentOptimizationRequest): string[] {
    const suggestions: string[] = [];
    const { targetKeywords, contentType } = request;
    
    targetKeywords.forEach(keyword => {
      const count = (content.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
      if (count === 0) {
        suggestions.push(`Add the keyword "${keyword}" naturally to your content`);
      } else if (count < 2) {
        suggestions.push(`Consider using "${keyword}" more frequently`);
      }
    });
    
    if (contentType === 'blog_post' && content.length < 800) {
      suggestions.push('Expand your content to at least 800 words for better SEO');
    }
    
    if (!content.includes('##')) {
      suggestions.push('Add subheadings to improve content structure and readability');
    }
    
    return suggestions;
  }
}

// Create global AI content generator instance
export const aiContentGenerator = new AIContentGenerator();

/**
 * AI Content Utilities
 */
export const aiContentUtils = {
  /**
   * Generate blog post
   */
  async generateBlogPost(topic: string, keywords: string[], tone: string = 'professional'): Promise<ContentGenerationResponse> {
    return aiContentGenerator.generateContent({
      type: AI_CONFIG.CONTENT_TYPES.BLOG_POST,
      topic,
      keywords,
      tone,
      length: AI_CONFIG.LENGTHS.MEDIUM,
      targetAudience: 'business professionals',
      industry: 'technology',
      language: 'en',
    });
  },

  /**
   * Generate product description
   */
  async generateProductDescription(productName: string, features: string[], tone: string = 'professional'): Promise<ContentGenerationResponse> {
    return aiContentGenerator.generateContent({
      type: AI_CONFIG.CONTENT_TYPES.PRODUCT_DESCRIPTION,
      topic: productName,
      keywords: features,
      tone,
      length: AI_CONFIG.LENGTHS.MEDIUM,
      targetAudience: 'potential customers',
      industry: 'e-commerce',
      language: 'en',
      additionalContext: `Features: ${features.join(', ')}`,
    });
  },

  /**
   * Generate email subject lines
   */
  async generateEmailSubjects(content: string, audience: string): Promise<string[]> {
    return aiContentGenerator.generateEmailSubjects(content, audience);
  },

  /**
   * Generate social media posts
   */
  async generateSocialPosts(content: string, platform: string): Promise<string[]> {
    return aiContentGenerator.generateSocialContent(content, platform);
  },

  /**
   * Optimize content for SEO
   */
  async optimizeForSEO(content: string, keywords: string[], contentType: string): Promise<ContentOptimizationResponse> {
    return aiContentGenerator.optimizeContent({
      content,
      targetKeywords: keywords,
      contentType,
      targetAudience: 'general audience',
    });
  },
};

export default aiContentGenerator; 