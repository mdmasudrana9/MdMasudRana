import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Courses from "@/components/portfolio/Courses";
import Blog from "@/components/portfolio/Blog";
import OnlineJudge from "@/components/portfolio/OnlineJudge";
import GitHubCalendar from "@/components/portfolio/GitHubCalendar";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Courses />
      <Blog />
      <OnlineJudge />
      <GitHubCalendar />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
