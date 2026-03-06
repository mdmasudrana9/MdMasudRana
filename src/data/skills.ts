export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Zustand", "Tailwind CSS", "Material UI", "Ant Design", "Shadcn UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "GraphQL", "MongoDB", "Mongoose", "MySQL", "Strapi"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Firebase", "Vercel", "Figma", "Postman", "ESLint"],
  },
];
