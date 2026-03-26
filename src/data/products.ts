import catFleurs from "@/assets/cat-fleurs.jpg";
import catCosmetiques from "@/assets/cat-cosmetiques.jpg";
import catHuiles from "@/assets/cat-huiles.jpg";
import catGrinder from "@/assets/cat-grinder.jpg";
import catPlateaux from "@/assets/cat-plateaux.jpg";
import catSommeil from "@/assets/cat-sommeil.jpg";
import catConsommable from "@/assets/cat-consommable.jpg";
import catBijoux from "@/assets/cat-bijoux.jpg";
import productPatesChanvre from "@/assets/product-pates-chanvre.png";

import productFlower from "@/assets/product-flower.jpg";
import productCream from "@/assets/product-cream.jpg";
import productOil from "@/assets/product-oil.jpg";
import productInfusion from "@/assets/product-infusion.jpg";
import productAmnesia from "@/assets/product-amnesia.jpg";
import productWhiteWidow from "@/assets/product-whitewidow.jpg";
import productSuperLemonHaze from "@/assets/product-superlemonhaze.jpg";

export interface Product {
  name: string;
  price: string;
  prices?: { label: string; price: string }[];
  image: string;
  description?: string;
}

export interface Category {
  name: string;
  slug: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    name: "Fleurs",
    slug: "fleurs",
    products: [
      { name: "Amnésia Molécule", price: "10 €/g", prices: [{ label: "1g", price: "10 €" }, { label: "5g", price: "35 €" }, { label: "10g", price: "55 €" }], image: productAmnesia },
      { name: "White Widow", price: "10 €/g", prices: [{ label: "1g", price: "10 €" }, { label: "5g", price: "35 €" }, { label: "10g", price: "55 €" }], image: productWhiteWidow },
      { name: "Super Lemon Haze", price: "8 €/g", prices: [{ label: "1g", price: "8 €" }, { label: "5g", price: "22 €" }, { label: "10g", price: "35 €" }], image: productSuperLemonHaze },
      { name: "Lemon Haze", price: "11,90 €", image: productFlower },
      { name: "OG Kush CBD", price: "13,50 €", image: catFleurs },
      { name: "Strawberry", price: "14,90 €", image: productFlower },
      { name: "Purple Haze", price: "15,90 €", image: catFleurs },
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
      { name: "Pâtes au chanvre BIO", price: "4,90 €", image: productPatesChanvre, description: "Découvrez nos pâtes au chanvre BIO, un mélange unique de farine de chanvre et de blé ancien pour une alimentation saine et gourmande.\n\n🌱 100% Végan — Sans ingrédient d'origine animale\n⏱️ Cuisson rapide — Seulement 4 minutes\n📦 Format 250g — Idéal pour 2 à 3 portions\n🇫🇷 Fabrication artisanale française\n\nRiches en protéines végétales et en oméga-3, ces pâtes au chanvre apportent un goût subtil de noisette qui sublimera vos plats du quotidien. Parfaites avec un filet d'huile d'olive et des légumes de saison." },
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
