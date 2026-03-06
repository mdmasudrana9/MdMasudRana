import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// Career"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden md:block" />

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
              <div className="absolute left-[11px] top-6 w-2 h-2 rounded-full bg-primary hidden md:block" />

              <div className="card-glass p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{exp.position}</h3>
                    <p className="text-sm font-medium text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {exp.duration}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
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
