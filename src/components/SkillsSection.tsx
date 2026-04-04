import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Frontend",
    gradient: "from-primary to-accent",
    skills: ["React", "Next.js","Javascript", "HTML", "Tailwind CSS"],
  },
  {
    title: "Backend",
    gradient: "from-accent to-cyan",
    skills: ["Node.js", "Express", "Python", "MongoDB"],
  },
  {
    title: "Tools & Others",
    gradient: "from-primary to-pink",
    skills: ["Git", "Github", "Postman", "CI/CD", "GCP","REST API"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding relative overflow-hidden">
    {/* Background glow */}
    <div className="glow-dot w-[400px] h-[400px] bg-accent -bottom-32 left-1/4 animate-pulse-glow" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-hover p-7 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${group.gradient}`} />
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + si * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3.5 py-2 text-sm rounded-lg bg-secondary/80 text-secondary-foreground font-mono border border-border/30 hover:border-primary/40 hover:bg-primary/10 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
