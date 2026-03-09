import { motion } from "framer-motion";
import { MapPin, Code2, Briefcase } from "lucide-react";
import masudImg from "@/assets/masud-rana.png";

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Building the <span className="gradient-text">future</span> of the web
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-2xl" />
              <img
                src={masudImg}
                alt="Md Masud Rana"
                className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl border-2 border-border shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right - Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-muted-foreground font-mono mb-1">{"// Hello, I'm"}</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
                Md Masud Rana
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Developer crafting scalable web applications with modern JavaScript, clean architecture, and pixel-perfect interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
