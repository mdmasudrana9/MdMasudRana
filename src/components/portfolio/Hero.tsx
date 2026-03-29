import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  Send,
  MessageCircle,
  Code2,
  ExternalLink,
  Facebook,
} from "lucide-react";
import TechNetwork from "./TechNetwork";
import GitHubCalendar from "./GitHubCalendar";
import Experience from "./Experience";
import OnlineJudge from "./OnlineJudge";
import WhatsAppChat from "./WhatsAppChat";
import usePageTitle from "@/hooks/usePageTitle";
import ProjectsForHomePage from "./ProjectsForHomePage";
import BlogForHomePage from "./BlogForHomePage";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/mdmasudrana9" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/masudrana" },
  {
    icon: Linkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/md-masud-rana-5b1a17214/",
  },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/masudrana" },
  { icon: Send, label: "Telegram", href: "https://t.me/masudrana" },
  {
    icon: MessageCircle,
    label: "Whatsapp",
    href: "https://wa.me/8801703852464?text=Hello!",
  },
  { icon: Youtube, label: "Youtube", href: "https://youtube.com/@masudrana" },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/md.masud.rana.877664",
  },
  {
    icon: ExternalLink,
    label: "Daily.dev",
    href: "https://app.daily.dev/masudrana9",
  },
  { icon: Mail, label: "Email", href: "mailto:rana.cse6.bu@gmail.com" },
];

const Hero = () => {
  usePageTitle("Md Masud Rana - Full-Stack Developer");
  return (
    <div>
      <section className="relative flex md:h-[70vh]  items-center overflow-hidden md:pt-16 pt-28 bg-primary/5">
        {/* Background grid */}

        <div
          className=" absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="section-container relative  z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className=" tracking-tight  text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight font-mono"
              >
                Full-Stack
                <span className="gradient-text"> Developer</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className=" text-muted-foreground leading-relaxed text-[15px]"
              >
                Full-stack developer Working with{" "}
                <span className="text-primary font-semibold">
                  React (Next.js)
                </span>
                ,{" "}
                <span className="text-primary font-semibold">
                  Node.js (Express.js)
                </span>
                ⚡
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground leading-relaxed text-[15px] mb-6"
              >
                I love crafting fast, scalable digital products — Let’s
                collaborate! ✨
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
                    className="rounded-full flex  items-center gap-1 border border-border p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={14} />
                    <span className="text-xs">{label}</span>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Side - 3D Tech Stack Visual */}

            <TechNetwork />
          </div>
        </div>
      </section>
      <GitHubCalendar />
      <ProjectsForHomePage />
      <Experience />
      <OnlineJudge />
      <BlogForHomePage />
      <WhatsAppChat />
    </div>
  );
};

export default Hero;
