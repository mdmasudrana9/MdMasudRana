export interface Project {
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  category: string;
  image: string;
  status: "Completed" | "In Progress" | "Maintained";
  duration: string;
  role: string;
  challenges: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    name: "EnrollOpp",
    description:
      "A platform for hosting online seminars where organizers can create seminars and users can enroll.",
    longDescription:
      "EnrollOpp is a full-featured seminar management ecosystem designed to connect organizers and learners in a seamless digital environment. It allows organizers to create and publish seminars with rich details such as schedules, pricing, and descriptions, while users can explore, enroll, and track their participation. The platform also includes a blog system for knowledge sharing, authentication with secure JWT-based role management, and a responsive dashboard for both admins and users. It is built with scalability and real-world event management workflows in mind.",
    features: [
      "Manage seminars with a dedicated dashboard",
      "User enrollment workflow",
      "Blog module with pagination",
      "JWT authentication",
    ],
    techStack: ["Next.js", "Redux", "Express.js", "MongoDB"],
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    status: "Completed",
    duration: "3 months",
    role: "Full-Stack Developer",
    challenges: [
      "Real-time enrollment updates",
      "Scalable database design",
      "JWT authentication system",
    ],
    githubUrl: "https://github.com",
    liveUrl: "http://enrollopp.com/",
    highlights: [
      { label: "Users", value: "500+" },
      { label: "Seminars", value: "50+" },
    ],
  },

  {
    name: "Pustok — Old Book Marketplace",
    description:
      "A digital marketplace for buying, lending, and giving away old books.",
    longDescription:
      "Pustok is a community-driven digital marketplace built to promote sustainability and knowledge sharing by giving old books a second life. Users can list books for sale, lending, or free giveaway, while also discovering books through intelligent search and filtering. The platform includes a full lending management system with due dates, return tracking, and notifications. It also supports user reviews, ratings, and profile-based reading history to build trust within the community and encourage book circulation.",
    features: [
      "Smart book search",
      "Book lending system",
      "User reviews and ratings",
      "Free book giveaway",
    ],
    techStack: [
      "Next.js",
      "Redux",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Socket.io",
    ],
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    status: "Completed",
    duration: "4 months",
    role: "Full-Stack Developer",
    challenges: [
      "Efficient search system",
      "Lending queue logic",
      "Image optimization with Cloudinary",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://pustok-new.vercel.app/",
    highlights: [
      { label: "Books", value: "1000+" },
      { label: "Users", value: "300+" },
    ],
  },

  {
    name: "Gemini AI Clone",
    description:
      "An AI chatbot inspired by Google Gemini with real-time text streaming.",
    longDescription:
      "This project is a modern AI chatbot application inspired by Google Gemini, built to deliver a highly interactive conversational experience. It supports real-time streaming responses that simulate natural typing behavior, enhancing user engagement. The system integrates the Gemini API to generate intelligent responses, while also supporting markdown rendering, code highlighting, and conversation history management. The UI is designed for clarity and speed, making it suitable for both casual users and developers exploring AI interactions.",
    features: [
      "Real-time streaming responses",
      "Chat interface",
      "Markdown & code support",
      "Conversation history",
    ],
    techStack: ["React", "Gemini API", "Vite", "CSS Modules"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    status: "Completed",
    duration: "2 weeks",
    role: "Frontend Developer",
    challenges: [
      "Streaming optimization",
      "API rate limit handling",
      "Markdown rendering",
    ],
    githubUrl: "https://github.com",
    liveUrl: "",
    highlights: [
      { label: "Response Time", value: "<2s" },
      { label: "Requests", value: "1000+/day" },
    ],
  },

  {
    name: "MPMS — Project Management System",
    description:
      "A full-stack project management system with Admin and User panels.",
    longDescription:
      "MPMS is a scalable and structured project management system designed to streamline team collaboration and task execution. It provides separate Admin and User dashboards for managing projects, sprints, tasks, and team workflows. The system includes role-based authentication, real-time task tracking, and performance reporting features. Built with a modern full-stack architecture, it focuses on productivity, clarity, and efficient project lifecycle management for teams of any size.",
    features: [
      "Project & task management",
      "Role-based access control",
      "Task tracking system",
      "Reports & analytics",
    ],
    techStack: [
      "Next.js (TypeScript)",
      "Express.js (TypeScript)",
      "MongoDB/PostgreSQL",
      "JWT",
      "Tailwind CSS",
    ],
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    status: "Completed",
    duration: "2 months",
    role: "Full-Stack Developer",
    challenges: [
      "Role-based architecture",
      "Task tracking system",
      "Scalable backend design",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://mpms-khaki.vercel.app/dashboard",
    highlights: [
      { label: "Projects", value: "20+" },
      { label: "Tasks", value: "200+" },
    ],
  },
  {
    name: "Hidaya — Full-Stack Islamic Platform",
    description:
      "A comprehensive Islamic platform for Bengali-speaking Muslims.",
    longDescription:
      "Hidaya is a comprehensive Islamic digital platform designed for Bengali-speaking Muslims, combining essential religious tools in one ecosystem. It provides Quran reading with Bangla translation, authentic Hadith collections, real-time prayer schedules, and a Zakat calculation system. The platform integrates multiple APIs to ensure accurate Islamic data and offers a clean, accessible interface for daily spiritual use. It aims to modernize access to Islamic knowledge and practices in a user-friendly way.",
    features: [
      "Quran with Bangla translation",
      "Hadith collections",
      "Prayer time tracking",
      "Zakat calculator",
    ],
    techStack: [
      "React + Vite + TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "AlQuran API",
      "Aladhan API",
    ],
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb",
    status: "Completed",
    duration: "3 months",
    role: "Full-Stack Developer",
    challenges: [
      "Integrating multiple Islamic APIs",
      "Prayer time accuracy handling",
      "Authentication system setup",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://hidaiya-client.vercel.app/",
    highlights: [
      { label: "Modules", value: "4+" },
      { label: "APIs", value: "3+" },
    ],
  },

  {
    name: "Pill Splitter UI — Pathao Challenge",
    description:
      "An interactive UI challenge with dynamic pill splitting and drag-and-drop.",
    longDescription:
      "This is an interactive frontend UI challenge focused on advanced user interactions such as dynamic shape creation, pill splitting, and drag-and-drop mechanics. The system allows users to visually manipulate pill-like components with real-time cursor-based guidance and smooth animations. It demonstrates strong control over state management, DOM interactions, and responsive UI design, making it a great example of modern frontend engineering skills.",
    features: [
      "Create pill shapes",
      "Dynamic split interaction",
      "Drag and drop support",
      "Real-time cursor guide",
    ],
    techStack: ["React", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    status: "Completed",
    duration: "1 week",
    role: "Frontend Developer",
    challenges: [
      "Smooth drag interactions",
      "Split logic implementation",
      "UI responsiveness",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://pill-splitter-one.vercel.app/",
    highlights: [
      { label: "Interactions", value: "Dynamic" },
      { label: "UI", value: "Realtime" },
    ],
  },

  {
    name: "Shuffle Board UI — Pathao Challenge",
    description:
      "A Trello-style interactive board with drag-and-drop and animations.",
    longDescription:
      "Shuffle Board UI is a Trello-inspired interactive Kanban board designed to demonstrate advanced drag-and-drop interactions and UI animation techniques. Users can move cards between columns with smooth transitions and visual feedback, creating a highly intuitive task management experience. The project focuses on frontend performance, state synchronization, and fluid animations to deliver a polished user experience similar to modern productivity tools.",
    features: [
      "Drag & drop cards",
      "Two-column board system",
      "Floating drag effect",
      "Smooth animations",
    ],
    techStack: ["React", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
    status: "Completed",
    duration: "1 week",
    role: "Frontend Developer",
    challenges: [
      "Drag-drop performance",
      "State synchronization",
      "Animation handling",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://shuffle-board-challenge.vercel.app/",
    highlights: [
      { label: "Board Type", value: "Kanban" },
      { label: "Animations", value: "Smooth" },
    ],
  },
];
