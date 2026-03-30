import Navbar from "@/components/portfolio/Navbar";
import Courses from "@/components/portfolio/Courses";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";

const CoursesPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Courses - Md Masud Rana</title>
      <meta
        name="description"
        content="Browse courses by Md Masud Rana on React, Next.js, and full-stack development for beginners and professionals."
      />
      <meta
        name="keywords"
        content="React Course, Next.js Course, Programming Courses, Md Masud Rana Course"
      />
    </Helmet>
    <Navbar />
    <div className="pt-16">
      <Courses />
    </div>
    <Footer />
  </div>
);

export default CoursesPage;
