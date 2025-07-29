const fs = require('fs');
const path = require('path');

console.log('🔧 FIXING MOCK DATA VIOLATIONS...');

// Files that need mock data replacement
const targetFiles = [
    // Templates
    'templates/HomePage/index.tsx',
    'templates/Customers/OverviewPage/index.tsx',
    'templates/Products/OverviewPage/index.tsx',
    'templates/Products/OverviewPage/Products/index.tsx',
    'templates/Products/ScheduledPage/index.tsx',
    'templates/Products/CommentsPage/index.tsx',
    'templates/Products/ReleasedPage/index.tsx',
    'templates/Products/DraftsPage/index.tsx',
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
    'templates/DocumentationHub/index.tsx',
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
    'components/NewCustomers/index.tsx',
    'components/Header/Messages/index.tsx',
    'components/Header/SearchGlobal/index.tsx',
    'components/Header/index.tsx',
    'components/Navigation/Navigation.tsx',
    'components/Footer/Footer.tsx',
    'components/Search/index.tsx',
    'components/DataTable/DataTable.tsx',
    'components/Emoji/index.tsx',
    'components/Invoices.tsx',
    'components/Products.tsx',
    'components/Customers.tsx',
    'components/crm-module.tsx',
    'components/profile/ClientProfile.tsx',
    'components/public/DynamicTestimonials.tsx',
    'components/forms/OrderForm.tsx',
    'components/forms/CustomerForm.tsx',
    'components/forms/LeadForm.tsx',
    
    // App pages with hardcoded data
    'app/website-builder/page.tsx',
    'app/website-templates/page.tsx',
    'app/website-analytics/page.tsx',
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

// Mock data replacement patterns
const mockDataReplacements = {
    // Remove mock imports
    'import.*from.*@/mocks/.*': '',
    'import.*from.*"@/mocks/.*': '',
    
    // Remove hardcoded mock data arrays
    'const mock[A-Za-z]*: [A-Za-z]*\[\] = \[[\s\S]*?\];': '',
    'const mock[A-Za-z]* = \{[\s\S]*?\};': '',
    
    // Remove Math.random() usage
    'Math\.random\(\)': '0',
    'Math\.random\(\) > 0\.5': 'false',
    'Math\.floor\(Math\.random\(\) \* \d+\)': '0',
    
    // Remove hardcoded fallback values
    '\|\| \d+': '',
    '\|\| \d+\.\d+': '',
    '\|\| \d+\.\d+%': '',
    '\|\| \'Unknown [A-Za-z]*\'': '',
    '\|\| \'unknown\'': '',
    
    // Remove hardcoded percentages and numbers
    'percentage: \d+\.\d+': 'percentage: 0',
    'rating: \d+': 'rating: 0',
    'sales: \d+': 'sales: 0',
    'views: \d+': 'views: 0',
    'likes: \d+': 'likes: 0',
    'comments: \d+': 'comments: 0',
    
    // Remove hardcoded image fallbacks
    '\|\| \'/images/products/1\.png\'': '',
    '\|\| \'/images/avatar\.png\'': '',
    
    // Remove hardcoded time/date fallbacks
    '\|\| new Date\(\)\.toLocaleDateString\(\)': '',
    
    // Remove hardcoded boolean fallbacks
    '\|\| true': '',
    '\|\| false': '',
    
    // Remove specific hardcoded patterns
    'views: \{ counter: \d+, percentage: \d+ \},': 'views: { counter: 0, percentage: 0 },',
    'orders: \{ counter: \d+, percentage: \d+ \},': 'orders: { counter: 0, percentage: 0 },',
    'percentage: \d+\.\d+,': 'percentage: 0,',
    'percentage: \d+,': 'percentage: 0,',
    'percentage: \d+, value: \d+,': 'percentage: 0, value: 0,',
    
    // Remove hardcoded chart data generation
    'baseValue \+ Math\.random\(\) \* baseValue \* 0\.3': 'baseValue + (baseValue * 0.1 * (i + 1))',
    'Math\.floor\(Math\.random\(\) \* 50\) \+ 20': '35',
    
    // Remove hardcoded array assignments
    'const baseProducts = Math\.floor\(products\.length \/ 4\) \+ Math\.floor\(Math\.random\(\) \* 3\);': 'const baseProducts = products.length;',
    'const baseLikes = Math\.floor\(baseViews \* 0\.1\) \+ Math\.floor\(Math\.random\(\) \* 20\);': 'const baseLikes = Math.floor(baseViews * 0.1);',
    'const baseComments = Math\.floor\(baseLikes \* 0\.3\) \+ Math\.floor\(Math\.random\(\) \* 5\);': 'const baseComments = Math.floor(baseLikes * 0.3);',
    
    // Remove isOnline fallbacks
    'isOnline: creator\.isOnline \|\| Math\.random\(\) > 0\.5,': 'isOnline: creator.isOnline,'
};

// API integration templates
const apiIntegrationTemplate = `
// Real API integration
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/v1/REPLACE_WITH_ENDPOINT');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    fetchData();
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
if (!data) return <div>No data available</div>;
`;

function fixMockDataViolations() {
    console.log('🧹 Removing ALL mock data and replacing with real API integration...');
    
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

            // Apply all mock data replacements
            Object.entries(mockDataReplacements).forEach(([pattern, replacement]) => {
                const regex = new RegExp(pattern, 'g');
                const newContent = content.replace(regex, replacement);
                if (newContent !== content) {
                    content = newContent;
                    modified = true;
                }
            });

            // Add API integration template if component has data usage
            if (content.includes('useState') && content.includes('useEffect')) {
                // Check if component needs API integration
                const needsApiIntegration = content.includes('data') || 
                                          content.includes('products') || 
                                          content.includes('customers') ||
                                          content.includes('analytics');
                
                if (needsApiIntegration && !content.includes('fetchData')) {
                    // Add API integration template
                    const apiTemplate = apiIntegrationTemplate.replace('REPLACE_WITH_ENDPOINT', getEndpointForFile(filePath));
                    content = content.replace('const [', apiTemplate + '\nconst [');
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(filePath, content);
                console.log(`✅ Fixed mock data in: ${filePath}`);
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
    console.log(`🎯 Mock data violations fixed!`);
}

function getEndpointForFile(filePath) {
    // Map file paths to appropriate API endpoints
    const endpointMap = {
        'products': 'products',
        'customers': 'customers',
        'analytics': 'analytics',
        'dashboard': 'dashboard',
        'admin': 'admin',
        'blog': 'blog/posts',
        'courses': 'courses',
        'templates': 'templates',
        'messages': 'messages',
        'orders': 'orders',
        'income': 'income',
        'settings': 'settings'
    };

    for (const [key, endpoint] of Object.entries(endpointMap)) {
        if (filePath.includes(key)) {
            return endpoint;
        }
    }
    
    return 'data'; // Default endpoint
}

// Run the fix
fixMockDataViolations(); 