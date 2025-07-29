# MEWAYZ Component Mapping & Style Reference Guide

## 🎯 Purpose
This document provides a comprehensive mapping of all available components, templates, and patterns in `/frontend/style-reference` to ensure maximum reuse and consistency across the platform.

---

## 📦 Core Components (`/frontend/style-reference/components/`)

### Layout & Structure
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **Layout** | `/components/Layout/` | `title?: string, children: ReactNode, newProduct?: boolean, hideSidebar?: boolean` | Main page wrapper with header/sidebar |
| **Header** | `/components/Header/` | `className?: string, title?: string, newProduct?: boolean, hideSidebar?: boolean, onToggleSidebar?: () => void` | Top navigation bar |
| **Sidebar** | `/components/Sidebar/` | `visibleSidebar?: boolean, hideSidebar?: boolean, onCloseSidebar?: () => void` | Left navigation panel |
| **Modal** | `/components/Modal/` | `className?: string, classWrapper?: string, open: boolean, onClose: () => void, children: ReactNode, isSlidePanel?: boolean` | Overlay dialogs |
| **Card** | `/components/Card/` | `className?: string, classHead?: string, title: string, children: ReactNode, selectOptions?: SelectOption[], selectValue?: SelectOption, selectOnChange?: (value: SelectOption) => void, headContent?: ReactNode` | Content containers |

### Form Components
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **Button** | `/components/Button/` | `className?: string, icon?: string, children?: ReactNode, isWhite?: boolean, isBlack?: boolean, isGray?: boolean, isCircle?: boolean, isStroke?: boolean, as?: "button" \| "a" \| "link"` | All button variations |
| **Field** | `/components/Field/` | `className?: string, classInput?: string, label?: string, innerLabel?: string, tooltip?: string, children?: ReactNode, textarea?: boolean, type?: string, validated?: boolean, handleForgotPassword?: () => void` | Text inputs and textareas |
| **Select** | `/components/Select/` | `className?: string, classButton?: string, label?: string, tooltip?: string, value: SelectOption \| null, onChange: (value: SelectOption) => void, options: SelectOption[], isBlack?: boolean, placeholder?: string` | Dropdown selects |
| **Dropdown** | `/components/Dropdown/` | `className?: string, items: SelectOption[], value: SelectOption, setValue: (value: SelectOption) => void` | Simple dropdowns |
| **Checkbox** | `/components/Checkbox/` | `className?: string, classTick?: string, label?: string, checked: boolean, onChange: (value: boolean) => void` | Checkbox inputs |
| **Switch** | `/components/Switch/` | `className?: string, checked: boolean, onChange: (checked: boolean) => void` | Toggle switches |
| **Range** | `/components/Range/` | `label?: string, tooltip?: string, values: number[], setValues: (values: number[]) => void, min?: number, max?: number, step?: number, prefix?: string` | Range sliders |
| **Search** | `/components/Search/` | `className?: string, classInput?: string, classButton?: string, value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void, placeholder: string, isGray?: boolean, onClear?: () => void` | Search inputs |
| **Editor** | `/components/Editor/` | `className?: string, content?: string, onChange?: (content: string) => void, label?: string, tooltip?: string` | Rich text editor |
| **Message** | `/components/Message/` | `className?: string, value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, placeholder?: string, autoFocus?: boolean` | Message input |
| **DateAndTime** | `/components/DateAndTime/` | `className?: string, label?: string, tooltip?: string, startDate: Date, setStartDate: (date: Date) => void, startTime: Date, setStartTime: (date: Date) => void` | Date/time pickers |
| **FieldFiles** | `/components/FieldFiles/` | `className?: string, label?: string, tooltip?: string, onChange?: (file: File \| null) => void` | File upload |
| **FieldImage** | `/components/FieldImage/` | `className?: string, classImage?: string, label?: string, tooltip?: string, onChange?: (file: File) => void, initialImage?: string` | Image upload |

### Data Display
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **Table** | `/components/Table/` | `selectAll?: boolean, onSelectAll?: (enabled: boolean) => void, cellsThead: ReactNode, children: ReactNode, isMobileVisibleTHead?: boolean` | Data tables |
| **TableRow** | `/components/TableRow/` | `className?: string, selectedRows?: boolean, onRowSelect?: (enabled: boolean) => void, children: ReactNode, onClick?: () => void` | Table rows |
| **TableProductCell** | `/components/TableProductCell/` | `title: string, details: string, image: string, children: ReactNode, mobileContent?: ReactNode` | Product table cells |
| **Tabs** | `/components/Tabs/` | `className?: string, classButton?: string, items: TabsOption[], value: TabsOption, setValue: (value: TabsOption) => void, isOnlyIcon?: boolean` | Tab navigation |
| **Tooltip** | `/components/Tooltip/` | `className?: string, content: string, place?: PlacesType, children?: ReactNode, large?: boolean` | Tooltips |
| **Icon** | `/components/Icon/` | `className?: string, name: string, fill?: string` | SVG icons |
| **Image** | `/components/Image/` | Standard Next.js Image props | Optimized images |
| **Logo** | `/components/Logo/` | `className?: string` | Brand logo |
| **Spinner** | `/components/Spinner/` | `className?: string` | Loading indicators |

