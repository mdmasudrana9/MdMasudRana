import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import usePageTitle from "@/hooks/usePageTitle";

const Blog = () => {
  const { theme, toggleTheme } = useTheme();
  usePageTitle("Md Masud Rana - Blog");
  return (
    <section id="blog" className="md:py-24 mt-4 bg-primary/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono pt-5 md:pt-0 text-sm text-primary mb-2">
            {"// Blog"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Latest <span className="gradient-text">Articles</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glass p-6 hover-lift group cursor-pointer"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {post.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center my-12"
        >
          <div
            className={`inline-flex items-center gap-3 px-8 py-3 rounded-full border ${
              theme === "dark"
                ? "border-white/20 bg-white/5"
                : "border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse-glow ${
                theme === "dark" ? "bg-white" : "bg-primary"
              }`}
            />

            <span
              className={`text-sm font-medium animate-pulse-glow ${
                theme === "dark" ? "text-white/80" : "text-primary/80"
              }`}
            >
              More articles coming soon...
            </span>

            <span
              className={`w-2 h-2 rounded-full animate-pulse-glow ${
                theme === "dark" ? "bg-white" : "bg-primary"
              }`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
