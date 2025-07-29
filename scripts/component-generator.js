#!/usr/bin/env node

/**
 * Component Generator for MEWAYZ Frontend
 * Generates new components following exact style-reference patterns
 * 
 * Usage: node scripts/component-generator.js <ComponentName> [--type=page|component] [--template=existing-component]
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class ComponentGenerator {
  constructor() {
    this.frontendDir = path.join(__dirname, '..');
    this.styleReferenceDir = path.join(this.frontendDir, 'style-reference');
    this.componentsDir = path.join(this.frontendDir, 'components');
    this.appDir = path.join(this.frontendDir, 'app');
  }

  async generate(componentName, options = {}) {
    console.log(chalk.blue.bold(`\n🚀 Generating ${componentName} following style-reference patterns\n`));

    try {
      // Validate component name
      this.validateComponentName(componentName);
      
      // Check if component already exists
      await this.checkExistence(componentName, options.type);
      
      // Generate based on type
      if (options.type === 'page') {
        await this.generatePage(componentName, options);
      } else {
        await this.generateComponent(componentName, options);
      }
      
      console.log(chalk.green.bold(`\n✅ ${componentName} generated successfully!\n`));
      this.printUsageInstructions(componentName, options.type);
      
    } catch (error) {
      console.error(chalk.red('❌ Generation failed:'), error.message);
      process.exit(1);
    }
  }

  validateComponentName(name) {
    if (!name) {
      throw new Error('Component name is required');
    }
    
    if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
      throw new Error('Component name must be PascalCase (e.g., MyComponent)');
    }
  }

  async checkExistence(componentName, type) {
    const targetPath = type === 'page' 
      ? path.join(this.appDir, componentName.toLowerCase(), 'page.tsx')
      : path.join(this.componentsDir, componentName, 'index.tsx');
    
    if (fs.existsSync(targetPath)) {
      throw new Error(`${type === 'page' ? 'Page' : 'Component'} ${componentName} already exists at ${targetPath}`);
    }

    // Check if it exists in style-reference
    const styleRefPath = type === 'page'
      ? path.join(this.styleReferenceDir, 'app', componentName.toLowerCase(), 'page.tsx')
      : path.join(this.styleReferenceDir, 'components', componentName, 'index.tsx');
    
    if (fs.existsSync(styleRefPath)) {
      console.log(chalk.yellow(`⚠️  ${componentName} already exists in style-reference. Consider using that version instead.`));
      console.log(chalk.cyan(`   Style-reference path: ${styleRefPath}`));
    }
  }

  async generatePage(pageName, options) {
    const routePath = options.route || pageName.toLowerCase();
    const pageDir = path.join(this.appDir, routePath);
    const pageFile = path.join(pageDir, 'page.tsx');

    // Find closest template
    const template = await this.findBestPageTemplate(pageName, options.template);
    
    // Create directory
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // Generate page content
    const pageContent = this.generatePageContent(pageName, template, options);
    
    fs.writeFileSync(pageFile, pageContent);
    console.log(chalk.green(`✓ Created page: ${pageFile}`));

    // Generate dynamic export if needed
    if (this.shouldBeDynamic(routePath)) {
      console.log(chalk.blue(`ℹ️  Added dynamic export for user-specific content`));
    }
  }

  async generateComponent(componentName, options) {
    const componentDir = path.join(this.componentsDir, componentName);
    const componentFile = path.join(componentDir, 'index.tsx');

    // Find closest template
    const template = await this.findBestComponentTemplate(componentName, options.template);
    
    // Create directory
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }

    // Generate component content
    const componentContent = this.generateComponentContent(componentName, template, options);
    
    fs.writeFileSync(componentFile, componentContent);
    console.log(chalk.green(`✓ Created component: ${componentFile}`));
  }

  async findBestPageTemplate(pageName, userTemplate) {
    if (userTemplate) {
      // User specified a template
      const templatePath = path.join(this.styleReferenceDir, 'templates', userTemplate, 'index.tsx');
      if (fs.existsSync(templatePath)) {
        return this.analyzeTemplate(templatePath);
      }
    }

    // Auto-detect best template based on name
    const templates = this.getAvailableTemplates();
    
    // Simple matching logic
    const pageLower = pageName.toLowerCase();
    let bestMatch = templates.find(t => t.name.toLowerCase().includes(pageLower));
    
    if (!bestMatch) {
      // Default patterns
      if (pageLower.includes('dashboard') || pageLower.includes('overview')) {
        bestMatch = templates.find(t => t.name.includes('HomePage')) || templates[0];
      } else if (pageLower.includes('list') || pageLower.includes('management')) {
        bestMatch = templates.find(t => t.name.includes('ListPage')) || templates[0];
      } else if (pageLower.includes('detail') || pageLower.includes('view')) {
        bestMatch = templates.find(t => t.name.includes('DetailsPage')) || templates[0];
      } else if (pageLower.includes('settings') || pageLower.includes('config')) {
        bestMatch = templates.find(t => t.name.includes('SettingsPage')) || templates[0];
      } else {
        bestMatch = templates[0]; // Default to HomePage
      }
    }

    return bestMatch || { name: 'HomePage', structure: 'basic', components: ['Layout'] };
  }

  async findBestComponentTemplate(componentName, userTemplate) {
    if (userTemplate) {
      const templatePath = path.join(this.styleReferenceDir, 'components', userTemplate, 'index.tsx');
      if (fs.existsSync(templatePath)) {
        return this.analyzeComponent(templatePath);
      }
    }

    // Auto-detect based on name patterns
    const componentLower = componentName.toLowerCase();
    
    if (componentLower.includes('button')) {
      return { type: 'interactive', props: ['onClick', 'children', 'className'], category: 'form' };
    } else if (componentLower.includes('card')) {
      return { type: 'container', props: ['title', 'children', 'className'], category: 'layout' };
    } else if (componentLower.includes('modal')) {
      return { type: 'overlay', props: ['open', 'onClose', 'children'], category: 'feedback' };
    } else if (componentLower.includes('form') || componentLower.includes('field')) {
      return { type: 'form', props: ['value', 'onChange', 'label'], category: 'form' };
    } else if (componentLower.includes('table') || componentLower.includes('list')) {
      return { type: 'data', props: ['items', 'columns', 'onSelect'], category: 'data' };
    }

    return { type: 'basic', props: ['className', 'children'], category: 'general' };
  }

  getAvailableTemplates() {
    const templatesDir = path.join(this.styleReferenceDir, 'templates');
    if (!fs.existsSync(templatesDir)) return [];

    const templates = [];
    
    const scanDirectory = (dir, basePath = '') => {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const item of items) {
        if (item.isDirectory()) {
          scanDirectory(path.join(dir, item.name), `${basePath}${item.name}/`);
        } else if (item.name === 'index.tsx') {
          templates.push({
            name: basePath.split('/').pop() || 'Unknown',
            path: `${basePath.slice(0, -1)}`,
            fullPath: path.join(dir, item.name)
          });
        }
      }
    };

    scanDirectory(templatesDir);
    return templates;
  }

  generatePageContent(pageName, template, options) {
    const isDynamic = this.shouldBeDynamic(options.route || pageName.toLowerCase());
    
    return `"use client";

import Layout from "@/components/Layout";${this.generateImports(template)}

${isDynamic ? 'export const dynamic = "force-dynamic";\n' : ''}
const ${pageName}Page = () => {
    return (
        <Layout title="${this.generatePageTitle(pageName)}">
            <div className="flex max-lg:block">
                <div className="col-left">
                    {/* Left column content */}
                    <div className="card">
                        <h2 className="text-h4 mb-4">${pageName} Overview</h2>
                        <p className="text-t-secondary">
                            Welcome to the ${pageName.toLowerCase()} page. This page follows style-reference patterns.
                        </p>
                    </div>
                </div>
                <div className="col-right">
                    {/* Right column content */}
                    <div className="card">
                        <h3 className="text-h5 mb-3">Quick Actions</h3>
                        {/* Add your actions here */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ${pageName}Page;`;
  }

  generateComponentContent(componentName, template, options) {
    const propsInterface = this.generatePropsInterface(componentName, template);
    const componentBody = this.generateComponentBody(componentName, template);

    return `"use client";

import React from "react";${this.generateComponentImports(template)}

${propsInterface}

const ${componentName} = ({ ${this.generatePropsList(template)} }: ${componentName}Props) => {
${componentBody}
};

export default ${componentName};`;
  }

  generatePropsInterface(componentName, template) {
    const props = template.props || ['className'];
    
    const propTypes = props.map(prop => {
      switch (prop) {
        case 'className':
          return '    className?: string;';
        case 'children':
          return '    children: React.ReactNode;';
        case 'title':
          return '    title: string;';
        case 'onClick':
          return '    onClick?: () => void;';
        case 'open':
          return '    open: boolean;';
        case 'onClose':
          return '    onClose: () => void;';
        case 'value':
          return '    value: string;';
        case 'onChange':
          return '    onChange: (value: string) => void;';
        case 'label':
          return '    label?: string;';
        case 'items':
          return '    items: any[];';
        default:
          return `    ${prop}?: any;`;
      }
    }).join('\n');

    return `type ${componentName}Props = {
${propTypes}
};`;
  }

  generatePropsList(template) {
    const props = template.props || ['className'];
    return props.join(', ');
  }

  generateComponentBody(componentName, template) {
    const category = template.category || 'general';
    
    switch (category) {
      case 'form':
        return `    return (
        <div className={className}>
            {label && (
                <label className="label">
                    {label}
                </label>
            )}
            {/* Add form elements here */}
        </div>
    );`;
      
      case 'layout':
        return `    return (
        <div className={\`card \${className || ''}\`}>
            {title && (
                <div className="card-header">
                    <h3 className="text-h5">{title}</h3>
                </div>
            )}
            <div className="card-content">
                {children}
            </div>
        </div>
    );`;
      
      case 'feedback':
        return `    return (
        <div className={\`modal \${open ? 'modal-open' : ''} \${className || ''}\`}>
            <div className="modal-backdrop" onClick={onClose} />
            <div className="modal-content">
                {children}
            </div>
        </div>
    );`;
      
      default:
        return `    return (
        <div className={className}>
            {/* ${componentName} content */}
            {children}
        </div>
    );`;
    }
  }

  generateImports(template) {
    // Generate common imports based on template
    return `
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";`;
  }

  generateComponentImports(template) {
    const category = template.category || 'general';
    
    switch (category) {
      case 'form':
        return `
import Field from "@/components/Field";
import Button from "@/components/Button";`;
      
      case 'layout':
        return `
import Card from "@/components/Card";`;
      
      case 'feedback':
        return `
import Modal from "@/components/Modal";
import Button from "@/components/Button";`;
      
      default:
        return '';
    }
  }

  generatePageTitle(pageName) {
    // Convert PascalCase to Title Case
    return pageName.replace(/([A-Z])/g, ' $1').trim();
  }

  shouldBeDynamic(routePath) {
    const dynamicRoutes = [
      'dashboard', 'admin', 'settings', 'messages', 'notifications',
      'customers', 'orders', 'analytics', 'profile', 'account', 'users'
    ];
    
    return dynamicRoutes.some(route => routePath.includes(route));
  }

  printUsageInstructions(componentName, type) {
    console.log(chalk.cyan.bold('📚 Next Steps:\n'));
    
    if (type === 'page') {
      console.log(chalk.white('Page Generated:'));
      console.log(chalk.gray(`  • Navigate to: http://localhost:3000/${componentName.toLowerCase()}`));
      console.log(chalk.gray('  • Customize the Layout and content as needed'));
      console.log(chalk.gray('  • Add dynamic exports if this page shows user-specific data'));
      console.log(chalk.gray('  • Test responsive behavior on different screen sizes\n'));
    } else {
      console.log(chalk.white('Component Generated:'));
      console.log(chalk.gray('  • Import with: import ' + componentName + ' from "@/components/' + componentName + '";'));
      console.log(chalk.gray('  • Customize props interface as needed'));
      console.log(chalk.gray('  • Add to style-reference if it becomes widely used'));
      console.log(chalk.gray('  • Test accessibility and responsive behavior\n'));
    }
    
    console.log(chalk.white('Remember to:'));
    console.log(chalk.cyan('  ✓ Follow style-reference CSS classes'));
    console.log(chalk.cyan('  ✓ Use TypeScript interfaces for all props'));
    console.log(chalk.cyan('  ✓ Test with existing components'));
    console.log(chalk.cyan('  ✓ Run style-consistency-check.js'));
    console.log(chalk.cyan('  ✓ Add proper accessibility attributes\n'));
    
    console.log(chalk.blue('📖 See frontend/COMPONENT_MAPPING.md for reference patterns'));
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(chalk.red('Usage: node scripts/component-generator.js <ComponentName> [options]'));
    console.log(chalk.gray('\nOptions:'));
    console.log(chalk.gray('  --type=page|component  (default: component)'));
    console.log(chalk.gray('  --template=<name>      Use specific template'));
    console.log(chalk.gray('  --route=<path>         Custom route path (for pages)'));
    console.log(chalk.gray('\nExamples:'));
    console.log(chalk.cyan('  node scripts/component-generator.js UserProfile --type=page'));
    console.log(chalk.cyan('  node scripts/component-generator.js CustomButton --template=Button'));
    console.log(chalk.cyan('  node scripts/component-generator.js AdminDashboard --type=page --route=admin/dashboard'));
    process.exit(1);
  }
  
  const componentName = args[0];
  const options = {};
  
  // Parse options
  args.slice(1).forEach(arg => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=');
      options[key] = value || true;
    }
  });
  
  const generator = new ComponentGenerator();
  generator.generate(componentName, options).catch(error => {
    console.error(chalk.red('Generation failed:'), error);
    process.exit(1);
  });
}

module.exports = ComponentGenerator; 