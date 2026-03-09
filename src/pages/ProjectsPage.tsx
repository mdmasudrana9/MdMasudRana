import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";
import Footer from "@/components/portfolio/Footer";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <Projects />
    </div>
    <Footer />
  </div>
);

export default ProjectsPage;
