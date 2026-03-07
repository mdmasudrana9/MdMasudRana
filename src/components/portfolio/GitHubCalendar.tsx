import { motion } from "framer-motion";
import { useMemo } from "react";

const WEEKS = 52;
const DAYS = 7;
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getContributionLevel = (value: number) => {
  if (value === 0) return "bg-secondary";
  if (value <= 2) return "bg-emerald-200 dark:bg-emerald-900";
  if (value <= 5) return "bg-emerald-400 dark:bg-emerald-700";
  if (value <= 8) return "bg-emerald-500 dark:bg-emerald-500";
  return "bg-emerald-600 dark:bg-emerald-400";
};

const GitHubCalendar = () => {
  const contributions = useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < WEEKS; w++) {
      const week: number[] = [];
      for (let d = 0; d < DAYS; d++) {
        const rand = Math.random();
        if (rand < 0.3) week.push(0);
        else if (rand < 0.55) week.push(Math.floor(Math.random() * 3) + 1);
        else if (rand < 0.8) week.push(Math.floor(Math.random() * 5) + 3);
        else week.push(Math.floor(Math.random() * 6) + 6);
      }
      data.push(week);
    }
    return data;
  }, []);

  const totalContributions = contributions.flat().reduce((a, b) => a + b, 0);

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
          <p className="text-muted-foreground text-sm mb-8">
            {totalContributions} contributions in the last year
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-glass p-6 overflow-x-auto"
        >
          <div className="flex gap-1 min-w-[720px]">
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] mr-2 pt-5">
              {DAY_LABELS.map((label, i) => (
                <div key={i} className="h-[13px] text-[10px] text-muted-foreground leading-[13px]">
                  {label}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div>
              {/* Month labels */}
              <div className="flex mb-1">
                {MONTH_LABELS.map((month, i) => (
                  <div
                    key={month}
                    className="text-[10px] text-muted-foreground"
                    style={{ width: `${(WEEKS / 12) * 16}px` }}
                  >
                    {month}
                  </div>
                ))}
              </div>
              <div className="flex gap-[3px]">
                {contributions.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((val, di) => (
                      <motion.div
                        key={`${wi}-${di}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (wi * 7 + di) * 0.0005 }}
                        className={`h-[13px] w-[13px] rounded-sm ${getContributionLevel(val)}`}
                        title={`${val} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-muted-foreground">
            <span>Less</span>
            <div className="h-[13px] w-[13px] rounded-sm bg-secondary" />
            <div className="h-[13px] w-[13px] rounded-sm bg-emerald-200 dark:bg-emerald-900" />
            <div className="h-[13px] w-[13px] rounded-sm bg-emerald-400 dark:bg-emerald-700" />
            <div className="h-[13px] w-[13px] rounded-sm bg-emerald-500 dark:bg-emerald-500" />
            <div className="h-[13px] w-[13px] rounded-sm bg-emerald-600 dark:bg-emerald-400" />
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubCalendar;
