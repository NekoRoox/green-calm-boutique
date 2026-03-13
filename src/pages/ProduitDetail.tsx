import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { categories } from "@/data/products";
import { Slider } from "@/components/ui/slider";

/** Calculate degressive price for flowers:
 *  1-4g → 10 €/g
 *  5-9g → 7 €/g (equivalent to 35€ for 5g)
 *  10+g → 5.5 €/g (equivalent to 55€ for 10g)
 */
const calculateFlowerPrice = (grams: number): number => {
  if (grams <= 0) return 0;
  if (grams < 5) return grams * 10;
  if (grams < 10) return 35 + (grams - 5) * 4;
  return 55 + (grams - 10) * 4;
};

const formatPrice = (price: number): string => {
  return price.toFixed(2).replace(".", ",") + " €";
};

const ProduitDetail = () => {
  const { categorySlug, productIndex } = useParams();
  const idx = Number(productIndex);

  const category = categories.find((c) => c.slug === categorySlug);
  const product = category?.products[idx];

  const [grams, setGrams] = useState(1);

  const isFlower = category?.slug === "fleurs" && !!product?.prices;

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

  const totalPrice = isFlower ? calculateFlowerPrice(grams) : 0;
  const pricePerGram = grams > 0 ? totalPrice / grams : 0;

  const handleAddToCart = () => {
    const label = isFlower
      ? `${product.name} (${grams}g)`
      : product.name;
    const priceLabel = isFlower ? formatPrice(totalPrice) : product.price;
    toast.success(`${label} ajouté au panier — ${priceLabel}`, {
      description: "Continuez vos achats ou finalisez votre commande.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/produits"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux produits
          </Link>
        </div>

        <section className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            <div className="aspect-square overflow-hidden rounded-sm bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {category.name}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                {product.name}
              </h1>

              {isFlower ? (
                <div className="mb-6">
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Choisissez votre quantité :
                  </p>

                  {/* Gram selector with +/- buttons */}
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => setGrams(Math.max(1, grams - 1))}
                      className="p-2 rounded-sm border border-border bg-card text-foreground hover:border-primary transition-colors"
                      aria-label="Diminuer"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-display text-3xl font-semibold text-foreground min-w-[80px] text-center">
                      {grams}g
                    </span>
                    <button
                      onClick={() => setGrams(Math.min(50, grams + 1))}
                      className="p-2 rounded-sm border border-border bg-card text-foreground hover:border-primary transition-colors"
                      aria-label="Augmenter"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Slider */}
                  <div className="mb-6">
                    <Slider
                      value={[grams]}
                      onValueChange={(v) => setGrams(v[0])}
                      min={1}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 font-body text-xs text-muted-foreground">
                      <span>1g</span>
                      <span>25g</span>
                      <span>50g</span>
                    </div>
                  </div>

                  {/* Price display */}
                  <div className="bg-secondary/50 rounded-sm p-4 border border-border">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-body text-sm text-muted-foreground">Prix total</span>
                      <span className="font-display text-2xl font-semibold text-foreground">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-body text-xs text-muted-foreground">Prix au gramme</span>
                      <span className="font-body text-sm text-muted-foreground">
                        {formatPrice(pricePerGram)}/g
                      </span>
                    </div>
                    {grams >= 5 && (
                      <p className="font-body text-xs text-primary mt-2">
                        🎉 Prix dégressif appliqué !
                      </p>
                    )}
                  </div>
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
