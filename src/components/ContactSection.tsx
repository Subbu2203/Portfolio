import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "paulrajsubbu0@gmail.com" },
  { icon: MapPin, label: "Location", value: "Tirunelveli,Tamil Nadu" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="glow-dot w-[500px] h-[500px] bg-accent -bottom-40 left-1/3 animate-pulse-glow" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="Contact" subtitle="Let's build something great together" />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-primary shrink-0">
                  <Icon className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-foreground font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex gap-3 pt-2">
            {[Github, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div> */}
          <div className="flex gap-3 pt-2">
            <motion.a
              href="https://github.com/Subbu2203"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
            <Input placeholder="Your Name" className="bg-secondary/50 border-border/30 focus:border-primary/50 transition-colors" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
            <Input type="email" placeholder="your@email.com" className="bg-secondary/50 border-border/30 focus:border-primary/50 transition-colors" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Message</label>
            <Textarea placeholder="Tell me about your project..." rows={5} className="bg-secondary/50 border-border/30 focus:border-primary/50 transition-colors resize-none" />
          </div>
          <Button variant="glow" className="w-full gap-2 text-base">
            <Send size={16} />
            Send Message
          </Button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
