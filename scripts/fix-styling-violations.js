const fs = require('fs');
const path = require('path');

console.log('🎨 FIXING STYLING CONSISTENCY VIOLATIONS...');

// Files that need lucide-react replacement
const targetFiles = [
    // Test files
    '__tests__/components/DataTable.test.tsx',
    
    // Templates
    'templates/Products/ScheduledPage/index.tsx',
    'templates/Products/CommentsPage/index.tsx',
    'templates/Products/ReleasedPage/index.tsx',
    'templates/Products/DraftsPage/index.tsx',
    'templates/Products/OverviewPage/Products/index.tsx',
    'templates/SettingsPage/Menu/index.tsx',
    'templates/Income/StatementsPage/Transactions/index.tsx',
    'templates/Income/PayoutsPage/PayoutHistory/index.tsx',
    'templates/MessagesPage/index.tsx',
    'templates/Income/Refunds/RefundsPage/index.tsx',
    'templates/Income/EarningPage/Transactions/index.tsx',
    'templates/AdminDashboard/UserManagement.tsx',
    'templates/AdminDashboard/SystemOverview.tsx',
    'templates/AdminDashboard/FinancialManagement.tsx',
    'templates/AdminDashboard/ContentManagement.tsx',
    'templates/AdminDashboard/AdminMenu.tsx',
    'templates/DocumentationHub/Troubleshooting.tsx',
    'templates/DocumentationHub/MarketingResources.tsx',
    'templates/DocumentationHub/InvestorInformation.tsx',
    'templates/DocumentationHub/DocsNavigation.tsx',
    'templates/DocumentationHub/DeveloperDocumentation.tsx',
    'templates/DocumentationHub/BusinessUserGuide.tsx',
    'templates/DocumentationHub/APIReference.tsx',
    'templates/Customers/CustomerList/DetailsPage/index.tsx',
    'templates/Customers/CustomerList/CustomerListPage/index.tsx',
    'templates/Customers/OverviewPage/TrafficChannel/index.tsx',
    
    // Components
    'components/crm-module.tsx',
    'components/Customers.tsx',
    'components/Emoji/index.tsx',
    'components/Footer/Footer.tsx',
    'components/forms/OrderForm.tsx',
    'components/forms/CustomerForm.tsx',
    'components/forms/LeadForm.tsx',
    'components/Header/SearchGlobal/index.tsx',
    'components/Header/index.tsx',
    'components/Invoices.tsx',
    'components/Navigation/Navigation.tsx',
    'components/Products.tsx',
    'components/profile/ClientProfile.tsx',
    'components/public/DynamicTestimonials.tsx',
    'components/Search/index.tsx',
    'components/DataTable/DataTable.tsx',
    
    // App pages
    'app/feedback/page.tsx',
    'app/integration-hub/page.tsx',
    'app/faq/page.tsx',
    'app/maintenance/page.tsx',
    'app/support/page.tsx',
    'app/support-plans/page.tsx',
    'app/webinars/page.tsx',
    'app/white-papers/page.tsx',
    'app/sla/page.tsx',
    'app/sitemap/page.tsx',
    'app/roadmap/page.tsx',
    'app/press/page.tsx',
    'app/partners/page.tsx',
    'app/newsletter/page.tsx',
    'app/marketplace/page.tsx',
    'app/knowledge-base/page.tsx',
    'app/knowledge-base/investors/page.tsx',
    'app/docs/page.tsx',
    'app/ecommerce/products/page.tsx',
    'app/customers/manage/page.tsx',
    'app/cookies/page.tsx',
    'app/contact-sales/page.tsx',
    'app/compare/page.tsx',
    'app/case-studies/page.tsx',
    'app/community/page.tsx',
    'app/blog/page.tsx',
    'app/admin/users/page.tsx',
    'app/admin/settings/page.tsx',
    'app/admin/security/page.tsx',
    'app/courses/page.tsx',
    'app/website-templates/page.tsx',
    
    // Public pages
    'app/(public)/page.tsx',
    'app/(public)/login/page.tsx',
    'app/(public)/register/page.tsx',
    'app/(public)/status/page.tsx',
    'app/(public)/help/page.tsx',
    'app/(public)/features/page.tsx',
    'app/(public)/pricing/page.tsx',
    'app/(public)/contact/page.tsx',
    
    // Shared components
    'src/shared/components/Navigation/Navigation.tsx',
    'src/shared/components/crm-module.tsx',
    'src/shared/components/Customers.tsx',
    'src/shared/components/DataTable/DataTable.tsx',
    'src/shared/components/Emoji/index.tsx',
    'src/shared/components/Invoices.tsx',
    'src/shared/components/Header/index.tsx',
    'src/shared/components/Products.tsx',
    'src/shared/components/Search/index.tsx',
    'src/shared/components/profile/ClientProfile.tsx',
    'src/shared/components/Header/SearchGlobal/index.tsx',
    'src/shared/components/Footer/Footer.tsx',
    
    // Layout
    'app/layout.tsx'
];

