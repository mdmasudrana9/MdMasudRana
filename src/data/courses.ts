export interface Course {
  title: string;
  platform: string;
  instructor: string;
  completedDate: string;
  certificateUrl?: string;
  topics: string[];
}

export const courses: Course[] = [
  {
    title: "The Complete Web Developer Bootcamp",
    platform: "Udemy",
    instructor: "Dr. Angela Yu",
    completedDate: "2023",
    topics: ["HTML", "CSS", "JavaScript", "Node.js", "React", "MongoDB"],
  },
  {
    title: "Next.js & React - The Complete Guide",
    platform: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    completedDate: "2024",
    topics: ["Next.js", "React", "SSR", "API Routes", "Authentication"],
  },
  {
    title: "Data Structures and Algorithms",
    platform: "Coursera",
    instructor: "UC San Diego",
    completedDate: "2023",
    topics: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Sorting"],
  },
  {
    title: "Python for Everybody",
    platform: "Coursera",
    instructor: "University of Michigan",
    completedDate: "2022",
    topics: ["Python", "Data Structures", "Web Scraping", "Databases"],
  },
];
