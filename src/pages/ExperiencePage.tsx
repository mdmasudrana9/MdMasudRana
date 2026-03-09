import Navbar from "@/components/portfolio/Navbar";
import Experience from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";

const ExperiencePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <Experience />
    </div>
    <Footer />
  </div>
);

export default ExperiencePage;
