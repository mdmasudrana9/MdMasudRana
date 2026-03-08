import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { GitHubCalendar as GitHubCalendarComponent } from "react-github-calendar";

const GitHubCalendar = () => {
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
          <GitHubCalendarComponent
            username="mdmasudrana9"
            colorScheme="dark"
            blockSize={13}
            blockMargin={4}
            fontSize={12}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubCalendar;
