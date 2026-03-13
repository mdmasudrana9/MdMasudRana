import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. in Computer Science & Engineering",
    institution: "University of Barishal",
    duration: "2022 – 2024",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Barishal",
    duration: "2019 – 2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="pt-28 mb-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">
            {"// Education"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-glass p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-primary/80 pt-1">
                    <Calendar size={12} />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
