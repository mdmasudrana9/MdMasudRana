export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java", "PHP"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "GraphQL",
      "Socket.io",
      "Strapi",
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "Firebase",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Firebase",
      "Vercel",
      "Netlify",
      "Figma",
      "Postman",
      "ESLint",
      "VS Code",
      "Notion",
      "Google Chrome",
      "Cursor",
      "Trey",
    ],
  },
];
