export interface Experience {
  logo: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
  url: string;
  description?: string;
}

export const experiences: Experience[] = [
  {
    logo: "/assets/unipixer.png",
    url: "https://unipixer.com/",
    company: "UNIPIXER",
    position: "Full Stack Developer",
    location: "Barishal, Bangladesh (Onsite)",
    duration: "Feb 2025 – Present",
    description:
      "At UNIPIXER, I serve as a Full Stack Developer, building scalable and high-performance web applications using the MERN stack with PostgreSQL integration. I contribute to designing robust backend systems, developing RESTful APIs, implementing secure authentication, and optimizing frontend performance and SEO. I collaborate with cross-functional teams to deliver reliable, user-focused, and production-ready digital solutions.",
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
    description:
      "At NEXSTACK, I worked as a Next.js React Developer, building high-performance and scalable web applications using Next.js and React.js. I focused on implementing server-side rendering (SSR), SEO optimization, and modern frontend architecture. I developed reusable UI components, ensured responsive design across all devices, and collaborated closely with backend developers and designers to deliver fast, accessible, and user-friendly web experiences.",
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
    description:
      "At SOFTKARROT, I worked as a Junior Software Engineer, contributing to the development and maintenance of scalable web applications using React.js, Node.js, and MongoDB. I assisted in system architecture design with a focus on performance, scalability, and security. I was involved in debugging, testing, and optimizing applications while ensuring responsive UI and cross-browser compatibility. I also collaborated with senior engineers and designers to implement features and improve overall user experience.",
    responsibilities: [
      "Developed and maintained scalable web applications using modern technologies including React.js, Node.js, and MongoDB.",
      "Assisted in designing system architecture focused on performance, scalability, and security.",
      "Performed code testing, debugging, and ensured cross-browser compatibility and responsive UI.",
      "Optimized application performance, maintainability, and adherence to best coding practices.",
      "Collaborated with senior developers and designers to implement new features and enhance user experience.",
    ],
  },
];
