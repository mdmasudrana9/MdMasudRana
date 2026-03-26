export interface Project {
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  category: string;
  liveLink?: string;
  githubLink?: string;
  image?: string; // নতুন ফিল্ড
}

export const projects: Project[] = [
  {
    name: "EnrollOpp",
    description:
      "A platform for hosting online seminars where organizers can create seminars and users can enroll.",
    features: [
      "Manage seminars with a dedicated dashboard",
      "Allow users to enroll in events easily",
      "Publish and browse blog content with pagination",
      "Secure authentication using JWT",
    ],
    techStack: ["Next.js", "Redux", "Express.js", "MongoDB"],
    category: "Full-Stack",
    liveLink: "http://enrollopp.com/",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    name: "Pustok — Old Book Marketplace",
    description:
      "A digital marketplace for buying, lending, and giving away old books.",
    features: [
      "Search books with smart filtering options",
      "Enable users to lend and borrow books",
      "Collect user reviews and ratings",
      "Allow free book sharing and giveaways",
    ],
    techStack: ["Next.js", "Redux", "Express.js", "MongoDB"],
    category: "Full-Stack",
    liveLink: "https://pustok-new.vercel.app/",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    name: "Gemini AI Clone",
    description:
      "An AI chatbot inspired by Google Gemini with real-time text streaming.",
    features: [
      "Generate responses with real-time streaming",
      "Provide a conversational chat interface",
      "Display messages in a modern chat UI",
      "Handle user input and AI responses efficiently",
    ],
    techStack: ["React", "Gemini API"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    name: "Minimal Project Management System (MPMS)",
    description:
      "A full-stack project management system with Admin and User panels.",
    features: [
      "Manage projects, sprints, and tasks efficiently",
      "Track task progress with status updates",
      "Control access with role-based authentication",
      "Monitor performance with reports and charts",
    ],
    techStack: [
      "Next.js (TypeScript)",
      "Express.js (TypeScript)",
      "MongoDB / PostgreSQL",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    category: "Full-Stack",
    liveLink: "https://mpms-khaki.vercel.app/dashboard",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    name: "Hidaya — Full-Stack Islamic Platform",
    description:
      "A comprehensive Islamic platform for Bengali-speaking Muslims.",
    features: [
      "Read the Qur’an with Bangla translations",
      "Browse authentic Hadith collections",
      "Check real-time prayer schedules",
      "Calculate and manage Zakat donations",
    ],
    techStack: [
      "React + Vite + TypeScript",
      "Tailwind CSS",
      "Node.js + Express.js",
      "MongoDB Atlas",
      "Firebase Authentication",
      "Supabase, AlQuran API, Aladhan API",
    ],
    category: "Full-Stack",
    liveLink: "https://hidaiya-client.vercel.app/",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb",
  },
  {
    name: "Pill Splitter UI — Pathao Challenge",
    description:
      "An interactive UI challenge with dynamic pill splitting and drag-and-drop.",
    features: [
      "Create pill shapes with click and drag",
      "Display real-time split guides with cursor",
      "Split components dynamically with constraints",
      "Move elements using drag and drop",
    ],
    techStack: ["React", "Tailwind CSS"],
    category: "Frontend",
    liveLink: "https://pill-splitter-one.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Shuffle Board UI — Pathao Challenge",
    description:
      "A Trello-style interactive board with drag-and-drop and animations.",
    features: [
      "Display cards in a two-column board layout",
      "Move cards between columns with drag and drop",
      "Show floating card effect during dragging",
      "Highlight drop positions with smooth animations",
    ],
    techStack: ["React", "Tailwind CSS"],
    category: "Frontend",
    liveLink: "https://shuffle-board-challenge.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
  },
];
