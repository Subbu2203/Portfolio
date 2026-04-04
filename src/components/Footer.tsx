const Footer = () => (
  <footer className="py-10 border-t border-border/30">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">SUBBULAKSHMI P</span>. All rights reserved.
      </span>
      <span className="text-xs text-muted-foreground/50">
        Built with React & Tailwind
      </span>
    </div>
  </footer>
);

export default Footer;
