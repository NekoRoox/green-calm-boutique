import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import catFleurs from "@/assets/cat-fleurs.jpg";
import catCosmetiques from "@/assets/cat-cosmetiques.jpg";
import catHuiles from "@/assets/cat-huiles.jpg";
import catGrinder from "@/assets/cat-grinder.jpg";
import catPlateaux from "@/assets/cat-plateaux.jpg";
import catSommeil from "@/assets/cat-sommeil.jpg";
import catConsommable from "@/assets/cat-consommable.jpg";
import catBijoux from "@/assets/cat-bijoux.jpg";

const categories = [
  { name: "Fleurs", slug: "fleurs", image: catFleurs, description: "Fleurs de CBD premium, cultivées en France" },
  { name: "Cosmétiques", slug: "cosmetiques", image: catCosmetiques, description: "Soins naturels au chanvre pour le visage et le corps" },
  { name: "Huiles", slug: "huiles", image: catHuiles, description: "Huiles CBD full spectrum et broad spectrum" },
  { name: "Grinders", slug: "grinders", image: catGrinder, description: "Grinders de qualité pour une mouture parfaite" },
  { name: "Plateaux", slug: "plateaux", image: catPlateaux, description: "Plateaux design pour vos rituels bien-être" },
  { name: "Pour dormir", slug: "sommeil", image: catSommeil, description: "Solutions naturelles pour un sommeil réparateur" },
  { name: "Consommables", slug: "consommables", image: catConsommable, description: "Accessoires et consommables CBD" },
  { name: "Bijoux", slug: "bijoux", image: catBijoux, description: "Bijoux artisanaux inspirés par la nature" },
];

const Produits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Catalogue
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Nos gammes de produits
            </h1>
            <p className="font-body text-base text-muted-foreground mt-4 max-w-lg mx-auto">
              Explorez notre sélection de produits CBD et bien-être, soigneusement choisis pour vous.
            </p>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/produits/${cat.slug}`}
                  className="group relative rounded-sm overflow-hidden border border-border bg-card hover-lift"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="font-display text-xl font-medium text-primary-foreground">
                      {cat.name}
                    </h2>
                    <p className="font-body text-sm text-primary-foreground/75 mt-1">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Produits;
