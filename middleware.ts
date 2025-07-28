import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

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
    '/integration-hub',
    '/marketplace',
    '/support-plans',
    '/sla',
    '/contact-sales'
  ];

  // Check if the current path is public
  const isPublicPath = publicPaths.some(publicPath => 
    path === publicPath || path.startsWith(publicPath + '/')
  );

  // Also allow the root path and any path starting with (public)
  const isPublicRoute = isPublicPath || path === '/' || path.startsWith('/(public)');

  // Get the token from cookies
  const token = request.cookies.get('auth-token')?.value;

  // Redirect logic
  if (isPublicRoute && token && (path === '/login' || path === '/register')) {
    // If user is on login/register but has token, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!isPublicRoute && !token) {
    // If user is on protected path but no token, redirect to login
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  // Security headers
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Add CSP header for additional security
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"
  );

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