export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  content: string;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn how to structure your Node.js backend for production-ready applications with clean architecture patterns.",
    date: "2024-12-15",
    readTime: "8 min",
    tags: ["Node.js", "Backend", "API"],
    slug: "scalable-apis-nodejs",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    content: `
## Introduction

Building a scalable API is one of the most critical skills for any backend developer. In this article, I'll walk you through how I structure my Node.js + Express applications for production, drawing from real-world experience building systems that serve thousands of users.

## The Problem with Unstructured APIs

Most tutorials teach you to put everything in a single \`index.js\` file. This works for prototypes, but falls apart when your application grows. You end up with:

- **Tightly coupled code** that's impossible to test
- **No separation of concerns** — routes, business logic, and database queries all mixed together
- **Difficult debugging** when errors occur in production

## Clean Architecture Approach

I follow a layered architecture pattern that separates concerns clearly:

### 1. Route Layer
Routes should only handle HTTP-specific logic — parsing request params, setting status codes, and delegating to controllers.

\`\`\`javascript
// routes/user.routes.js
const router = express.Router();
router.get('/:id', userController.getById);
router.post('/', validateBody(createUserSchema), userController.create);
router.put('/:id', validateBody(updateUserSchema), userController.update);
\`\`\`

### 2. Controller Layer
Controllers orchestrate the flow — they call services, handle errors, and format responses. They should never contain business logic directly.

\`\`\`javascript
// controllers/user.controller.js
const getById = async (req, res, next) => {
  try {
    const user = await userService.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
};
\`\`\`

### 3. Service Layer
This is where your business logic lives. Services are framework-agnostic — they don't know about Express, HTTP, or request/response objects.

\`\`\`javascript
// services/user.service.js
const findById = async (id) => {
  const user = await userRepository.findById(id);
  if (user) {
    user.profileComplete = calculateProfileCompletion(user);
  }
  return user;
};
\`\`\`

### 4. Repository Layer
Repositories handle all database interactions. This makes it easy to swap databases or add caching without touching business logic.

## Error Handling Strategy

A centralized error handler is essential. Create custom error classes and a global error middleware:

\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Global error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.isOperational ? err.message : 'Internal server error',
  });
});
\`\`\`

## Database Connection Pooling

For production, always use connection pooling. With MongoDB and Mongoose:

\`\`\`javascript
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});
\`\`\`

## Rate Limiting & Security

Never deploy without these essentials:

- **Rate limiting** with \`express-rate-limit\`
- **CORS** configuration for your specific domains
- **Helmet** for security headers
- **Input validation** with Joi or Zod on every endpoint

## Key Takeaways

1. **Separate concerns** — routes, controllers, services, repositories
2. **Centralize error handling** with custom error classes
3. **Validate everything** — never trust client input
4. **Use connection pooling** for database performance
5. **Add rate limiting** before you need it

Building scalable APIs isn't about using the latest framework — it's about disciplined architecture and consistent patterns.
    `,
  },
  {
    title: "Next.js App Router: A Complete Guide",
    excerpt:
      "Deep dive into Next.js 14 App Router, server components, and how to migrate from Pages Router.",
    date: "2024-11-20",
    readTime: "12 min",
    tags: ["Next.js", "React", "Frontend"],
    slug: "nextjs-app-router-guide",
    coverImage:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=1000",
    content: `
## Introduction

Next.js 14's App Router represents a fundamental shift in how we build React applications. After migrating three production apps from Pages Router, here's everything I've learned about making the transition smoothly.

## Why App Router?

The App Router introduces **React Server Components (RSC)** as the default. This means components render on the server by default, sending minimal JavaScript to the client. The benefits are significant:

- **Smaller bundle sizes** — server components don't add to your JS bundle
- **Direct database access** — query your database right in your components
- **Streaming** — show UI progressively as data loads
- **Nested layouts** — share UI between routes without re-rendering

## File-Based Routing (New Way)

The App Router uses a new file convention inside the \`app/\` directory:

\`\`\`
app/
├── layout.tsx          # Root layout (replaces _app.tsx)
├── page.tsx            # Home page (/)
├── loading.tsx         # Loading UI
├── error.tsx           # Error boundary
├── blog/
│   ├── page.tsx        # /blog
│   └── [slug]/
│       └── page.tsx    # /blog/:slug
\`\`\`

## Server vs Client Components

This is the most important concept to understand:

### Server Components (default)
\`\`\`tsx
// This runs on the server — no "use client" directive
async function BlogList() {
  const posts = await db.posts.findMany(); // Direct DB access!
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
\`\`\`

### Client Components
\`\`\`tsx
"use client"; // Required for interactivity

import { useState } from "react";

function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>❤️</button>;
}
\`\`\`

**Rule of thumb**: Keep components as server components unless they need interactivity (useState, useEffect, event handlers, browser APIs).

## Data Fetching Patterns

### Parallel Data Fetching
\`\`\`tsx
async function Dashboard() {
  // These run in parallel!
  const [user, posts, stats] = await Promise.all([
    getUser(),
    getPosts(),
    getStats(),
  ]);
  return <DashboardUI user={user} posts={posts} stats={stats} />;
}
\`\`\`

### Streaming with Suspense
\`\`\`tsx
import { Suspense } from "react";

function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<Skeleton />}>
        <SlowDataComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

## Migration Tips

1. **Start with layouts** — convert \`_app.tsx\` to \`app/layout.tsx\`
2. **Move pages incrementally** — both routers can coexist
3. **Audit client-side code** — many components can become server components
4. **Update data fetching** — replace \`getServerSideProps\` with async components

## Common Pitfalls

- Don't use \`"use client"\` everywhere — it defeats the purpose
- Remember that server components can't use hooks
- Client components can import server components, but not vice versa
- Environment variables without \`NEXT_PUBLIC_\` prefix only work in server components

## Conclusion

The App Router is the future of Next.js. While the migration takes effort, the performance gains and developer experience improvements make it worthwhile. Start with new features in the App Router and gradually migrate existing pages.
    `,
  },
  {
    title: "State Management in 2024: Redux vs Zustand",
    excerpt:
      "Comparing modern state management solutions and when to use each in your React applications.",
    date: "2024-10-05",
    readTime: "6 min",
    tags: ["React", "State Management"],
    slug: "redux-vs-zustand",
    coverImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1000",
    content: `
## The State of State Management

React's ecosystem has evolved dramatically. While Redux dominated for years, lighter alternatives like Zustand have gained massive popularity. After using both extensively in production, here's my honest comparison.

## Redux Toolkit — The Established Choice

Redux Toolkit (RTK) simplified Redux significantly, but it still requires understanding several concepts:

\`\`\`javascript
// store/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload);
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
  },
});
\`\`\`

### Redux Pros
- Mature ecosystem with excellent DevTools
- RTK Query for API caching (phenomenal)
- Predictable state updates
- Large community and extensive documentation

### Redux Cons
- Significant boilerplate even with RTK
- Steep learning curve for newcomers
- Provider wrapping required
- Overkill for simple state needs

## Zustand — The Minimalist Approach

Zustand takes a radically different approach. No providers, no boilerplate, just a hook:

\`\`\`javascript
// store/useCartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
    total: state.total + item.price,
  })),
  removeItem: (id) => set((state) => {
    const item = state.items.find(i => i.id === id);
    return {
      items: state.items.filter(i => i.id !== id),
      total: state.total - (item?.price || 0),
    };
  }),
}));

// Usage — just call the hook!
function Cart() {
  const { items, total, removeItem } = useCartStore();
  return <div>{/* render cart */}</div>;
}
\`\`\`

### Zustand Pros
- Minimal boilerplate — ~70% less code than Redux
- No Provider needed
- Works outside React components
- Tiny bundle size (~1KB)
- Built-in middleware (persist, devtools, immer)

### Zustand Cons
- Smaller ecosystem
- No built-in API caching (need React Query)
- Less structured — can become messy without discipline

## When to Use Which?

**Choose Redux when:**
- Building large enterprise applications
- Your team already knows Redux
- You need RTK Query for complex API caching
- You want strict, predictable state patterns

**Choose Zustand when:**
- Building small to medium applications
- You want minimal boilerplate
- You're already using React Query for server state
- You need state outside React components

## My Recommendation

For most new projects in 2024, I recommend **Zustand + React Query**. Zustand handles client state (UI state, form state, app preferences), while React Query manages server state (API data, caching, mutations). This separation is cleaner than trying to do everything in one library.

That said, Redux with RTK Query is still an excellent choice for large teams that need the structure and tooling that Redux provides.
    `,
  },
  {
    title: "MongoDB Aggregation Pipeline Tips & Tricks",
    excerpt:
      "Advanced MongoDB aggregation techniques to query and transform data efficiently.",
    date: "2024-09-18",
    readTime: "10 min",
    tags: ["MongoDB", "Database", "Backend"],
    slug: "mongodb-aggregation-tips",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    content: `
## Why Aggregation Pipelines?

MongoDB's aggregation framework is incredibly powerful but often underutilized. Most developers stick to basic \`find()\` queries, missing out on transformations that would otherwise require multiple queries or application-level processing.

## Pipeline Basics

An aggregation pipeline is a series of stages that process documents:

\`\`\`javascript
db.orders.aggregate([
  { $match: { status: "completed" } },       // Filter
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }, // Group
  { $sort: { total: -1 } },                  // Sort
  { $limit: 10 },                            // Limit
]);
\`\`\`

## Tip 1: Use \`$facet\` for Multiple Aggregations

Need pagination metadata AND results in one query? \`$facet\` runs multiple pipelines in parallel:

\`\`\`javascript
db.products.aggregate([
  { $match: { category: "electronics" } },
  {
    $facet: {
      metadata: [{ $count: "total" }],
      data: [
        { $sort: { price: -1 } },
        { $skip: 0 },
        { $limit: 20 },
      ],
    },
  },
]);
\`\`\`

## Tip 2: \`$lookup\` with Pipeline (Advanced Joins)

Instead of basic \`$lookup\`, use the pipeline form for filtered joins:

\`\`\`javascript
{
  $lookup: {
    from: "reviews",
    let: { productId: "$_id" },
    pipeline: [
      { $match: { $expr: { $eq: ["$productId", "$$productId"] } } },
      { $match: { rating: { $gte: 4 } } },  // Only high ratings
      { $sort: { createdAt: -1 } },
      { $limit: 5 },
    ],
    as: "topReviews",
  },
}
\`\`\`

## Tip 3: \`$bucket\` for Distribution Analysis

Analyze data distribution without writing complex grouping logic:

\`\`\`javascript
db.users.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [18, 25, 35, 45, 55, 65],
      default: "65+",
      output: {
        count: { $sum: 1 },
        avgIncome: { $avg: "$income" },
      },
    },
  },
]);
\`\`\`

## Tip 4: \`$addFields\` + \`$cond\` for Computed Fields

Add calculated fields without modifying your data:

\`\`\`javascript
{
  $addFields: {
    tier: {
      $cond: {
        if: { $gte: ["$totalSpent", 1000] },
        then: "premium",
        else: {
          $cond: {
            if: { $gte: ["$totalSpent", 500] },
            then: "standard",
            else: "basic",
          },
        },
      },
    },
    discountRate: {
      $switch: {
        branches: [
          { case: { $gte: ["$totalSpent", 1000] }, then: 0.15 },
          { case: { $gte: ["$totalSpent", 500] }, then: 0.10 },
        ],
        default: 0.05,
      },
    },
  },
}
\`\`\`

## Tip 5: Index-Backed Pipelines

Place \`$match\` and \`$sort\` stages early in the pipeline to leverage indexes. MongoDB can only use indexes for the first stages:

\`\`\`javascript
// Good — $match first uses index
[
  { $match: { status: "active", createdAt: { $gte: lastMonth } } },
  { $group: { _id: "$category", count: { $sum: 1 } } },
]

// Bad — $group first scans all documents
[
  { $group: { _id: "$category", count: { $sum: 1 } } },
  { $match: { count: { $gte: 10 } } },
]
\`\`\`

## Tip 6: \`$merge\` for Materialized Views

Store aggregation results in a collection for fast reads:

\`\`\`javascript
db.orders.aggregate([
  { $group: { _id: "$productId", totalSold: { $sum: "$quantity" } } },
  { $merge: { into: "product_stats", whenMatched: "replace" } },
]);
\`\`\`

## Performance Best Practices

1. **Always \`$match\` early** to reduce documents processed
2. **Use \`$project\`** to drop unnecessary fields between stages
3. **Set \`allowDiskUse: true\`** for large datasets
4. **Create compound indexes** that match your \`$match\` + \`$sort\` pattern
5. **Monitor with \`explain("executionStats")\`** to find bottlenecks

## Conclusion

The aggregation pipeline is one of MongoDB's most powerful features. Mastering it means fewer round trips to the database, less application-level data processing, and significantly better performance. Start with these patterns and gradually build more complex pipelines as your needs grow.
    `,
  },
];
