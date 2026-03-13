import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { categories } from "@/data/products";

const ProduitDetail = () => {
  const { categorySlug, productIndex } = useParams();
  const idx = Number(productIndex);

  const category = categories.find((c) => c.slug === categorySlug);
  const product = category?.products[idx];

  const [selectedPrice, setSelectedPrice] = useState(0);

  if (!product || !category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16 flex flex-col items-center justify-center min-h-[60vh]">
          <p className="font-display text-2xl text-foreground mb-4">Produit introuvable</p>
          <Link to="/produits" className="text-primary hover:underline font-body text-sm">
            ← Retour aux produits
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    const label = product.prices
      ? `${product.name} (${product.prices[selectedPrice].label})`
      : product.name;
    toast.success(`${label} ajouté au panier`, {
      description: "Continuez vos achats ou finalisez votre commande.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/produits"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux produits
          </Link>
        </div>

        {/* Product detail */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            {/* Image */}
            <div className="aspect-square overflow-hidden rounded-sm bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {category.name}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                {product.name}
              </h1>

              {product.prices ? (
                <div className="mb-6">
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Choisissez votre quantité :
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.prices.map((p, i) => (
                      <button
                        key={p.label}
                        onClick={() => setSelectedPrice(i)}
                        className={`px-5 py-3 rounded-sm border font-body text-sm font-medium transition-all duration-200 ${
                          selectedPrice === i
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-foreground hover:border-primary/50"
                        }`}
                      >
                        <span className="block text-base font-semibold">{p.label}</span>
                        <span className="block text-xs mt-0.5 opacity-80">{p.price}</span>
                      </button>
                    ))}
                  </div>
                  <p className="font-display text-2xl font-semibold text-foreground mt-4">
                    {product.prices[selectedPrice].price}
                  </p>
                </div>
              ) : (
                <p className="font-display text-2xl font-semibold text-foreground mb-6">
                  {product.price}
                </p>
              )}

              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProduitDetail;
