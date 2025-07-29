import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname and response
  const path = request.nextUrl.pathname;
  const response = NextResponse.next();

  // Define public paths that don't require authentication
  const publicPaths = [
    '/login', 
    '/register', 
    '/forgot-password', 
    '/reset-password',
    '/about',
    '/contact',
    '/help',
    '/status',
    '/pricing',
    '/privacy',
    '/terms',
    '/faq',
    '/features',
    '/blog',
    '/careers',
    '/press',
    '/partners',
    '/resources',
    '/support',
    '/security',
    '/compliance',
    '/api-docs',
    '/developer-portal',
    '/knowledge-base',
    '/case-studies',
    '/testimonials',
    '/success-stories',
    '/white-papers',
    '/webinars',
    '/events',
    '/community',
    '/roadmap',
    '/sitemap',
    '/cookies',
    '/maintenance',
    '/newsletter',
    '/feedback',
    '/compare',
    '/enterprise-features',
    '/downloads',
    '/training',
    '/website-analytics',
    '/website-builder',
    '/website-settings',
    '/website-templates',
    '/global-expansion',
    '/design-studio',
    '/workflow-builder',
    '/dashboard-builder',
    '/business-intelligence',
    '/ai-content-suite',
    '/ai-dashboard',
    '/creator-monetization',
    '/cross-platform-publishing',
    '/integration-hub',
    '/promote',
    '/'
  ];

  // Check if the path is public
  const isPublicPath = publicPaths.some(publicPath => 
    path === publicPath || path.startsWith(publicPath + '/')
  );

  // Enhanced Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // Enhanced Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.stripe.com https:",
    "frame-src 'self' https://js.stripe.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);

  // Performance Headers for static assets
  if (path.includes('_next/static') || path.includes('favicon.ico')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Rate Limiting (basic implementation)
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  // TODO: Implement actual rate limiting logic with Redis/database
  
  // For now, allow all requests (authentication will be added later)
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
