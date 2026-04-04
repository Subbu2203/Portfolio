import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Cineflix (Netflix Clone)",
    description: "A movie streaming UI built using React and TMDB API with dynamic data fetching and responsive design.",
    image: project1,
    tech: ["React", "Vite", "TMDB API", "Tailwind"],
    live: "https://cine-flix-xi-blond.vercel.app",
    github: "https://github.com/Subbu2203/CineFlix",
  },
  {
    title: "E-Commerce Website",
    description: "A responsive e-commerce platform enabling seamless product browsing, cart management, and secure checkout.",
    image: project2,
    tech: ["HTML", "CSS", "Javascript", "Tailwind"],
    live: "https://nostra-ecommerce-gamma.vercel.app/",
    github: "https://github.com/Subbu2203/NostraEcommerce.git",
  },
  {
    title: "Social Platform",
    description: "A community-driven platform with real-time messaging, content feeds, and user profiles.",
    image: project3,
    tech: ["React", "GraphQL", "MongoDB", "Socket.io"],
    live: "#",
    github: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative overflow-hidden">
    <div className="glow-dot w-[500px] h-[500px] bg-primary top-1/3 -right-40 animate-pulse-glow" />

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="Projects" subtitle="Selected work I'm proud of" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-hover overflow-hidden group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1280}
                height={720}
                className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-60" />

              {/* Hover overlay with links */}
              <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gradient-primary text-primary-foreground shadow-glow"
                >
                  <ExternalLink size={18} />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-border/50 text-foreground hover:border-primary/50 bg-card/80 backdrop-blur transition-colors"
                >
                  <Github size={18} />
                </motion.a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary/80 font-mono border border-primary/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
