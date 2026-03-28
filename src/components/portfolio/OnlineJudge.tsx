import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code } from "lucide-react";
import { judgeProfiles } from "@/data/judges";

const OnlineJudge = () => {
  return (
    <section id="judges" className="pt-5 pb-16 ">
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
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
            Online <span className="gradient-text">Judge Profiles</span>
          </h2>
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
              className="card-glass p-6 hover-lift group text-center"
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${profile.color}20` }}
              >
                <Code size={24} style={{ color: profile.color }} />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center justify-center gap-1">
                {profile.platform}
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                />
              </h3>

              <p className="text-xs text-muted-foreground mb-3">
                @{profile.username}
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-foreground">
                    {profile.solved}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Solved
                  </p>
                </div>
                {profile.rating && (
                  <div className="text-center">
                    <p
                      className="text-xl font-bold flex items-center gap-1"
                      style={{ color: profile.color }}
                    >
                      <Trophy size={14} />
                      {profile.rating}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Rating
                    </p>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineJudge;
