import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { useIsMobile } from "@/hooks/use-mobile";

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

// Split skills into 3 orbit rings
const allSkills = skillCategories.flatMap((cat) => cat.skills);
const ring1 = allSkills.slice(0, 8);
const ring2 = allSkills.slice(8, 20);
const ring3 = allSkills.slice(20);

const Skills = () => {
  const isMobile = useIsMobile();

  const rings = [
    { skills: ring1, radius: isMobile ? 100 : 155, dotSize: "w-2 h-2" },
    { skills: ring2, radius: isMobile ? 170 : 265, dotSize: "w-1.5 h-1.5" },
    { skills: ring3, radius: isMobile ? 240 : 370, dotSize: "w-1 h-1" },
  ];

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
        <div className="relative flex items-center justify-center min-h-[520px] sm:min-h-[780px]">
          {/* Center icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative z-10 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-primary/40 bg-background glow-effect"
          >
            <span className="text-2xl sm:text-3xl font-bold gradient-text">⚛</span>
          </motion.div>

          {/* Orbit rings */}
          {rings.map((ring, ri) => (
            <motion.div
              key={ri}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ri * 0.15, duration: 0.5 }}
              className="absolute rounded-full border border-primary/10"
              style={{
                width: ring.radius * 2,
                height: ring.radius * 2,
              }}
            />
          ))}

          {/* Skill nodes on each ring */}
          {rings.map((ring, ri) =>
            ring.skills.map((skill, i) => {
              const total = ring.skills.length;
              const angle = (i / total) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * ring.radius;
              const y = Math.sin(rad) * ring.radius;
              const globalIndex = (ri === 0 ? 0 : ri === 1 ? ring1.length : ring1.length + ring2.length) + i;
              const colorClass = pastelColors[globalIndex % pastelColors.length];

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: ri * 0.12 + i * 0.035,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.15, zIndex: 20 }}
                  className="absolute z-[5] cursor-default"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Connector line to center */}
                  <div
                    className="absolute bg-primary/10"
                    style={{
                      width: "1px",
                      height: `${ring.radius - 30}px`,
                      left: "50%",
                      bottom: "50%",
                      transformOrigin: "bottom center",
                      transform: `translateX(-50%) rotate(${angle + 90}deg)`,
                      display: ri === 0 ? "block" : "none",
                    }}
                  />
                  <span
                    className={`inline-block whitespace-nowrap rounded-full shadow-sm font-semibold transition-shadow duration-200 hover:shadow-md ${colorClass} ${
                      isMobile
                        ? "px-2 py-1 text-[10px]"
                        : "px-3 py-1.5 text-xs"
                    }`}
                  >
                    {skill}
                  </span>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Category cards below */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-4 sm:p-6 hover-lift"
            >
              <h3 className="font-mono text-xs sm:text-sm font-semibold text-primary mb-3 sm:mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className={`rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium ${pastelColors[(i * 4 + si) % pastelColors.length]}`}
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
