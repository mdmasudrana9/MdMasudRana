export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn how to structure your Node.js backend for production-ready applications with clean architecture patterns.",
    date: "2024-12-15",
    readTime: "8 min",
    tags: ["Node.js", "Backend", "API"],
    slug: "scalable-apis-nodejs",
  },
  {
    title: "Next.js App Router: A Complete Guide",
    excerpt: "Deep dive into Next.js 14 App Router, server components, and how to migrate from Pages Router.",
    date: "2024-11-20",
    readTime: "12 min",
    tags: ["Next.js", "React", "Frontend"],
    slug: "nextjs-app-router-guide",
  },
  {
    title: "State Management in 2024: Redux vs Zustand",
    excerpt: "Comparing modern state management solutions and when to use each in your React applications.",
    date: "2024-10-05",
    readTime: "6 min",
    tags: ["React", "State Management"],
    slug: "redux-vs-zustand",
  },
  {
    title: "MongoDB Aggregation Pipeline Tips & Tricks",
    excerpt: "Advanced MongoDB aggregation techniques to query and transform data efficiently.",
    date: "2024-09-18",
    readTime: "10 min",
    tags: ["MongoDB", "Database", "Backend"],
    slug: "mongodb-aggregation-tips",
  },
];
