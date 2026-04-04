import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend Developer", desc: "React | UI | Responsive Design" },
  { icon: Rocket, label: "QA Tester", desc: "API Testing | Debugging" },
  { icon: Users, label: "Real-world Projects", desc: "Hands-on experience" },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    {/* Background glow */}
    <div className="glow-dot w-[500px] h-[500px] bg-primary -top-40 -right-40 animate-pulse-glow" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="About Me" subtitle="A brief introduction to who I am" />

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm a passionate frontend developer who loves crafting clean, efficient, and user-friendly
            digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {/* With expertise spanning front-end and back-end technologies, I bring
            ideas to life through code. When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge. */}
            Frontend Developer & QA Tester with the experience in building responsive web applications using the MERN stack, with a focus on clean UI, performance, and quality assurance through API testing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4"
        >
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="glass-card-hover p-5 flex items-center gap-5"
            >
              <div className="p-3 rounded-xl bg-gradient-primary shrink-0">
                <Icon className="text-primary-foreground" size={20} />
              </div>
              <div>
                <span className="font-semibold text-foreground">{label}</span>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
