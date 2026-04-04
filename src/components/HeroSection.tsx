import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-v2.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* Floating glow orbs */}
      <div className="glow-dot w-96 h-96 bg-primary top-1/4 left-1/4 animate-pulse-glow" />
      <div className="glow-dot w-72 h-72 bg-accent bottom-1/3 right-1/4 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="text-foreground">SUBBU</span>
            <span className="text-gradient">LAKSHMI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-3 font-light"
          >
            Frontend Developer & QA Tester
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-muted-foreground/70 max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Passionate about developing modern web applications with clean UI and efficient backend integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="glow" size="lg" className="text-base px-8" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            {/* <Button variant="glow-outline" size="lg" className="text-base px-8 gap-2">
              <Download size={16} />
              Resume
            </Button> */}
            <Button variant="glow-outline" size="lg" className="text-base px-8 gap-2" asChild>
              <a href="/subbulakshmi_resume (2).pdf" download>
                <Download size={16} />
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={22} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
