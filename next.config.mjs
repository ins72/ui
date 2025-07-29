/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimization for enterprise-grade applications
  experimental: {
    // Optimize CSS for better performance
    optimizeCss: true,
    // Optimize package imports for faster builds
    optimizePackageImports: [
      '@/components',
      '@/style-reference/components',
      '@/utils',
      '@/lib',
      '@/contexts'
    ],
    // Enable server actions for better performance
    // Turbo mode for faster development
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Image optimization configuration for global enterprise deployment
  images: {
    // Domains for external images (CDN, user uploads, etc.)
    domains: [
      'cdn.mewayz.com',
      'images.mewayz.com',
      'assets.mewayz.com',
      'storage.googleapis.com',
      'cloudinary.com',
      'amazonaws.com'
    ],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Modern image formats for better compression
    formats: ['image/webp', 'image/avif'],
    // Image optimization settings
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Internationalization disabled for App Router
  // i18n configuration is not supported in App Router

  // Webpack configuration for advanced optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // SVG optimization
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    // Performance optimization
    config.optimization = {
      ...config.optimization,
      // Split chunks for better caching
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // Vendor chunks for external libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          // Common chunks for shared code
          common: {
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
          // Style chunks
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    };

    // Tree shaking for production builds
    if (!dev) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    return config;
  },

  // Security headers for enterprise deployment
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.mewayz.com https://analytics.google.com https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: blob: https: http:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.mewayz.com https://analytics.google.com;
              media-src 'self' https://cdn.mewayz.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
              upgrade-insecure-requests;
            `.replace(/\s+/g, ' ').trim()
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache API responses for 5 minutes
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=300',
          },
        ],
      },
    ];
  },

  // Redirects for SEO and user experience
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/auth/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/auth/signup',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/auth/signup',
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs and API routing
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/:path*`,
      },
    ];
  },

  // Environment variables validation
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Output configuration for deployment
  output: 'standalone',

  // Compression for better performance
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,

  // Generate sitemap for SEO
  generateBuildId: async () => {
    // Use commit hash or timestamp for build ID
    return process.env.GIT_COMMIT_SHA || `build-${Date.now()}`;
  },

  // TypeScript configuration
  typescript: {
    // Type checking during build
    tsconfigPath: './tsconfig.json',
  },

  // ESLint configuration
  eslint: {
    // Run ESLint during builds
    ignoreDuringBuilds: false,
    dirs: ['pages', 'components', 'lib', 'src', 'app'],
  },

  // Static export configuration (if needed)
  trailingSlash: false,

  // React configuration
  reactStrictMode: true,


  // Runtime configuration
  serverRuntimeConfig: {
    // Server-only variables
    secret: process.env.SECRET,
  },
  publicRuntimeConfig: {
    // Client and server variables
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;