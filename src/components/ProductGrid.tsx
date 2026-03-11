import ProductCard from "./ProductCard";
import productFlower from "@/assets/product-flower.jpg";
import productCream from "@/assets/product-cream.jpg";
import productOil from "@/assets/product-oil.jpg";
import productInfusion from "@/assets/product-infusion.jpg";

const products = [
  {
    name: "Fleur de CBD Amnesia",
    price: "12,90 €",
    category: "Fleurs",
    image: productFlower,
  },
  {
    name: "Crème visage au chanvre",
    price: "34,90 €",
    category: "Cosmétiques",
    image: productCream,
  },
  {
    name: "Huile de massage CBD",
    price: "29,90 €",
    category: "Huiles",
    image: productOil,
  },
  {
    name: "Infusion Détente",
    price: "9,90 €",
    category: "Infusions",
    image: productInfusion,
  },
];

const ProductGrid = () => {
  return (
    <section id="produits" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Notre sélection
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Nos produits phares
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
