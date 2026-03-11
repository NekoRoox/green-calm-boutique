import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-secondary py-12 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#" className="flex items-center">
        <img src={logo} alt="L'échappée verte" className="h-8" />
      </a>
      <p className="font-body text-sm text-muted-foreground">
        © 2026 L'échappée verte — Tous droits réservés
      </p>
    </div>
  </footer>
);

export default Footer;
