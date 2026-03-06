import { motion } from "framer-motion";
import { MapPin, Code2, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// About Me"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Building the <span className="gradient-text">future</span> of the web
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a full-stack developer specializing in modern JavaScript technologies including React, Next.js, Node.js, and MongoDB.
            </p>
            <p>
              I build scalable web applications with clean architecture, strong backend logic, and modern user interfaces. I have experience working remotely with international teams and building production-ready web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              { icon: MapPin, label: "Based in", value: "Bangladesh" },
              { icon: Code2, label: "Specialization", value: "Full-Stack Development" },
              { icon: Briefcase, label: "Experience", value: "2+ Years Professional" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="card-glass flex items-center gap-4 p-4"
              >
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
