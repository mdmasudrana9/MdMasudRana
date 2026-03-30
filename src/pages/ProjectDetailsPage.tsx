import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Code2,
  Layers,
  CheckCircle2,
  ExternalLink,
  Github,
  Calendar,
  User,
  AlertTriangle,
  BarChart3,
  Clock,
  Zap,
} from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ProjectDetailsPage = () => {
  const { name } = useParams<{ name: string }>();
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === name,
  );
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center section-container">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const statusColor =
    project.status === "Completed"
      ? "bg-primary/20 text-primary"
      : project.status === "In Progress"
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-blue-500/20 text-blue-400";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <article className="section-container">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to all projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.category}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}
              >
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight font-mono">
              {project.name}
            </h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} className="text-primary" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User size={14} className="text-primary" />
                <span>{project.role}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                >
                  <Github size={16} /> View Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Project Image with loading animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden mb-10 border border-border group"
          >
            <div
              className={`absolute inset-0 bg-muted animate-pulse ${imgLoaded ? "hidden" : ""}`}
            />
            <img
              src={project.image}
              alt={project.name}
              className={`w-full h-[500px]  object-cover transition-transform duration-500 group-hover:scale-[1.02] ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImgLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Highlights Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
          >
            {project.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                custom={i}
                variants={fadeUp}
                className="card-glass rounded-xl p-4 text-center group hover:border-primary/30 transition-colors"
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-primary font-mono mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.4 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {h.value}
                </motion.div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {h.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tabbed Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start bg-card border  border-[#268531]/30  rounded-xl p-3 mb-6 flex-wrap h-auto gap-1">
                <TabsTrigger
                  value="overview"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm"
                >
                  <Zap size={14} className="mr-1.5" /> Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm"
                >
                  <Layers size={14} className="mr-1.5" /> Features
                </TabsTrigger>
                <TabsTrigger
                  value="tech"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm"
                >
                  <Code2 size={14} className="mr-1.5" /> Tech Stack
                </TabsTrigger>
                <TabsTrigger
                  value="challenges"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm"
                >
                  <AlertTriangle size={14} className="mr-1.5" /> Challenges
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-glass p-6 sm:p-8 rounded-xl"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
                    <BarChart3 size={20} className="text-primary" /> Project
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {project.longDescription}
                  </p>
                </motion.div>
              </TabsContent>

              {/* Features Tab */}
              <TabsContent value="features">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-glass p-6 sm:p-8 rounded-xl"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 font-mono">
                    <Layers size={20} className="text-primary" /> Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((f, i) => (
                      <motion.div
                        key={f}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                        />
                        <span className="text-muted-foreground text-sm">
                          {f}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Tech Stack Tab */}
              <TabsContent value="tech">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-glass p-6 sm:p-8 rounded-xl"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 font-mono">
                    <Code2 size={20} className="text-primary" /> Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 text-sm font-mono text-primary cursor-default hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Challenges Tab */}
              <TabsContent value="challenges">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-glass p-6 sm:p-8 rounded-xl"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 font-mono">
                    <AlertTriangle size={20} className="text-primary" />{" "}
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-4">
                    {project.challenges.map((c, i) => (
                      <motion.div
                        key={c}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex items-start gap-3 p-4 rounded-lg border border-[#268531]/30 bg-card/50 hover:border-primary/30 transition-colors"
                      >
                        <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary font-mono">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {c}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Navigation to other projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <h3 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-mono">
              Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.name !== project.name)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.name}
                    to={`/projects/${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="card-glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all group"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors font-mono">
                        {p.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
