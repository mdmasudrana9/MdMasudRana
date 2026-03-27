import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  User,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { blogPosts } from "@/data/blog";
import ReactMarkdown from "react-markdown";

const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.slug === id);
  const otherPosts = blogPosts.filter((p) => p.slug !== id).slice(0, 3);

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <article className="section-container max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to all articles
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight font-mono">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              {post.excerpt}
            </p>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-5 pb-6 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User size={14} className="text-primary" />
                <span>Md Masud Rana</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} className="text-primary" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} className="text-primary" />
                <span>{post.readTime} read</span>
              </div>
            </div>
          </motion.div>

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="blog-content"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-mono prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:text-muted-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>

          {/* Share / Author section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-14 p-6 rounded-2xl border border-border bg-card/50 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-foreground font-bold font-mono mb-1">
                Written by Md Masud Rana
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Developer sharing insights on web development, clean
                architecture, and modern JavaScript.
              </p>
            </div>
          </motion.div>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-14 pt-8 border-t border-border"
            >
              <h3 className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-mono">
                More Articles
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group rounded-xl border border-border/50 bg-card/50 p-5 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] rounded-full bg-primary/10 px-2 py-0.5 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono line-clamp-2 mb-2">
                      {p.title}
                    </h4>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      Read more <ChevronRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
