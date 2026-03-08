import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Github } from "lucide-react";
// @ts-ignore
import GitHubCalendarLib from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubCalendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.innerHTML = "";
      GitHubCalendarLib(calendarRef.current, "mdmasudrana9", {
        responsive: true,
        tooltips: true,
      });
    }
  }, []);

  return (
    <section id="github" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// Open Source"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8 flex items-center gap-2">
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
          <div ref={calendarRef} className="github-calendar-container" />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubCalendar;
