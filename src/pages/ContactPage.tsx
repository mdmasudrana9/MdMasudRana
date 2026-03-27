import Navbar from "@/components/portfolio/Navbar";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Contact - Md Masud Rana</title>
      <meta
        name="description"
        content="Get in touch with Md Masud Rana for freelance work, collaborations, or job opportunities."
      />
      <meta
        name="keywords"
        content="Contact Md Masud Rana, Hire React Developer, Freelance Developer"
      />
    </Helmet>
    <Navbar />
    <div className="pt-16">
      <Contact />
    </div>
    <Footer />
  </div>
);

export default ContactPage;
