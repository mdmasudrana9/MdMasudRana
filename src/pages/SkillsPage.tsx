import Navbar from "@/components/portfolio/Navbar";
import Skills from "@/components/portfolio/Skills";
import Footer from "@/components/portfolio/Footer";

const SkillsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <Skills />
    </div>
    <Footer />
  </div>
);

export default SkillsPage;
