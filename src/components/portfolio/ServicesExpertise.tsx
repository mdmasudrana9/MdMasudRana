import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "react-router-dom";
import usePageTitle from "@/hooks/usePageTitle";

const ServicesExpertise = () => {
  const { theme, toggleTheme } = useTheme();

  usePageTitle("Md Masud Rana - Services & Expertise");

  return (
    <section id="projects" className=" bg-primary/5 md:pb-24 pb-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono pt-5 md:pt-0 text-sm text-primary mb-2">
            {"// What I Offer"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground mb-4 leading-tight font-mono">
            Services <span className="gradient-text"> & Expertise</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.title}
                to={`/projects/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="card-glass p-6 hover-lift flex flex-col"
              >
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground font-mono">
                      {service.title}
                    </h3>
                  </div>
                  <div className="rounded-xl w-[60px] bg-background/80 border border-border/30 mb-3 p-3 text-center">
                    <p className="text-2xl  font-bold text-foreground font-mono">
                      {service.icon}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {service.description}
                  </p>

                  <ul className="mb-4 space-y-1">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesExpertise;
