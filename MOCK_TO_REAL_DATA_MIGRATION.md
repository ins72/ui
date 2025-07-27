# Mock to Real Data Migration Guide

This guide explains how to convert all remaining mock data files to use real database data and CRUD operations.

## Overview

The project has been updated to use a real database (SQLite with Prisma) instead of mock data. All API routes have been created and a data service utility is available for easy data fetching.

## What's Already Done

### ✅ API Routes Created
- `/api/customers` - Customer CRUD operations
- `/api/products` - Product CRUD operations  
- `/api/transactions` - Transaction CRUD operations
- `/api/refunds` - Refund CRUD operations
- `/api/statements` - Statement CRUD operations
- `/api/income` - Income CRUD operations
- `/api/comments` - Comment CRUD operations
- `/api/followers` - Follower/Following CRUD operations
- `/api/creators` - Creator CRUD operations
- `/api/shop-items` - Shop item CRUD operations
- `/api/active-times` - Active time CRUD operations
- `/api/countries` - Country CRUD operations
- `/api/promote` - Promote data CRUD operations
- `/api/affiliate-center` - Affiliate data CRUD operations
- `/api/payouts` - Payout CRUD operations
- `/api/notifications` - Notification CRUD operations
- `/api/messages` - Message CRUD operations
- `/api/faqs` - FAQ CRUD operations
- `/api/pricing` - Pricing plan CRUD operations

### ✅ Database Schema
- Complete Prisma schema with all necessary models
- Relationships between models properly defined
- Sample data seeded in the database

### ✅ Data Service Utility
- `lib/data-service.ts` - Centralized data fetching utility
- Type-safe API methods for all endpoints
- Error handling and pagination support

## How to Convert Components

### Step 1: Replace Mock Imports

**Before:**
```tsx
import { customers } from "@/mocks/customers";
import { products } from "@/mocks/products";
```

**After:**
```tsx
"use client";
import { useEffect, useState } from "react";
import { dataService } from "@/lib/data-service";
```

### Step 2: Add State Management

