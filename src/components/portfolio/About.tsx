import { motion } from "framer-motion";
import { MapPin, Code2, Briefcase, Layers, Download } from "lucide-react";
import Education from "./Education";
import Skills from "./Skills";
// import masudImg from "@/assets/masud-rana.png";

const About = () => {
  return (
    <div className="bg-primary/5 mb-5">
      <section id="about" className="md:py-24 mt-4">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono pt-5 md:pt-0 text-sm text-primary mb-2">
              {"// About Me"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
              Building the <span className="gradient-text">future</span> of the
              web
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 md:items-start items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex md:justify-start justify-center"
            >
              <div className="relative w-full h-full ">
                <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-2xl" />
                <img
                  src="/assets/masud-rana.png"
                  alt="Md Masud Rana"
                  className="    w-full h-full object-cover rounded-2xl border-2 border-border shadow-lg"
                />
                <div className="flex gap-2 mt-4  justify-center items-center">
                  <button className="card-glass hover:text-primary hover:border-primary/50 transition-colors  w-full text-xs p-4">
                    Views Resume
                  </button>
                  <div className="card-glass cursor-pointer hover:text-primary hover:border-primary/50 transition-colors  text-xs p-4">
                    <Download size={16} />
                  </div>
                </div>
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
                <p className="font-mono text-sm text-primary mb-2">
                  {"// Hello, I'm"}
                </p>
                <h3 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">
                  Md Masud Rana
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-Stack Developer focused on building fast and scalable web
                  applications using React, Next.js, TypeScript, and Tailwind
                  CSS. Experienced with Node.js, Express.js, and Prisma for
                  backend development. I love learning new technologies and
                  creating meaningful solutions. Let’s connect:
                  rana.cse6.bu@gmail.com
                </p>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                {[
                  { icon: MapPin, label: "Based in", value: "Bangladesh" },
                  {
                    icon: Code2,
                    label: "Specialization",
                    value: "Full-Stack Development",
                  },
                  {
                    icon: Layers,
                    label: "Tech Stack",
                    value: "MERN Stack",
                  },
                  {
                    icon: Briefcase,
                    label: "Experience",
                    value: "2+ Years Professional",
                  },
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
                      <p className="text-sm font-medium text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <Education />
        <Skills />
      </section>
    </div>
  );
};

export default About;
