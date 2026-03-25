export interface Project {
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  category: string;
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    name: "EnrollOpp",
    description:
      "A platform for hosting online seminars where organizers can create seminars and users can enroll.",
    features: [
      "Seminar management dashboard",
      "User enrollment workflow",
      "Blog module with pagination",
      "JWT authentication",
    ],
    techStack: ["Next.js", "Redux", "Express.js", "MongoDB"],
    category: "Full-Stack",
    liveLink: "http://enrollopp.com/",
  },
  {
    name: "Pustok — Old Book Marketplace",
    description:
      "A digital marketplace for buying, lending, and giving away old books.",
    features: [
      "Smart book search",
      "Book lending system",
      "User reviews and ratings",
      "Free book giveaway",
    ],
    techStack: ["Next.js", "Redux", "Express.js", "MongoDB"],
    category: "Full-Stack",
    liveLink: "https://pustok-new.vercel.app/",
  },
  {
    name: "Gemini AI Clone",
    description:
      "An AI chatbot inspired by Google Gemini with real-time text streaming.",
    features: [
      "Real-time text streaming",
      "Conversational AI interface",
      "Modern chat UI",
    ],
    techStack: ["React", "Gemini API"],
    category: "AI",
  },
  {
    name: "Minimal Project Management System (MPMS)",
    description:
      "A full-stack project management system with Admin and User panels, supporting project, sprint, and task management with role-based authentication and real-time progress tracking.",
    features: [
      "Role-based authentication (Admin, Manager, Member)",
      "Project, sprint, and task management",
      "Task workflow with status tracking (To Do → Done)",
      "Kanban board with drag-and-drop (optional)",
      "Team & role management system",
      "Task comments and activity logs",
      "Progress tracking with reports and charts",
      "Responsive UI across all devices",
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
  },
];
