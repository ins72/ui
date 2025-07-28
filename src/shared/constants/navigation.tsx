export const navigation = [
    {
        title: "Dashboard",
        icon: "dashboard",
        href: "/",
    },
    {
        title: "Products",
        icon: "product-think",
        list: [
            {
                title: "Overview",
                href: "/products",
            },
            {
                title: "Drafts",
                href: "/products/drafts",
                counter: 2,
            },
            {
                title: "Published",
                href: "/products/released",
            },
            {
                title: "Customer Feedback",
                href: "/products/comments",
            },
            {
                title: "Scheduled",
                href: "/products/scheduled",
                counter: 8,
            },
        ],
    },
    {
        title: "Customers",
        icon: "profile",
        list: [
            {
                title: "Overview",
                href: "/customers",
            },
            {
                title: "Customer Database",
                href: "/customers/customer-list",
            },
        ],
    },
    {
        title: "Store",
        icon: "wallet",
        href: "/shop",
    },
    {
        title: "Revenue",
        icon: "income",
        list: [
            {
                title: "Earnings",
                href: "/income/earning",
            },
            {
                title: "Refunds",
                href: "/income/refunds",
                counter: 3,
            },
            {
                title: "Payouts",
                href: "/income/payouts",
            },
            {
                title: "Financial Reports",
                href: "/income/statements",
            },
        ],
    },
    {
        title: "Marketing",
        icon: "promote",
        href: "/promote",
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
