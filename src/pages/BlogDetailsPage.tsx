import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { blogPosts } from "@/data/blog";

const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.slug === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center section-container">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="pt-28 pb-20 bg-primary/5 h-[80vh]">
        <article className="section-container  mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to all articles
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="card-glass p-8 rounded-xl text-center text-muted-foreground">
                <p className="font-mono text-sm">
                  {"// Full article content coming soon..."}
                </p>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
