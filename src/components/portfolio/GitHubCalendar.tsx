import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { GitHubCalendar as GitHubCalendarComponent } from "react-github-calendar";

const GitHubCalendar = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

  return (
    <section id="github" className=" bg-primary/5 ">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">
            {"// Open Source"}
          </p>
          <h2 className=" text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground mb-4 leading-tight font-mono">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-4 flex items-center gap-2">
            <Github size={16} />
            <a
              href="https://github.com/mdmasudrana9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              @mdmasudrana9
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-glass p-6 overflow-x-auto"
        >
          <div className="flex gap-4 items-start">
            <div className="flex-1 min-w-0">
              <GitHubCalendarComponent
                username="mdmasudrana9"
                colorScheme="dark"
                blockSize={13}
                blockMargin={4}
                fontSize={12}
                year={selectedYear}
              />
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-mono transition-all ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubCalendar;
