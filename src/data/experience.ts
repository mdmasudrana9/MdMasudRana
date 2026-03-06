export interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: "Nexstack",
    position: "NextJS React Developer",
    location: "Singapore (Remote)",
    duration: "Jun 2024 – Jan 2025",
    responsibilities: [
      "Built scalable web applications using Next.js.",
      "Developed reusable components and modern frontend architecture.",
      "Ensured responsive design and cross-device compatibility.",
    ],
  },
  {
    company: "Softkarrot",
    position: "Junior Software Engineer",
    location: "Dhaka (Remote)",
    duration: "Oct 2023 – May 2024",
    responsibilities: [
      "Designed scalable system architecture considering performance and security.",
      "Tested and debugged code for cross-browser compatibility.",
      "Optimized application performance and maintainability.",
    ],
  },
];
