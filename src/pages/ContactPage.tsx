import Navbar from "@/components/portfolio/Navbar";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <Contact />
    </div>
    <Footer />
  </div>
);

export default ContactPage;