### Specialized Components
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **ProductView** | `/components/ProductView/` | `className?: string` | Product analytics chart |
| **CardChartPie** | `/components/CardChartPie/` | `title: string, data: { name: string; value: number; icon?: string }[]` | Pie chart cards |
| **PopularProducts** | `/components/PopularProducts/` | `title: string, items: ProductItem[]` | Product listings |
| **ShopItem** | `/components/ShopItem/` | `className?: string, value: ShopItemType` | Shop product cards |
| **GridProduct** | `/components/GridProduct/` | `title: string, image: string, price: number, selectedRows?: boolean, onRowSelect: (enabled: boolean) => void, children: ReactNode, actions: ReactNode` | Product grid items |
| **Product** | `/components/Product/` | `value: ProductType` | Product displays |
| **Follower** | `/components/Follower/` | `className?: string, value: FollowerType` | User follower cards |
| **CountryItem** | `/components/CountryItem/` | `value: CountryType` | Country analytics |
| **NewCustomers** | `/components/NewCustomers/` | `className?: string, percentage?: number` | Customer metrics |
| **Percentage** | `/components/Percentage/` | `className?: string, value: number, large?: boolean` | Percentage displays |
| **LikeButton** | `/components/LikeButton/` | `className?: string` | Like interactions |
| **ThemeButton** | `/components/ThemeButton/` | `className?: string` | Theme switcher |
| **NavLink** | `/components/NavLink/` | `value: NavLinkType, onClick?: () => void` | Navigation links |
| **NoFound** | `/components/NoFound/` | `title: string` | Empty states |

### Utility Components
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **DeleteItems** | `/components/DeleteItems/` | `counter?: number, onDelete: () => void, isLargeButton?: boolean, content?: string` | Bulk delete actions |
| **UnpublishItems** | `/components/UnpublishItems/` | `items?: number[], image?: string, onClick: () => void, isLargeButton?: boolean` | Bulk unpublish |
| **ShareProduct** | `/components/ShareProduct/` | `title: string, details: string, image: string` | Product sharing |
| **ScheduleProduct** | `/components/ScheduleProduct/` | `title: string, details: string, image: string, price: number, reSchedule?: boolean` | Product scheduling |
| **RefundRequests** | `/components/RefundRequests/` | No props | Refund widgets |
| **Filters** | `/components/Filters/` | No props | Filter panels |
| **Compatibility** | `/components/Compatibility/` | `classItemName?: string` | Compatibility checks |
| **Emoji** | `/components/Emoji/` | `classButton?: string, classMenuItems?: string, onEmojiClick: (emoji: EmojiClickData) => void` | Emoji picker |

### Authentication Components
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **Login** | `/components/Login/` | No props | Login modal |
| **SignIn** | `/components/Login/SignIn/` | `handleSignUp: () => void, handleForgotPassword: () => void` | Sign in form |
| **CreateAccount** | `/components/Login/CreateAccount/` | `handleSignIn: () => void` | Registration form |
| **ResetPassword** | `/components/Login/ResetPassword/` | `handleSignIn: () => void` | Password reset |

### Header Subcomponents
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **SearchGlobal** | `/components/Header/SearchGlobal/` | `className?: string, onClose?: () => void, visible?: boolean` | Global search |
| **Messages** | `/components/Header/Messages/` | No props | Message dropdown |
| **Notifications** | `/components/Header/Notifications/` | No props | Notification dropdown |
| **User** | `/components/Header/User/` | No props | User menu |

### Sidebar Subcomponents
| Component | Path | Props | Usage |
|-----------|------|-------|-------|
| **SidebarDropdown** | `/components/Sidebar/Dropdown/` | `value: DropdownType` | Sidebar navigation |

---

## 🏗️ Page Templates (`/frontend/style-reference/templates/`)

