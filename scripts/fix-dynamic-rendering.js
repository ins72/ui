const fs = require('fs');
const path = require('path');

console.log('⚡ FIXING DYNAMIC RENDERING CONFIGURATION...');

// Files that need dynamic rendering configuration
const targetFiles = [
    // Dashboard pages - should be force-dynamic
    'app/dashboard/page.tsx',
    'app/dashboard/analytics/page.tsx',
    'app/dashboard/settings/page.tsx',
    'app/dashboard/profile/page.tsx',
    
    // Admin pages - should be force-dynamic
    'app/admin/page.tsx',
    'app/admin/dashboard/page.tsx',
    'app/admin/users/page.tsx',
    'app/admin/settings/page.tsx',
    'app/admin/security/page.tsx',
    'app/admin/system/page.tsx',
    'app/admin/database/page.tsx',
    'app/admin/content/page.tsx',
    'app/admin/analytics/page.tsx',
    
    // User-specific pages - should be force-dynamic
    'app/customers/page.tsx',
    'app/customers/manage/page.tsx',
    'app/products/page.tsx',
    'app/orders/page.tsx',
    'app/messages/page.tsx',
    'app/notifications/page.tsx',
    'app/settings/page.tsx',
    'app/profile/page.tsx',
    'app/onboarding/page.tsx',
    'app/auth/signin/page.tsx',
    'app/auth/signup/page.tsx',
    
    // E-commerce pages - should be force-dynamic
    'app/ecommerce/page.tsx',
    'app/ecommerce/products/page.tsx',
    'app/ecommerce/orders/page.tsx',
    'app/ecommerce/customers/page.tsx',
    'app/shop/page.tsx',
    
    // CRM pages - should be force-dynamic
    'app/crm/page.tsx',
    'app/leads/page.tsx',
    'app/income/page.tsx',
    'app/website-analytics/page.tsx',
    'app/website-settings/page.tsx',
    'app/website-builder/page.tsx',
    'app/website-templates/page.tsx',
    
    // Public pages - should be force-static with revalidation
    'app/page.tsx',
    'app/pricing/page.tsx',
    'app/features/page.tsx',
    'app/about/page.tsx',
    'app/contact/page.tsx',
    'app/help/page.tsx',
    'app/faq/page.tsx',
    'app/blog/page.tsx',
    'app/docs/page.tsx',
    'app/legal/page.tsx',
    'app/privacy/page.tsx',
    'app/terms/page.tsx',
    'app/cookies/page.tsx',
    'app/sitemap/page.tsx',
    'app/status/page.tsx',
    
    // Public directory pages
    'app/(public)/page.tsx',
    'app/(public)/pricing/page.tsx',
    'app/(public)/features/page.tsx',
    'app/(public)/contact/page.tsx',
    'app/(public)/help/page.tsx',
    'app/(public)/login/page.tsx',
    'app/(public)/register/page.tsx',
    'app/(public)/status/page.tsx',
    
    // Marketing pages - should be force-static
    'app/partners/page.tsx',
    'app/careers/page.tsx',
    'app/press/page.tsx',
    'app/events/page.tsx',
    'app/webinars/page.tsx',
    'app/white-papers/page.tsx',
    'app/case-studies/page.tsx',
    'app/success-stories/page.tsx',
    'app/testimonials/page.tsx',
    'app/roadmap/page.tsx',
    'app/security/page.tsx',
    'app/compliance/page.tsx',
    'app/sla/page.tsx',
    'app/compare/page.tsx',
    'app/enterprise-features/page.tsx',
    
    // Support pages - should be force-static
    'app/support/page.tsx',
    'app/support-plans/page.tsx',
    'app/knowledge-base/page.tsx',
    'app/knowledge-base/business/page.tsx',
    'app/knowledge-base/marketing/page.tsx',
    'app/knowledge-base/technical/page.tsx',
    'app/knowledge-base/investors/page.tsx',
    'app/feedback/page.tsx',
    'app/community/page.tsx',
    
    // Other pages - should be force-dynamic
    'app/marketplace/page.tsx',
    'app/integration-hub/page.tsx',
    'app/developer-portal/page.tsx',
    'app/api-docs/page.tsx',
    'app/newsletter/page.tsx',
    'app/maintenance/page.tsx',
    'app/contact-sales/page.tsx',
    'app/courses/page.tsx',
    'app/training/page.tsx',
    'app/resources/page.tsx',
    'app/downloads/page.tsx',
    'app/events/page.tsx',
    'app/explore-creators/page.tsx',
    'app/promote/page.tsx',
    'app/affiliate-center/page.tsx',
    'app/upgrade-to-pro/page.tsx'
];

