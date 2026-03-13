import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, type Category } from "@/data/products";

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

const Produits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-12 lg:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Catalogue
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Nos produits
            </h1>
          </div>
        </section>

        <section className="py-10 lg:py-16">
          {categories.map((cat) => (
            <CategoryRow key={cat.slug} category={cat} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Produits;
