import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import { BookOpen, Award, Calendar } from "lucide-react";

const Courses = () => {
  return (
    <section id="courses" className="md:py-24 h-auto  mt-4 bg-primary/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono pt-5 md:pt-0 text-sm text-primary mb-2">
            {"// Learning"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
            Courses & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-6 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Award size={12} /> {course.platform}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {course.completedDate}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    by {course.instructor}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md bg-secondary px-2 py-1 text-[10px] font-medium text-secondary-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
