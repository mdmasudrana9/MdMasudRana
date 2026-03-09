import Navbar from "@/components/portfolio/Navbar";
import Courses from "@/components/portfolio/Courses";
import Footer from "@/components/portfolio/Footer";

const CoursesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <Courses />
    </div>
    <Footer />
  </div>
);

export default CoursesPage;
