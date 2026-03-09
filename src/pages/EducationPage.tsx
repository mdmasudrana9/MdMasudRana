import Navbar from "@/components/portfolio/Navbar";
import Education from "@/components/portfolio/Education";
import Footer from "@/components/portfolio/Footer";

const EducationPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <Education />
    </div>
    <Footer />
  </div>
);

export default EducationPage;
