import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { judgeProfiles } from "@/data/judges";

const OnlineJudge = () => {
  return (
    <section id="judges" className="py-10 bg-primary/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-primary mb-2">
            {"// Competitive Programming"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground mb-6 leading-tight font-mono">
            Competitive
            <span className="gradient-text"> Programming</span>
          </h2>
          {/* <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
            Simple snapshot of the platforms I use for problem solving and
            contest practice.
          </p> */}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {judgeProfiles.map((profile, i) => (
            <motion.a
              key={profile.platform}
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Top section - Icon + Username + Platform */}
              <div className="p-5 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                    style={{
                      backgroundColor: `${profile.color}15`,
                      border: `1px solid ${profile.color}30`,
                    }}
                  >
                    {profile.icon}
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                  />
                </div>

                <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-widest mb-0.5">
                  @{profile.username}
                </p>
                <h3
                  className="text-xl font-bold text-foreground mb-2 flex items-center gap-2 font-mono"
                  style={{ color: profile.color }}
                >
                  {profile.platform}
                </h3>
              </div>

              {/* Bottom section - Stats boxes */}
              <div className="px-4 pb-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-background/80 border border-border/30 p-3 text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mb-1">
                      Solved
                    </p>
                    <p className="text-xl font-bold text-foreground font-mono">
                      {profile.solved}
                    </p>
                  </div>

                  <div className="rounded-xl bg-background/80 border border-border/30 p-3 text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mb-1">
                      {profile.contestRating
                        ? "Contest"
                        : profile.rating
                          ? "Rating"
                          : "Medium"}
                    </p>
                    <p
                      className="text-xl font-bold font-mono"
                      style={{ color: profile.color }}
                    >
                      {profile.contestRating ||
                        profile.rating ||
                        profile.medium ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-background/80 border border-border/30 p-3 text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mb-1">
                      Hard
                    </p>
                    <p className="text-xl font-bold text-red-400 font-mono">
                      {profile.hard || "—"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${profile.color}08 0%, transparent 70%)`,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineJudge;