```tsx
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

### Step 3: Fetch Data with useEffect

```tsx
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await dataService.getCustomers();
      if (response.data) {
        setData(response.data);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

### Step 4: Add Loading and Error States

```tsx
if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}
```

### Step 5: Update Data Usage

**Before:**
```tsx
{customers.map(customer => (
  <div key={customer.id}>{customer.name}</div>
))}
```

**After:**
```tsx
{data.map(customer => (
  <div key={customer.id}>{customer.name}</div>
))}
```

## Complete Example: Pricing Component

Here's a complete example of how the Pricing component was converted:

```tsx
"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { dataService } from "@/lib/data-service";

interface PricingPlan {
  id: string;
  title: string;
  percentage: number | null;
  description: string;
  features: string[] | string;
  isActive: boolean;
  isRecommended: boolean;
  sortOrder: number;
}

const Pricing = () => {
  const [pricing, setPricing] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        setLoading(true);
        const response = await dataService.getPricing();
        if (response.data && Array.isArray(response.data)) {
          const pricingWithFeatures = response.data.map((plan: any) => ({
            ...plan,
            features: JSON.parse(plan.features || '[]')
          }));
          setPricing(pricingWithFeatures);
        }
      } catch (err) {
        console.error('Error fetching pricing:', err);
        setError('Failed to load pricing plans');
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  if (loading) {
    return (
      <div className="mb-22 max-md:mb-14">
        <div className="text-center">
          <div className="text-h4">Loading pricing plans...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-22 max-md:mb-14">
        <div className="text-center">
          <div className="text-h4 text-red-500">{error}</div>
        </div>
      </div>
      );
  }

  return (
    // ... existing JSX with data.map() instead of pricing.map()
  );
};

export default Pricing;
```

## Remaining Components to Convert

Based on the grep search, here are the components that still need to be converted:

### High Priority (Frequently Used)
1. `templates/Income/EarningPage/TopEarningProducts/index.tsx` - Uses `popularProducts`
2. `templates/Income/EarningPage/index.tsx` - Uses `popularProducts`
3. `templates/Products/OverviewPage/Overview/index.tsx` - Uses `overview`
4. `templates/Products/OverviewPage/ProductActivity/index.tsx` - Uses `productActivity`
5. `templates/Products/ScheduledPage/index.tsx` - Uses `draftsProducts`
6. `templates/Products/ReleasedPage/index.tsx` - Uses `releasedProducts`
7. `templates/Products/DraftsPage/index.tsx` - Uses `draftsProducts`
8. `templates/Products/CommentsPage/index.tsx` - Uses `comments`
9. `templates/MessagesPage/index.tsx` - Uses `messages`
10. `templates/Notifications/index.tsx` - Uses `allNotifications`

### Medium Priority
11. `templates/Income/EarningPage/Transactions/index.tsx` - Uses `transactions`
12. `templates/Income/StatementsPage/Transactions/index.tsx` - Uses `transactions`
13. `templates/Income/StatementsPage/Statistics/index.tsx` - Uses `statistics`
14. `templates/Income/EarningPage/RecentEarnings/index.tsx` - Uses `recentEarningsChartData`
15. `templates/Income/EarningPage/Countries/index.tsx` - Uses `countriesEarnings`
16. `templates/Income/EarningPage/Balance/index.tsx` - Uses `balanceEarnings`
17. `templates/Income/Refunds/RefundsPage/index.tsx` - Uses `refunds`
18. `templates/Income/PayoutsPage/Statistics/index.tsx` - Uses `statistics`
19. `templates/Income/PayoutsPage/PayoutHistory/index.tsx` - Uses `payoutHistory`

### Lower Priority (Charts and Analytics)
20. `templates/PromotePage/Interactions/index.tsx` - Uses `interactions`
21. `templates/PromotePage/List/index.tsx` - Uses `publishedItems, scheduledItems`
22. `templates/PromotePage/Insights/index.tsx` - Uses `insights`
23. `templates/PromotePage/Engagement/index.tsx` - Uses `engagementChartData`
24. `templates/ExploreCreatorsPage/index.tsx` - Uses `creators`
25. `templates/Products/OverviewPage/ProductView/index.tsx` - Uses `productsProductViewChartData`
26. `templates/HomePage/OverviewSlider/index.tsx` - Uses `sliderData`
27. `templates/HomePage/ProductView/index.tsx` - Uses `homeProductViewChartData`
28. `templates/HomePage/Overview/Balance/index.tsx` - Uses `homeBalanceChartData`
29. `templates/HomePage/Comments/index.tsx` - Uses `commentsDashboard`

## Data Service Methods Available

```typescript
// Customers
await dataService.getCustomers(params)
await dataService.createCustomer(data)

// Products
await dataService.getProducts(params)
await dataService.createProduct(data)

// Transactions
await dataService.getTransactions(params)
await dataService.createTransaction(data)

// Refunds
await dataService.getRefunds(params)
await dataService.createRefund(data)

// Statements
await dataService.getStatements(params)
await dataService.createStatement(data)

// Income
await dataService.getIncome(params)
await dataService.createIncome(data)

// Comments
await dataService.getComments(params)
await dataService.createComment(data)

// Followers
await dataService.getFollowers(params)
await dataService.createFollow(data)

// Creators
await dataService.getCreators(params)
await dataService.createCreator(data)

// Shop Items
await dataService.getShopItems(params)
await dataService.createShopItem(data)

// Active Times
await dataService.getActiveTimes(params)
await dataService.createActiveTime(data)

// Countries
await dataService.getCountries(params)
await dataService.createCountry(data)

// Promote
await dataService.getPromote(params)
await dataService.createPromote(data)

// Affiliate Center
await dataService.getAffiliateCenter()
await dataService.updateAffiliateCenter(data)

// Payouts
await dataService.getPayouts(params)
await dataService.createPayout(data)

// Notifications
await dataService.getNotifications(params)
await dataService.createNotification(data)

// Messages
await dataService.getMessages(params)
await dataService.createMessage(data)

// FAQs
await dataService.getFaqs(params)
await dataService.createFaq(data)

// Pricing
await dataService.getPricing(params)
await dataService.createPricingPlan(data)
```

## Query Parameters

Most API methods support these query parameters:

```typescript
interface PaginationParams {
  page?: number;        // Page number (default: 1)
  limit?: number;       // Items per page (default: 10)
  search?: string;      // Search term
  type?: string;        // Filter by type
  status?: string;      // Filter by status
  category?: string;    // Filter by category
  tags?: string;        // Filter by tags
  startDate?: string;   // Start date for date ranges
  endDate?: string;     // End date for date ranges
  productId?: string;   // Filter by product ID
  date?: string;        // Specific date
}
```

## Error Handling

Always wrap API calls in try-catch blocks:

```typescript
try {
  const response = await dataService.getCustomers();
  if (response.data) {
    setData(response.data);
  }
} catch (err) {
  console.error('Error fetching customers:', err);
  setError('Failed to load customers');
}
```

## Testing

After converting a component:

1. Run the development server: `npm run dev`
2. Navigate to the page with the converted component
3. Check that data loads correctly
4. Verify error states work
5. Test any interactive features

## Database Seeding

If you need to reset the database with sample data:

```bash
npx tsx scripts/seed-complete.ts
```

This will populate all tables with realistic sample data for testing.

## Next Steps

1. Start with high-priority components (products, customers, income)
2. Convert one component at a time
3. Test each conversion thoroughly
4. Move to medium and lower priority components
5. Remove mock data files once all components are converted

## Support

If you encounter issues during conversion:

1. Check the browser console for errors
2. Verify the API route is working with a tool like Postman
3. Check the database has data: `npx prisma studio`
4. Review the data service utility for correct method names
5. Ensure proper TypeScript types are defined 