import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "react-router-dom";
import usePageTitle from "@/hooks/usePageTitle";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const { theme, toggleTheme } = useTheme();
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  usePageTitle("Md Masud Rana - Projects");

  return (
    <section id="services" className="md:py-24 mt-4 bg-primary/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono pt-5 md:pt-0 text-sm text-primary mb-2">
            {"// Portfolio"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground mb-4 leading-tight font-mono">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary card-glass text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <Link
                key={project.name}
                to={`/projects/${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="card-glass p-6 hover-lift flex flex-col"
              >
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground font-mono">
                      {project.name}
                    </h3>
                    <Link to={project.liveUrl}>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground mt-1 shrink-0"
                      />
                    </Link>
                  </div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                    loading="lazy"
                  />
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <ul className="mb-4 space-y-1">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">▸</span> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
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
              More projects coming soon...
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

export default Projects;
