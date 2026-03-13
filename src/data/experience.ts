export interface Experience {
  logo: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
  url: string;
}

export const experiences: Experience[] = [
  {
    logo: "/assets/unipixer.png",
    url: "https://unipixer.com/",
    company: "UNIPIXER",
    position: "Full Stack Developer",
    location: "Barishal, Bangladesh (Onsite)",
    duration: "Feb 2025 – Present",
    responsibilities: [
      "Developing scalable full-stack web applications using MERN Stack (React.js, Node.js, Express.js, MongoDB) with PostgreSQL integration.",
      "Building and maintaining RESTful APIs for web applications and third-party service integrations.",
      "Designing and optimizing database schemas using MongoDB and PostgreSQL for high-performance applications.",
      "Implementing secure authentication and authorization systems using JWT and modern security practices.",
      "Optimizing application performance, SEO, and responsive UI for better user experience across devices.",
      "Collaborating with cross-functional teams to deliver maintainable, scalable, and production-ready web solutions.",
    ],
  },
  {
    url: "https://nexstack.sg/",
    logo: "/assets/nexstacksg_logo.jpeg",
    company: "NEXSTACK",
    position: "Next.js React Developer",
    location: "Singapore (Remote)",
    duration: "Jun 2024 – Jan 2025",
    responsibilities: [
      "Developed high-performance web applications using Next.js and React.js with modern frontend architecture.",
      "Built reusable and scalable UI components following best practices in component-based development.",
      "Implemented Server-Side Rendering (SSR) and SEO optimization to improve website performance and search visibility.",
      "Ensured responsive design and cross-browser compatibility across desktop, tablet, and mobile devices.",
      "Collaborated with backend developers and designers to deliver seamless user experiences.",
    ],
  },
  {
    url: "https://www.softkarrot.com/",
    logo: "/assets/SoftKarrot.jpg",
    company: "SOFTKARROT",
    position: "Junior Software Engineer",
    location: "Dhaka, Bangladesh (Remote)",
    duration: "Oct 2023 – May 2024",
    responsibilities: [
      "Developed and maintained scalable web applications using modern technologies including React.js, Node.js, and MongoDB.",
      "Assisted in designing system architecture focused on performance, scalability, and security.",
      "Performed code testing, debugging, and ensured cross-browser compatibility and responsive UI.",
      "Optimized application performance, maintainability, and adherence to best coding practices.",
      "Collaborated with senior developers and designers to implement new features and enhance user experience.",
    ],
  },
];
