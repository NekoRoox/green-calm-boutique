import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formatPrice = (price: number) => price.toFixed(2).replace(".", ",") + " €";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate("/commande");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">
            Panier ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="h-12 w-12" />
            <p className="font-body text-sm">Votre panier est vide</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-secondary/30 rounded-sm p-3 border border-border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-sm object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm font-medium truncate">{item.name}</p>
                    {item.grams && (
                      <p className="font-body text-xs text-muted-foreground">{item.grams}g</p>
                    )}
                    <p className="font-body text-sm font-semibold text-foreground mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-sm border border-border hover:border-primary transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-body text-sm min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-sm border border-border hover:border-primary transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-muted-foreground">Total</span>
                <span className="font-display text-xl font-semibold">{formatPrice(totalPrice)}</span>
              </div>
              <Button onClick={handleCheckout} className="w-full" size="lg">
                Passer la commande
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
