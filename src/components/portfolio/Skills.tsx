import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const pastelColors = [
  "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
];

const allSkills = skillCategories.flatMap((cat) => cat.skills);

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// Tech Stack"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Radial layout */}
        <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px]">
          {/* Center icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-full border-2 border-primary/30 bg-background glow-effect"
          >
            <span className="text-3xl sm:text-4xl font-bold gradient-text">⚛</span>
          </motion.div>

          {/* Orbit ring */}
          <div className="absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full border border-primary/20" />

          {/* Skill nodes */}
          {allSkills.map((skill, i) => {
            const total = allSkills.length;
            const angle = (i / total) * 360 - 90;
            const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 160 : 210;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const colorClass = pastelColors[i % pastelColors.length];

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 16px)`,
                }}
              >
                {/* Connector dot */}
                <div
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
                  style={{
                    left: x > 0 ? "-8px" : "calc(100% + 4px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <span
                  className={`inline-block whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${colorClass}`}
                >
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Category cards below */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-6 hover-lift"
            >
              <h3 className="font-mono text-sm font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${pastelColors[(i * 4 + si) % pastelColors.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
