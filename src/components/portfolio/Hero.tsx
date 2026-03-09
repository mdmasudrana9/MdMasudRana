import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Youtube, Send, MessageCircle, Code2, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/mdmasudrana9" },
  { icon: Twitter, label: "X", href: "https://x.com/masudrana" },
  { icon: Linkedin, label: "Linkedin", href: "https://linkedin.com/in/masudrana" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/masudrana" },
  { icon: Send, label: "Telegram", href: "https://t.me/masudrana" },
  { icon: MessageCircle, label: "Whatsapp", href: "https://wa.me/masudrana" },
  { icon: Youtube, label: "Youtube", href: "https://youtube.com/@masudrana" },
  { icon: ExternalLink, label: "Daily.dev", href: "https://app.daily.dev/masudrana" },
  { icon: Mail, label: "Email", href: "mailto:rana.cse6.bu@gmail.com" },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              Full-Stack Software Engineer -{" "}
              <span className="gradient-text">JavaScript Enthusiast</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-2 text-base text-muted-foreground"
            >
              Working with{" "}
              <span className="text-primary font-semibold">React (Next.js)</span>,{" "}
              <span className="text-primary font-semibold">Node.js (Express.js)</span>,{" "}
              <span className="text-primary font-semibold">React Native (Expo)</span> ⚡
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-muted-foreground mb-8"
            >
              I love building fast, scalable apps — Let's work together! ✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Tech Stack Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex-shrink-0 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[350px] h-[350px]">
              {/* Isometric grid glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-[60px]" />
              <div className="relative w-full h-full grid grid-cols-3 grid-rows-3 gap-3 p-4">
                {[
                  { label: "React", emoji: "⚛️" },
                  { label: "Node.js", emoji: "🟢" },
                  { label: "Next.js", emoji: "▲" },
                  { label: "TypeScript", emoji: "🔷" },
                  { label: "MongoDB", emoji: "🍃" },
                  { label: "Express", emoji: "⚡" },
                  { label: "Tailwind", emoji: "🎨" },
                  { label: "PostgreSQL", emoji: "🐘" },
                  { label: "Docker", emoji: "🐳" },
                ].map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-2xl mb-1">{tech.emoji}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
