import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  price: string;
  category: string;
  image: string;
}

const ProductCard = ({ name, price, category, image }: ProductCardProps) => {
  const handleAddToCart = () => {
    toast.success(`${name} ajouté au panier`, {
      description: "Continuez vos achats ou finalisez votre commande.",
      duration: 3000,
    });
  };

  return (
    <div className="group hover-lift bg-card rounded-sm overflow-hidden border border-border">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
          {category}
        </p>
        <h3 className="font-display text-lg font-medium text-card-foreground">{name}</h3>
        <div className="flex items-center justify-between mt-4">
          <span className="font-body text-base font-semibold text-foreground">{price}</span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-primary text-primary-foreground font-body text-xs font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
