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
    title: "Software Engineering & Programming Fundamentals",
    platform: "Phitron",
    instructor: "Jhankar Mahbub",
    completedDate: "2023",
    topics: [
      "C Programming",
      "C++ Programming",
      "Python Programming",
      "Problem Solving",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Django",
      "Software Engineering Basics",
    ],
  },
  {
    title: "Complete Web Development Course",
    platform: "Programming Hero",
    instructor: "Jhankar Mahbub",
    completedDate: "2024",
    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "Next.js",
      "Redux",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "PostgreSQL",
      "Prisma",
    ],
  },
];