### Core Pages
| Template | Path | Structure | Components Used |
|----------|------|-----------|-----------------|
| **HomePage** | `/templates/HomePage/` | Dashboard layout with left/right columns | Layout, Overview, ProductView, OverviewSlider, GetMoreCustomers, PopularProducts, Comments, RefundRequests |
| **SettingsPage** | `/templates/SettingsPage/` | Settings with scrollspy navigation | Layout, Menu sections for different settings areas |

### Products Module
| Template | Path | Structure | Components Used |
|----------|------|-----------|-----------------|
| **ProductsOverview** | `/templates/Products/OverviewPage/` | Product analytics dashboard | Layout, Overview cards, ProductActivity, Products, ProductView |
| **NewProductPage** | `/templates/Products/NewProductPage/` | Multi-section product creation | Layout, CategoryAndAttributes, CoverImage, ProductDetails, Price, Images, Demos, etc. |
| **DraftsPage** | `/templates/Products/DraftsPage/` | Draft products management | Layout, Grid/List toggle, bulk actions |
| **ReleasedPage** | `/templates/Products/ReleasedPage/` | Released products management | Layout, Grid/List toggle, product statistics |
| **ScheduledPage** | `/templates/Products/ScheduledPage/` | Scheduled products | Layout, List view with scheduling options |
| **CommentsPage** | `/templates/Products/CommentsPage/` | Product comments management | Layout, Comments list with reply functionality |

### Customers Module
| Template | Path | Structure | Components Used |
|----------|------|-----------|-----------------|
| **CustomersOverview** | `/templates/Customers/OverviewPage/` | Customer analytics | Layout, Overview, ActiveTimes, Countries, Messages, RefundRequests, ShareProducts, TrafficChannel |
| **CustomerListPage** | `/templates/Customers/CustomerList/CustomerListPage/` | Customer management | Layout, List with selection, filters |
| **CustomerDetailsPage** | `/templates/Customers/CustomerList/DetailsPage/` | Individual customer view | Layout, Customer details, Contacts, PurchaseHistory |

### Income Module
| Template | Path | Structure | Components Used |
|----------|------|-----------|-----------------|
| **EarningPage** | `/templates/Income/EarningPage/` | Earnings analytics | Layout, Balance, Countries, RecentEarnings, TopEarningProducts, Transactions |
| **PayoutsPage** | `/templates/Income/PayoutsPage/` | Payout management | Layout, Statistics, PayoutHistory |
| **RefundsPage** | `/templates/Income/Refunds/RefundsPage/` | Refund management | Layout, List with bulk actions |
| **RefundDetailsPage** | `/templates/Income/Refunds/DetailsPage/` | Individual refund view | Layout, Statistics, refund details |
| **StatementsPage** | `/templates/Income/StatementsPage/` | Financial statements | Layout, Statistics, Transactions |

### Shop Module
| Template | Path | Structure | Components Used |
|----------|------|-----------|-----------------|
| **ShopPage** | `/templates/Shop/ShopPage/` | Shop storefront | Layout, Profile, Tabs (Products/Followers/Followings), Filters, ShopItem grid |
| **ShopDetailsPage** | `/templates/Shop/ShopDetailsPage/` | Product detail view | Layout, Gallery, Description, Comments, Populars |

### Other Modules
| Template | Path | Structure | Components Used |
|----------|------|-----------|-----------------|
| **MessagesPage** | `/templates/MessagesPage/` | Messaging interface | Layout, Message list, Chat details |
| **NotificationsPage** | `/templates/Notifications/` | Notification center | Layout, Filter, Notification list |
| **PromotePage** | `/templates/PromotePage/` | Social media promotion | Layout, Insights, Engagement, Interactions, List (NewPost, Published, Scheduled) |
| **AffiliateCenterPage** | `/templates/AffiliateCenterPage/` | Affiliate dashboard | Layout, Insights, Performance, CampaignEarning, CreateLink, PopularProducts, ProductView |
| **ExploreCreatorsPage** | `/templates/ExploreCreatorsPage/` | Creator discovery | Layout, Filters, Creator grid |
| **UpgradeToProPage** | `/templates/UpgradeToProPage/` | Upgrade flow | Layout, Pricing, FAQ |

---

## 🎨 Design System (`/frontend/style-reference/app/globals.css`)

