import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { MapPin, Calendar } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Experience = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section id="experience" className="py-20 bg-primary/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// Career"}</p>
          <h2 className=" text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground mb-4 leading-tight font-mono">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          {}
          <div
            className={`absolute left-[15px] top-2 bottom-2 w-px ${
              theme === "dark" ? "bg-white" : "bg-border"
            } hidden md:block`}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative md:pl-12"
            >
              {/* Timeline dot */}
              {/* <div className="absolute left-[11px] top-6 w-2 h-2 rounded-full bg-primary hidden md:block" /> */}
              <div className="absolute left-[4px] top-5 w-6 h-6 rounded-full border-2 border-border  items-center justify-center hidden md:flex">
                <div
                  className={`w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-white" : "bg-primary"
                  }`}
                />
              </div>
              <div className="card-glass p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
                      {exp.position}
                    </h3>
                    <a href={exp.url} className="flex mt-2 items-center gap-2">
                      <img className="w-10 h-10" src={exp.logo} />
                      <p className=" hover:text-muted-foreground font-mono font-semibold text-primary leading-relaxed text-[15px]">
                        {exp.company}
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mb-3">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">▸</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
