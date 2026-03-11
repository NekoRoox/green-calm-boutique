import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary py-12 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
        <Leaf className="h-4 w-4 text-primary" />
        L'échappée verte
      </a>
      <p className="font-body text-sm text-muted-foreground">
        © 2026 L'échappée verte — Tous droits réservés
      </p>
    </div>
  </footer>
);

export default Footer;
