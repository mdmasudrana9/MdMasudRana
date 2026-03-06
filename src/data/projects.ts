export interface Project {
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  category: string;
}

export const projects: Project[] = [
  {
    name: "EnrollOpp",
    description: "A platform for hosting online seminars where organizers can create seminars and users can enroll.",
    features: [
      "Seminar management dashboard",
      "User enrollment workflow",
      "Blog module with pagination",
      "JWT authentication",
    ],
    techStack: ["Next.js", "Redux", "Express.js", "MongoDB"],
    category: "Full-Stack",
  },
  {
    name: "Pustok — Old Book Marketplace",
    description: "A digital marketplace for buying, lending, and giving away old books.",
    features: [
      "Smart book search",
      "Book lending system",
      "User reviews and ratings",
      "Free book giveaway",
    ],
    techStack: ["Next.js", "Redux", "Express.js", "MongoDB"],
    category: "Full-Stack",
  },
  {
    name: "Gemini AI Clone",
    description: "An AI chatbot inspired by Google Gemini with real-time text streaming.",
    features: [
      "Real-time text streaming",
      "Conversational AI interface",
      "Modern chat UI",
    ],
    techStack: ["React", "Gemini API"],
    category: "AI",
  },
];
