import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { categories, type Category } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CategoryRow = ({ category }: { category: Category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4 px-4 lg:px-8">
        <h2 className="font-display text-xl md:text-2xl font-medium text-foreground">
          {category.name}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-1.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label="Défiler à gauche"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label="Défiler à droite"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-8 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {category.products.map((product, idx) => (
          <Link
            to={`/produits/${category.slug}/${idx}`}
            key={`${product.name}-${idx}`}
            className="group flex-shrink-0 w-[200px] md:w-[220px] bg-card rounded-sm overflow-hidden border border-border hover-lift"
          >
            <div className="aspect-square overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="font-display text-sm font-medium text-card-foreground truncate">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="font-body text-sm font-semibold text-foreground">
                  {product.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Une question ?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Nous contacter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">contact@lechappeeverte.fr</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Téléphone</h3>
                <p className="text-muted-foreground text-sm">06 00 00 00 00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p className="text-muted-foreground text-sm">France</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Nom</label>
              <Input id="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
              <Input id="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required placeholder="votre@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea id="message" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required placeholder="Votre message..." rows={5} />
            </div>
            <Button type="submit" className="w-full gap-2">
              <Send className="h-4 w-4" /> Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />

        {/* Products section */}
        <section id="produits" className="py-20 lg:py-28 bg-background">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Catalogue
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Nos produits
            </h2>
          </div>
          {categories.map((cat) => (
            <CategoryRow key={cat.slug} category={cat} />
          ))}
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
