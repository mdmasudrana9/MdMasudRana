import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Projects - Md Masud Rana</title>
      <meta
        name="description"
        content="Explore projects built by Md Masud Rana including React, Next.js, and full-stack applications with modern technologies."
      />
      <meta
        name="keywords"
        content="React Projects, Portfolio Projects, Next.js Apps, Md Masud Rana Projects"
      />
    </Helmet>
    <Navbar />
    <div className="pt-16">
      <Projects />
    </div>
    <Footer />
  </div>
);

export default ProjectsPage;
