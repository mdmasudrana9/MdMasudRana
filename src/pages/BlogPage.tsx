import Navbar from "@/components/portfolio/Navbar";
import Blog from "@/components/portfolio/Blog";
import Footer from "@/components/portfolio/Footer";

const BlogPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <Blog />
    </div>
    <Footer />
  </div>
);

export default BlogPage;
