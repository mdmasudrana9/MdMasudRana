import Navbar from "@/components/portfolio/Navbar";
import Blog from "@/components/portfolio/Blog";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";

const BlogPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Blog - Md Masud Rana</title>
      <meta
        name="description"
        content="Read blogs and tutorials by Md Masud Rana on React, Next.js, JavaScript, and modern web development."
      />
      <meta
        name="keywords"
        content="React Blog, JavaScript Tutorials, Web Development Blog, Md Masud Rana Blog"
      />
    </Helmet>
    <Navbar />
    <div className="pt-16">
      <Blog />
    </div>
    <Footer />
  </div>
);

export default BlogPage;
