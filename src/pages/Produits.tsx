import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

import catFleurs from "@/assets/cat-fleurs.jpg";
import catCosmetiques from "@/assets/cat-cosmetiques.jpg";
import catHuiles from "@/assets/cat-huiles.jpg";
import catGrinder from "@/assets/cat-grinder.jpg";
import catPlateaux from "@/assets/cat-plateaux.jpg";
import catSommeil from "@/assets/cat-sommeil.jpg";
import catConsommable from "@/assets/cat-consommable.jpg";
import catBijoux from "@/assets/cat-bijoux.jpg";

import productFlower from "@/assets/product-flower.jpg";
import productCream from "@/assets/product-cream.jpg";
import productOil from "@/assets/product-oil.jpg";
import productInfusion from "@/assets/product-infusion.jpg";
import productAmnesia from "@/assets/product-amnesia.jpg";
import productWhiteWidow from "@/assets/product-whitewidow.jpg";

interface Product {
  name: string;
  price: string;
  image: string;
}

interface Category {
  name: string;
  slug: string;
  products: Product[];
}

const categories: Category[] = [
  {
    name: "Fleurs",
    slug: "fleurs",
    products: [
      { name: "Amnesia CBD", price: "12,90 €", image: catFleurs },
      { name: "Lemon Haze", price: "11,90 €", image: productFlower },
      { name: "OG Kush CBD", price: "13,50 €", image: catFleurs },
      { name: "Strawberry", price: "14,90 €", image: productFlower },
      { name: "Purple Haze", price: "15,90 €", image: catFleurs },
      { name: "White Widow", price: "12,50 €", image: productFlower },
    ],
  },
  {
    name: "Cosmétiques",
    slug: "cosmetiques",
    products: [
      { name: "Crème visage chanvre", price: "34,90 €", image: catCosmetiques },
      { name: "Baume à lèvres CBD", price: "9,90 €", image: productCream },
      { name: "Sérum anti-âge", price: "42,90 €", image: catCosmetiques },
      { name: "Lait corporel", price: "28,90 €", image: productCream },
      { name: "Masque visage", price: "19,90 €", image: catCosmetiques },
    ],
  },
  {
    name: "Huiles",
    slug: "huiles",
    products: [
      { name: "Huile CBD 10%", price: "29,90 €", image: catHuiles },
      { name: "Huile CBD 20%", price: "49,90 €", image: productOil },
      { name: "Huile massage CBD", price: "24,90 €", image: catHuiles },
      { name: "Huile CBD 30%", price: "69,90 €", image: productOil },
      { name: "Huile CBN sommeil", price: "39,90 €", image: catHuiles },
    ],
  },
  {
    name: "Grinders",
    slug: "grinders",
    products: [
      { name: "Grinder alu 4 parts", price: "14,90 €", image: catGrinder },
      { name: "Grinder bois", price: "12,90 €", image: catGrinder },
      { name: "Grinder premium", price: "24,90 €", image: catGrinder },
      { name: "Grinder mini", price: "8,90 €", image: catGrinder },
    ],
  },
  {
    name: "Plateaux",
    slug: "plateaux",
    products: [
      { name: "Plateau bambou L", price: "19,90 €", image: catPlateaux },
      { name: "Plateau métal design", price: "14,90 €", image: catPlateaux },
      { name: "Plateau bois gravé", price: "24,90 €", image: catPlateaux },
      { name: "Plateau rolling S", price: "9,90 €", image: catPlateaux },
    ],
  },
  {
    name: "Pour dormir",
    slug: "sommeil",
    products: [
      { name: "Infusion Détente", price: "9,90 €", image: catSommeil },
      { name: "Gummies sommeil", price: "19,90 €", image: productInfusion },
      { name: "Spray oreiller CBD", price: "16,90 €", image: catSommeil },
      { name: "Tisane nuit paisible", price: "11,90 €", image: productInfusion },
      { name: "Capsules mélatonine", price: "22,90 €", image: catSommeil },
    ],
  },
  {
    name: "Consommables",
    slug: "consommables",
    products: [
      { name: "Feuilles slim", price: "2,50 €", image: catConsommable },
      { name: "Filtres carton", price: "1,90 €", image: catConsommable },
      { name: "Cônes pré-roulés", price: "4,90 €", image: catConsommable },
      { name: "Briquet clipper", price: "3,50 €", image: catConsommable },
    ],
  },
  {
    name: "Bijoux",
    slug: "bijoux",
    products: [
      { name: "Bracelet chanvre", price: "18,90 €", image: catBijoux },
      { name: "Collier feuille", price: "24,90 €", image: catBijoux },
      { name: "Boucles d'oreilles", price: "14,90 €", image: catBijoux },
      { name: "Bague nature", price: "19,90 €", image: catBijoux },
    ],
  },
];

const CategoryRow = ({ category }: { category: Category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} ajouté au panier`, {
      description: "Continuez vos achats ou finalisez votre commande.",
      duration: 3000,
    });
  };

  return (
    <div className="mb-10">
      {/* Category title */}
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

      {/* Horizontal scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-8 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {category.products.map((product, idx) => (
          <div
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
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="px-3 py-1.5 bg-primary text-primary-foreground font-body text-xs font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
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
        {/* Header */}
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

        {/* Netflix-style rows */}
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
