import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const formatPrice = (price: number) => price.toFixed(2).replace(".", ",") + " €";

const Commande = () => {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", address: "", city: "", zip: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — Stripe integration will replace this
    toast.success("Commande enregistrée !", { description: "Le paiement Stripe sera intégré prochainement." });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="font-display text-2xl font-semibold mb-2">Votre panier est vide</h1>
            <p className="text-muted-foreground font-body text-sm mb-6">Ajoutez des produits pour passer commande.</p>
            <Button asChild>
              <Link to="/produits">Voir les produits</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/produits"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-body text-sm transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Continuer les achats
          </Link>

          <h1 className="font-display text-3xl font-bold mb-8">Votre commande</h1>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl">
            {/* Cart items */}
            <div className="lg:col-span-3 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-card border border-border rounded-sm p-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-sm object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-medium truncate">{item.name}</p>
                    {item.grams && <p className="font-body text-xs text-muted-foreground">{item.grams}g</p>}
                    <p className="font-body text-sm font-semibold mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <label className="font-body text-xs text-muted-foreground">Qté :</label>
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="border border-border rounded-sm px-2 py-1 text-sm bg-background"
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-sm p-6 sticky top-24">
                <h2 className="font-display text-lg font-semibold mb-4">Récapitulatif</h2>

                <div className="space-y-2 mb-4 border-b border-border pb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between font-body text-sm">
                      <span className="truncate mr-2">{item.name} ×{item.quantity}</span>
                      <span className="shrink-0">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="font-body font-medium">Total</span>
                  <span className="font-display text-2xl font-bold">{formatPrice(totalPrice)}</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Prénom" required value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} />
                    <Input placeholder="Nom" required value={form.lastName} onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))} />
                  </div>
                  <Input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                  <Input placeholder="Adresse" required value={form.address} onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} />
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Ville" required value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} />
                    <Input placeholder="Code postal" required value={form.zip} onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))} />
                  </div>
                  <Input placeholder="Téléphone" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />

                  <Button type="submit" className="w-full" size="lg">
                    Payer {formatPrice(totalPrice)}
                  </Button>
                  <p className="font-body text-xs text-muted-foreground text-center">
                    Paiement sécurisé par Stripe
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Commande;
