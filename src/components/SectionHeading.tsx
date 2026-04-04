import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="text-center mb-20"
  >
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
      <span className="text-gradient">{title}</span>
    </h2>
    <p className="text-muted-foreground max-w-md mx-auto text-lg font-light">{subtitle}</p>
    <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-primary opacity-60" />
  </motion.div>
);

export default SectionHeading;
