import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, FolderGit2, Mail } from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

const SideNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-4 top-[30%] -translate-y-1/2 z-50 hidden md:flex flex-col gap-2"
    >
      <div className="glass-card p-2 flex flex-col gap-1">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-gradient-primary opacity-20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon
                size={18}
                className={`relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-card border border-border/50 text-foreground opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-card">
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default SideNav;
