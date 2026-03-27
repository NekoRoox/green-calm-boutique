import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import { Slider } from "@/components/ui/slider";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const calculateFlowerPrice = (grams: number, product: { price: string; prices?: { label: string; price: string }[] }): number => {
  if (grams <= 0) return 0;
  const basePerGram = parsePrice(product.price.replace("/g", ""));
  const price10 = product.prices?.find(p => p.label === "10g");
  const price5 = product.prices?.find(p => p.label === "5g");
  const pack10Price = price10 ? parsePrice(price10.price) : basePerGram * 10;
  const pack5Price = price5 ? parsePrice(price5.price) : basePerGram * 5;

  if (grams % 5 !== 0) return grams * basePerGram;
  const packs10 = Math.floor(grams / 10);
  const packs5 = (grams % 10) === 5 ? 1 : 0;
  return packs10 * pack10Price + packs5 * pack5Price;
};

const formatPrice = (price: number): string => {
  return price.toFixed(2).replace(".", ",") + " €";
};

const parsePrice = (priceStr: string): number => {
  const match = priceStr.match(/([\d,]+)\s*€/);
  if (!match) return 0;
  return parseFloat(match[1].replace(",", "."));
};

const ProduitDetail = () => {
  const { categorySlug, productIndex } = useParams();
  const idx = Number(productIndex);
  const { addItem } = useCart();

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

  const totalPrice = isFlower ? calculateFlowerPrice(grams) : parsePrice(product.price);
  const pricePerGram = grams > 0 ? (isFlower ? totalPrice / grams : 0) : 0;

  const handleAddToCart = () => {
    const itemId = isFlower
      ? `${categorySlug}-${idx}-${grams}g`
      : `${categorySlug}-${idx}`;

    addItem({
      id: itemId,
      name: isFlower ? `${product.name} (${grams}g)` : product.name,
      categorySlug: categorySlug!,
      productIndex: idx,
      image: product.image,
      price: totalPrice,
      grams: isFlower ? grams : undefined,
    });

    toast.success("Ajouté au panier !", { duration: 2000 });
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
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
                  <p className="font-body text-sm text-muted-foreground mb-4">Choisissez votre quantité :</p>

                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => setGrams(Math.max(1, grams - 1))}
                      className="p-2 rounded-sm border border-border bg-card text-foreground hover:border-primary transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-display text-3xl font-semibold text-foreground min-w-[80px] text-center">
                      {grams}g
                    </span>
                    <button
                      onClick={() => setGrams(Math.min(50, grams + 1))}
                      className="p-2 rounded-sm border border-border bg-card text-foreground hover:border-primary transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mb-6">
                    <Slider value={[grams]} onValueChange={(v) => setGrams(v[0])} min={1} max={50} step={1} className="w-full" />
                    <div className="flex justify-between mt-2 font-body text-xs text-muted-foreground">
                      <span>1g</span><span>25g</span><span>50g</span>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-sm p-4 border border-border">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-body text-sm text-muted-foreground">Prix total</span>
                      <span className="font-display text-2xl font-semibold text-foreground">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-body text-xs text-muted-foreground">Prix au gramme</span>
                      <span className="font-body text-sm text-muted-foreground">{formatPrice(pricePerGram)}/g</span>
                    </div>
                    {grams >= 5 && grams % 5 === 0 && (
                      <p className="font-body text-xs text-primary mt-2">🎉 Prix dégressif appliqué !</p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="font-display text-2xl font-semibold text-foreground mb-6">{product.price}</p>
              )}

              {product.description && (
                <div className="mb-6 bg-secondary/30 rounded-sm p-5 border border-border">
                  {product.description.split("\n\n").map((block, i) => (
                    <div key={i} className={i > 0 ? "mt-3" : ""}>
                      {block.includes("\n") ? (
                        block.split("\n").map((line, j) => (
                          <p key={j} className="font-body text-sm text-muted-foreground leading-relaxed">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="font-body text-sm text-foreground/80 leading-relaxed">{block}</p>
                      )}
                    </div>
                  ))}
                </div>
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
