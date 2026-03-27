import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Md Masud Rana | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Md Masud Rana is a passionate React Developer building modern, scalable web applications using Next.js, TypeScript, and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Md Masud Rana, Full-Stack Developer, Portfolio, Frontend Developer, Next.js Developer"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
