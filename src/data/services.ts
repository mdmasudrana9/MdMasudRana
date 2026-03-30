export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    icon: "🌐",
    description:
      "Custom web applications built with modern technologies and best practices.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Friendly",
      "Cross-browser Compatibility",
    ],
  },
  {
    title: "API & Backend",
    icon: "🔧",
    description:
      "Robust backend services and RESTful APIs for your applications.",
    features: [
      "RESTful APIs",
      "Database Design",
      "Authentication",
      "Cloud Deployment",
    ],
  },
  {
    title: "Custom Software",
    icon: "💻",
    description:
      "Tailored software solutions designed to meet your unique business requirements.",
    features: [
      "Desktop Applications",
      "Mobile Apps",
      "Enterprise Solutions",
      "System Integration",
    ],
  },
];