function fixDynamicRendering() {
    console.log('⚡ Configuring dynamic rendering for all pages...');
    
    let modifiedCount = 0;
    let errorCount = 0;

    targetFiles.forEach(filePath => {
        try {
            if (!fs.existsSync(filePath)) {
                console.log(`⚠️  File not found: ${filePath}`);
                return;
            }

            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            // Determine the appropriate dynamic configuration
            let dynamicConfig = '';
            
            if (filePath.includes('dashboard') || 
                filePath.includes('admin') || 
                filePath.includes('customers') ||
                filePath.includes('products') ||
                filePath.includes('orders') ||
                filePath.includes('messages') ||
                filePath.includes('notifications') ||
                filePath.includes('settings') ||
                filePath.includes('profile') ||
                filePath.includes('onboarding') ||
                filePath.includes('auth') ||
                filePath.includes('ecommerce') ||
                filePath.includes('shop') ||
                filePath.includes('crm') ||
                filePath.includes('leads') ||
                filePath.includes('income') ||
                filePath.includes('website-') ||
                filePath.includes('marketplace') ||
                filePath.includes('integration-hub') ||
                filePath.includes('developer-portal') ||
                filePath.includes('api-docs') ||
                filePath.includes('newsletter') ||
                filePath.includes('maintenance') ||
                filePath.includes('contact-sales') ||
                filePath.includes('courses') ||
                filePath.includes('training') ||
                filePath.includes('explore-creators') ||
                filePath.includes('promote') ||
                filePath.includes('affiliate-center') ||
                filePath.includes('upgrade-to-pro')) {
                
                // User-specific pages - force-dynamic
                dynamicConfig = "export const dynamic = 'force-dynamic';\n";
            } else if (filePath.includes('(public)') ||
                       filePath.includes('pricing') ||
                       filePath.includes('features') ||
                       filePath.includes('about') ||
                       filePath.includes('contact') ||
                       filePath.includes('help') ||
                       filePath.includes('faq') ||
                       filePath.includes('blog') ||
                       filePath.includes('docs') ||
                       filePath.includes('legal') ||
                       filePath.includes('privacy') ||
                       filePath.includes('terms') ||
                       filePath.includes('cookies') ||
                       filePath.includes('sitemap') ||
                       filePath.includes('status') ||
                       filePath.includes('partners') ||
                       filePath.includes('careers') ||
                       filePath.includes('press') ||
                       filePath.includes('events') ||
                       filePath.includes('webinars') ||
                       filePath.includes('white-papers') ||
                       filePath.includes('case-studies') ||
                       filePath.includes('success-stories') ||
                       filePath.includes('testimonials') ||
                       filePath.includes('roadmap') ||
                       filePath.includes('security') ||
                       filePath.includes('compliance') ||
                       filePath.includes('sla') ||
                       filePath.includes('compare') ||
                       filePath.includes('enterprise-features') ||
                       filePath.includes('support') ||
                       filePath.includes('knowledge-base') ||
                       filePath.includes('feedback') ||
                       filePath.includes('community') ||
                       filePath.includes('resources') ||
                       filePath.includes('downloads')) {
                
                // Public/marketing pages - force-static with revalidation
                dynamicConfig = "export const dynamic = 'force-static';\nexport const revalidate = 3600; // Revalidate every hour\n";
            } else {
                // Default to force-dynamic for safety
                dynamicConfig = "export const dynamic = 'force-dynamic';\n";
            }

            // Check if file already has dynamic export
            if (content.includes("export const dynamic =")) {
                // Replace existing dynamic export
                content = content.replace(/export const dynamic = ['"]?[^'"]*['"]?;?\n?/g, dynamicConfig);
                modified = true;
            } else {
                // Add dynamic export after imports
                const importMatch = content.match(/(import .+ from .+;\n?)+/);
                if (importMatch) {
                    content = content.replace(importMatch[0], importMatch[0] + '\n' + dynamicConfig);
                    modified = true;
                } else {
                    // Add at the beginning if no imports found
                    content = dynamicConfig + '\n' + content;
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(filePath, content);
                console.log(`✅ Fixed dynamic rendering in: ${filePath}`);
                modifiedCount++;
            }
        } catch (error) {
            console.log(`❌ Error processing ${filePath}:`, error.message);
            errorCount++;
        }
    });

    console.log(`\n📊 SUMMARY:`);
    console.log(`✅ Files modified: ${modifiedCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`⚡ Dynamic rendering configuration fixed!`);
}

// Run the fix
fixDynamicRendering(); 