// Lucide React to Icon component mapping
const iconMapping = {
    // Search and navigation
    'Search': 'search',
    'ChevronDown': 'chevron-down',
    'ChevronUp': 'chevron-up',
    'ChevronRight': 'chevron-right',
    'ArrowRight': 'arrow-right',
    
    // Communication
    'Mail': 'mail',
    'Phone': 'phone',
    'MessageSquare': 'message-square',
    
    // Actions
    'Edit': 'edit',
    'Eye': 'eye',
    'Plus': 'plus',
    'Trash2': 'trash-2',
    'Download': 'download',
    'Upload': 'upload',
    'Copy': 'copy',
    'Check': 'check',
    'X': 'x',
    'XCircle': 'x-circle',
    'CheckCircle': 'check-circle',
    'AlertCircle': 'alert-circle',
    'AlertTriangle': 'alert-triangle',
    'Clock': 'clock',
    'Calendar': 'calendar',
    'Filter': 'filter',
    
    // Business
    'Users': 'users',
    'User': 'user',
    'UserCheck': 'user-check',
    'UserX': 'user-x',
    'Shield': 'shield',
    'DollarSign': 'dollar-sign',
    'ShoppingCart': 'shopping-cart',
    'Package': 'package',
    'Tag': 'tag',
    'Hash': 'hash',
    'Target': 'target',
    'TrendingUp': 'trending-up',
    'TrendingDown': 'trending-down',
    'BarChart3': 'bar-chart-3',
    'Activity': 'activity',
    'Globe': 'globe',
    'Building': 'building',
    'MapPin': 'map-pin',
    
    // Development
    'Code': 'code',
    'Database': 'database',
    'Zap': 'zap',
    'GitBranch': 'git-branch',
    'Terminal': 'terminal',
    'BookOpen': 'book-open',
    'FileText': 'file-text',
    'Key': 'key',
    'Wrench': 'wrench',
    'Server': 'server',
    'Wifi': 'wifi',
    
    // Content
    'Star': 'star',
    'Palette': 'palette',
    'Share2': 'share-2',
    'Video': 'video',
    'Lock': 'lock',
    'EyeOff': 'eye-off',
    'Info': 'info',
    'Award': 'award',
    
    // Status
    'CheckCircle': 'check-circle',
    'XCircle': 'x-circle',
    'Clock': 'clock'
};

function fixStylingViolations() {
    console.log('🎨 Replacing lucide-react with style-reference Icon components...');
    
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

            // Check if file uses lucide-react
            if (content.includes('from "lucide-react"') || content.includes("from 'lucide-react'")) {
                
                // Extract all lucide-react imports
                const lucideImports = content.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["'];?/g);
                
                if (lucideImports) {
                    // Replace lucide-react import with Icon import
                    content = content.replace(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["'];?/g, 'import Icon from "@/components/Icon";');
                    
                    // Replace all lucide-react icon usages with Icon component
                    Object.entries(iconMapping).forEach(([lucideIcon, iconName]) => {
                        // Replace <IconName /> with <Icon name="icon-name" />
                        const iconRegex = new RegExp(`<${lucideIcon}\\s*([^>]*)\\s*/>`, 'g');
                        content = content.replace(iconRegex, `<Icon name="${iconName}" $1 />`);
                        
                        // Replace IconName with Icon name="icon-name"
                        const iconNameRegex = new RegExp(`\\b${lucideIcon}\\b`, 'g');
                        content = content.replace(iconNameRegex, `Icon name="${iconName}"`);
                    });
                    
                    // Fix any remaining lucide-react icon usages
                    const remainingLucideIcons = content.match(/<([A-Z][a-zA-Z]+)\s*([^>]*)\s*\/>/g);
                    if (remainingLucideIcons) {
                        remainingLucideIcons.forEach(iconUsage => {
                            const iconName = iconUsage.match(/<([A-Z][a-zA-Z]+)/)?.[1];
                            if (iconName && iconMapping[iconName]) {
                                const newIconUsage = `<Icon name="${iconMapping[iconName]}" />`;
                                content = content.replace(iconUsage, newIconUsage);
                            }
                        });
                    }
                    
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(filePath, content);
                console.log(`✅ Fixed styling in: ${filePath}`);
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
    console.log(`🎨 Styling consistency violations fixed!`);
}

// Run the fix
fixStylingViolations(); 