### Color Variables
```css
/* Shades */
--shade-01: #141414;  /* Darkest */
--shade-02: #101010;  /* Text primary */
--shade-03: #191919;  /* Dark backgrounds */
--shade-04: #222222;  /* Dark surface */
--shade-05: #4c4c4c;  /* Medium dark */
--shade-06: #727272;  /* Text secondary */
--shade-07: #7b7b7b;  /* Text tertiary */
--shade-08: #e2e2e2;  /* Light border */
--shade-09: #f1f1f1;  /* Light surface */
--shade-10: #fdfdfd;  /* Lightest */

/* Primary Colors */
--primary-01: #2a85ff;  /* Blue */
--primary-02: #00a656;  /* Green */
--primary-03: #ff381c;  /* Red */
--primary-04: #7f5fff;  /* Purple */
--primary-05: #ff9d34;  /* Orange */

/* Secondary Colors */
--secondary-01: #ffbc99;  /* Light orange */
--secondary-02: #cabdff;  /* Light purple */
--secondary-03: #b1e5fc;  /* Light blue */
--secondary-04: #b5e4ca;  /* Light green */
--secondary-05: #ffd88d;  /* Light yellow */
```

### Layout Classes
```css
.center               /* Centered layout */
.center-with-sidebar  /* Centered with sidebar */
.col-right           /* Right column */
.col-left            /* Left column */
.card                /* Card container */
```

### Utility Classes
```css
.gradient-menu         /* Menu gradient */
.gradient-card         /* Card gradient */
.gradient-repeat-lines /* Line pattern gradient */
.label                /* Base label style */
.label-green          /* Green label */
.label-red            /* Red label */
.label-yellow         /* Yellow label */
.label-gray           /* Gray label */
.box-hover            /* Hover effect */
.action               /* Action button style */
```

### Component-Specific Classes
```css
.chart-tooltip        /* Chart tooltip */
.chart-tooltip-up     /* Upward chart tooltip */
.custom-datepicker    /* Date picker styling */
.tiptap               /* Rich text editor */
.react-tooltip        /* Tooltip styling */
```

---

## 🔄 Usage Patterns

### Standard Page Structure
```typescript
// Basic page template
import Layout from "@/components/Layout";

export default function PageName() {
    return (
        <Layout title="Page Title">
            <div className="flex max-lg:block">
                <div className="col-left">
                    {/* Left column content */}
                </div>
                <div className="col-right">
                    {/* Right column content */}
                </div>
            </div>
        </Layout>
    );
}
```

### Component Reuse Priority
1. **Search existing components first** - Check `/components/` directory
2. **Check template patterns** - Look at similar pages in `/templates/`
3. **Adapt existing components** - Modify props, not structure
4. **Follow established patterns** - Use same CSS classes and structure

### File Naming Conventions
- **Components**: PascalCase directories with `index.tsx`
- **Templates**: PascalCase with descriptive names
- **Pages**: kebab-case for routes, PascalCase for components
- **Types**: camelCase interfaces exported from `/types/`

### State Management Patterns
```typescript
// Selection pattern (used across multiple templates)
const { selectedRows, handleRowSelect, handleSelectAll, handleDeselect } = useSelection(items);

// Tab pattern
const [activeTab, setActiveTab] = useState(tabs[0]);

// Modal pattern
const [isModalOpen, setIsModalOpen] = useState(false);
```

---

## ✅ Implementation Checklist

### Before Creating New Components
- [ ] Search `/components/` for existing solutions
- [ ] Check similar functionality in `/templates/`
- [ ] Review CSS classes in `globals.css`
- [ ] Verify responsive patterns
- [ ] Check accessibility features

### Component Creation Guidelines
- [ ] Follow TypeScript interfaces
- [ ] Use established prop patterns
- [ ] Apply consistent CSS classes
- [ ] Include responsive design
- [ ] Add accessibility attributes
- [ ] Document prop interfaces
- [ ] Export from component directory

### Page Creation Guidelines
- [ ] Use appropriate template as base
- [ ] Import from established components
- [ ] Follow layout patterns
- [ ] Apply consistent styling
- [ ] Test responsive behavior
- [ ] Verify accessibility
- [ ] Update navigation if needed

---

## 🎯 Quick Reference

### Most Commonly Used Components
1. **Layout** - Every page wrapper
2. **Button** - All interactive actions
3. **Field** - Form inputs
4. **Card** - Content containers
5. **Table/TableRow** - Data display
6. **Modal** - Overlays and dialogs
7. **Tabs** - Navigation within pages
8. **Select/Dropdown** - Choice inputs
9. **Search** - Filter and search functionality
10. **Icon** - Visual indicators

### Most Reusable Templates
1. **HomePage** - Dashboard pattern
2. **OverviewPage** - Analytics layout
3. **ListPage** - Data management
4. **DetailsPage** - Individual item view
5. **SettingsPage** - Configuration layout

This mapping ensures maximum component reuse and maintains visual consistency across the entire MEWAYZ platform. 