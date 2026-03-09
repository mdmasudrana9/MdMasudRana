import Navbar from "@/components/portfolio/Navbar";
import About from "@/components/portfolio/About";
import Footer from "@/components/portfolio/Footer";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <About />
    </div>
    <Footer />
  </div>
);

export default AboutPage;
