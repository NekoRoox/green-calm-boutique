import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "Accueil", href: "#top" },
  { label: "Produits", href: "#produits" },
  { label: "Nous contacter", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="L'échappée verte" className="h-10" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="relative text-foreground hover:text-primary transition-colors"
            aria-label="Panier"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6 font-body text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
