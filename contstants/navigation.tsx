export const navigation = [
    {
        title: "Dashboard",
        icon: "home",
        href: "/",
    },
    {
        title: "Website Builder",
        icon: "globe",
        href: "/website-builder",
        children: [
            { title: "Builder", href: "/website-builder" },
            { title: "Templates", href: "/website-templates" },
            { title: "Settings", href: "/website-settings" },
            { title: "Analytics", href: "/website-analytics" },
        ]
    },
    {
        title: "Products",
        icon: "shopping-bag",
        href: "/products",
        children: [
            { title: "All Products", href: "/products/manage" },
            { title: "Add Product", href: "/products/create" },
            { title: "Categories", href: "/products/categories" },
            { title: "Inventory", href: "/products/inventory" },
        ]
    },
    {
        title: "Customers",
        icon: "users",
        href: "/customers",
        children: [
            { title: "All Customers", href: "/customers/manage" },
            { title: "Add Customer", href: "/customers/create" },
            { title: "Analytics", href: "/customers/analytics" },
            { title: "Segments", href: "/customers/segments" },
        ]
    },
    {
        title: "Orders",
        icon: "shopping-cart",
        href: "/orders",
        children: [
            { title: "All Orders", href: "/orders/manage" },
            { title: "Create Order", href: "/orders/create" },
            { title: "Fulfillment", href: "/orders/fulfillment" },
            { title: "Analytics", href: "/orders/analytics" },
        ]
    },
    {
        title: "Leads",
        icon: "target",
        href: "/leads",
        children: [
            { title: "All Leads", href: "/leads/manage" },
            { title: "Add Lead", href: "/leads/create" },
            { title: "Pipeline", href: "/leads/pipeline" },
            { title: "Analytics", href: "/leads/analytics" },
        ]
    },
    {
        title: "Marketing",
        icon: "megaphone",
        href: "/marketing",
        children: [
            { title: "Campaigns", href: "/marketing/campaigns" },
            { title: "Automation", href: "/marketing/automation" },
            { title: "Email Marketing", href: "/marketing/email" },
            { title: "Analytics", href: "/marketing/analytics" },
        ]
    },
    {
        title: "Income",
        icon: "dollar-sign",
        href: "/income",
        children: [
            { title: "Dashboard", href: "/income/dashboard" },
            { title: "Reports", href: "/income/reports" },
            { title: "Payouts", href: "/income/payouts" },
            { title: "Analytics", href: "/income/analytics" },
        ]
    },
    {
        title: "Admin",
        icon: "shield",
        href: "/admin",
        children: [
            { title: "Dashboard", href: "/admin" },
            { title: "Users", href: "/admin/users" },
            { title: "Settings", href: "/admin/settings" },
            { title: "Security", href: "/admin/security" },
        ]
    },
    {
        title: "Settings",
        icon: "settings",
        href: "/settings",
        children: [
            { title: "Profile", href: "/users/profile" },
            { title: "Account", href: "/users/settings" },
            { title: "Billing", href: "/users/billing" },
            { title: "Security", href: "/users/security" },
        ]
    },
];

export const navigationUser = [
    {
        title: "My Store",
        icon: "bag",
        href: "/shop",
    },
    {
        title: "Account Settings",
        icon: "edit-profile",
        href: "/settings",
    },
    {
        title: "Analytics",
        icon: "chart",
        href: "/customers",
    },
    {
        title: "Affiliate Program",
        icon: "chain-think",
        href: "/affiliate-center",
    },
    {
        title: "Discover Creators",
        icon: "grid",
        href: "/explore-creators",
    },
    {
        title: "Pricing",
        icon: "star-fill",
        href: "/upgrade-to-pro",
    },
];
