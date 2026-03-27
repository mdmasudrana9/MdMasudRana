import Navbar from "@/components/portfolio/Navbar";
import About from "@/components/portfolio/About";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";
const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>About - Md Masud Rana</title>
      <meta
        name="description"
        content="Learn more about Md Masud Rana, a React Developer passionate about building modern web applications."
      />
      <meta
        name="keywords"
        content="Md Masud Rana, React Developer, Portfolio, About"
      />
    </Helmet>
    <Navbar />
    <div className="pt-16">
      <About />
    </div>
    <Footer />
  </div>
);

export default AboutPage;
