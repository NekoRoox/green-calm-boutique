import productCremeRevitalisante from "@/assets/product-creme-revitalisante.png";
import productBaumeRegenerant from "@/assets/product-baume-regenerant.png";
import productAbsolueCbde from "@/assets/product-absolue-cbde.png";
import productBroadSpectrum40 from "@/assets/product-broad-spectrum-40.png";
import productChanvonCbde from "@/assets/product-chanvon-cbde.png";
import productFullSpectrum40 from "@/assets/product-full-spectrum-40.png";
import productFullSpectrum10 from "@/assets/product-full-spectrum-10.png";
import productFullSpectrum30 from "@/assets/product-full-spectrum-30.png";
import productBroadSpectrum20 from "@/assets/product-broad-spectrum-20.png";
import productCremeMains from "@/assets/product-creme-mains.png";
import productCremeRecuperation from "@/assets/product-creme-recuperation.png";
import productCoolingGel from "@/assets/product-cooling-gel.png";
import productSavonOyl from "@/assets/product-savon-oyl.png";
import productSelBainOyl from "@/assets/product-sel-bain-oyl.png";

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
    name: "Fleurs CBD",
    slug: "fleurs",
    products: [
      {
        name: "Amnesia",
        price: "À partir de 7,00 €",
        prices: [{ label: "1g", price: "7 €" }, { label: "5g", price: "30 €" }, { label: "10g", price: "50 €" }],
        image: "https://m2j.fr/49-large_default/fleur-cbd-amnesia.jpg",
        description: "Amnesia, variété légendaire à dominante Sativa. Arômes puissants d'agrumes et de terre.\n\n🍋 Saveur — Notes citronnées intenses avec une touche épicée\n🌿 Terpènes — Profil riche en myrcène et limonène\n💎 Qualité — Fleurs denses et résineuses, cultivées en indoor\n📦 Conditionnement — Sachets hermétiques pour une fraîcheur optimale",
      },
      {
        name: "Gorilla Glue",
        price: "À partir de 6,00 €",
        prices: [{ label: "1g", price: "6 €" }, { label: "5g", price: "25 €" }, { label: "10g", price: "45 €" }],
        image: "https://m2j.fr/95-large_default/gorilla-glue.jpg",
        description: "Gorilla Glue, indica puissante aux arômes terreux.\n\n🍫 Saveur — Notes chocolatées et diesel avec une finition terreuse\n🔥 Résine — Production de trichomes exceptionnelle\n🧘 Effet — Détente musculaire intense et relaxation profonde\n📦 Conditionnement — Sachets hermétiques pour une conservation optimale",
      },
      {
        name: "Harlequin",
        price: "À partir de 7,00 €",
        prices: [{ label: "1g", price: "7 €" }, { label: "5g", price: "30 €" }, { label: "10g", price: "50 €" }],
        image: "https://m2j.fr/45-large_default/harlequin.jpg",
        description: "Harlequin, équilibrée et apaisante. Variété réputée pour son ratio CBD élevé et ses effets doux et relaxants.",
      },
      {
        name: "Cannatonic",
        price: "À partir de 7,50 €",
        prices: [{ label: "1g", price: "7,50 €" }, { label: "5g", price: "32 €" }, { label: "10g", price: "55 €" }],
        image: "https://m2j.fr/143-large_default/fleur-cannatonic.jpg",
        description: "Cannatonic, relaxante aux notes florales. Variété hybride reconnue pour son taux de CBD élevé et ses propriétés apaisantes.",
      },
      {
        name: "White Widow",
        price: "À partir de 7,00 €",
        prices: [{ label: "1g", price: "7 €" }, { label: "5g", price: "30 €" }, { label: "10g", price: "50 €" }],
        image: "https://m2j.fr/82-large_default/white-widow.jpg",
        description: "White Widow, classique énergisante. Fleurs recouvertes de cristaux blancs caractéristiques.\n\n❄️ Apparence — Manteau de trichomes blancs étincelants\n🌲 Saveur — Notes boisées et terreuses avec une pointe de pin\n🧘 Effet — Relaxation douce et apaisante",
      },
      {
        name: "Strawberry",
        price: "À partir de 8,00 €",
        prices: [{ label: "1g", price: "8 €" }, { label: "5g", price: "35 €" }, { label: "10g", price: "60 €" }],
        image: "https://m2j.fr/122-large_default/fleur-cbd-strawberry.jpg",
        description: "Strawberry, douce aux notes fruitées. Saveur sucrée de fraise avec des arômes floraux délicats.",
      },
      {
        name: "Lemon Haze",
        price: "À partir de 7,00 €",
        prices: [{ label: "1g", price: "7 €" }, { label: "5g", price: "30 €" }, { label: "10g", price: "50 €" }],
        image: "https://m2j.fr/77-large_default/lemon-haze.jpg",
        description: "Lemon Haze, citron vif et énergisant. Arômes explosifs de citron frais et de zeste acidulé pour une sensation légère et tonifiante.",
      },
      {
        name: "Jack Herer",
        price: "À partir de 8,00 €",
        prices: [{ label: "1g", price: "8 €" }, { label: "5g", price: "35 €" }, { label: "10g", price: "60 €" }],
        image: "https://m2j.fr/118-large_default/jack-herer.jpg",
        description: "Jack Herer, sativa énergique. Variété primée aux notes épicées et boisées, idéale pour une utilisation en journée.",
      },
      {
        name: "Purple Haze",
        price: "À partir de 8,00 €",
        prices: [{ label: "1g", price: "8 €" }, { label: "5g", price: "35 €" }, { label: "10g", price: "60 €" }],
        image: "https://m2j.fr/131-large_default/fleur-cbd-purple-haze.jpg",
        description: "Purple Haze, intense aux nuances pourpres. Fleurs aux teintes violettes caractéristiques et aux arômes fruités et terreux.",
      },
      {
        name: "Skywalker OG",
        price: "À partir de 8,00 €",
        prices: [{ label: "1g", price: "8 €" }, { label: "5g", price: "35 €" }, { label: "10g", price: "60 €" }],
        image: "https://m2j.fr/103-large_default/fleur-cbd-skywalker-og.jpg",
        description: "Skywalker OG, relaxation profonde. Variété indica aux arômes épicés et terreux, parfaite pour une détente en fin de journée.",
      },
      {
        name: "Mango Kush",
        price: "À partir de 9,00 €",
        prices: [{ label: "1g", price: "9 €" }, { label: "5g", price: "40 €" }, { label: "10g", price: "70 €" }],
        image: "https://m2j.fr/147-large_default/mango-kush.jpg",
        description: "Mango Kush, tropical et fruité. Arômes exotiques de mangue mûre avec des notes de pin et de terre pour une expérience sensorielle unique.",
      },
    ],
  },
  {
    name: "Huiles CBD",
    slug: "huiles",
    products: [
      {
        name: "Huile Full Spectrum 5%",
        price: "15,90 €",
        image: "https://m2j.fr/160-large_default/huile-de-cbd-5-full-spectrum.jpg",
        description: "Huile de CBD Full Spectrum 5% M2J. Concentration douce, parfaite pour les débutants. Effet d'entourage complet avec tous les cannabinoïdes naturels. Extraction CO2 supercritique, 100% Bio.",
      },
      {
        name: "Huile Full Spectrum 10%",
        price: "25,00 €",
        image: productFullSpectrum10,
        description: "Huile de CBD Full Spectrum 10% M2J. Concentration intermédiaire, équilibrée. Profitez de l'effet d'entourage complet avec cannabinoïdes et terpènes. Extraction premium, 100% naturelle.",
      },
      {
        name: "Huile Full Spectrum 20%",
        price: "40,00 €",
        image: "https://m2j.fr/162-large_default/huile-de-cbd-20-full-spectrum.jpg",
        description: "Huile de CBD Full Spectrum 20% M2J. Forte concentration pour utilisateurs réguliers. Effet d'entourage maximal, extraction CO2, chanvre bio français.",
      },
      {
        name: "Huile Full Spectrum 30%",
        price: "55,00 €",
        image: "https://m2j.fr/163-large_default/huile-de-cbd-30-full-spectrum.jpg",
        description: "Huile de CBD Full Spectrum 30% M2J. Très haute concentration pour utilisateurs expérimentés. Extraction premium, effet d'entourage complet. Chanvre bio cultivé en France.",
      },
      {
        name: "Huile Full Spectrum 40%",
        price: "65,00 €",
        image: productFullSpectrum40,
        description: "Huile de CBD Full Spectrum 40% M2J. Concentration maximale de la gamme Full Spectrum. Effet d'entourage complet, extraction CO2 supercritique. Chanvre bio français.",
      },
      {
        name: "Huile Broad Spectrum 10%",
        price: "22,00 €",
        image: "https://m2j.fr/280-large_default/huile-de-cbd-10-broad-spectrum-m2j.jpg",
        description: "Huile de CBD Broad Spectrum 10% M2J. Formule sans THC détectable. Conserve tous les autres cannabinoïdes et terpènes. 100% naturelle.",
      },
      {
        name: "Huile Broad Spectrum 20%",
        price: "35,00 €",
        image: productBroadSpectrum20,
        description: "Huile de CBD Broad Spectrum 20% M2J. Concentration intermédiaire, sans THC détectable. Profitez des bienfaits du chanvre en toute sérénité.",
      },
      {
        name: "Huile Broad Spectrum 30%",
        price: "45,00 €",
        image: "https://m2j.fr/282-large_default/huile-de-cbd-30-broad-spectrum-m2j.jpg",
        description: "Huile de CBD Broad Spectrum 30% M2J. Haute concentration sans THC détectable. Pour les utilisateurs expérimentés. 100% Bio.",
      },
      {
        name: "Huile Broad Spectrum 40%",
        price: "50,00 €",
        image: productBroadSpectrum40,
        description: "Huile de CBD Broad Spectrum 40% M2J. Concentration maximale, sans THC. La plus puissante de la gamme Broad Spectrum.",
      },
    ],
  },
  {
    name: "Tisanes",
    slug: "tisanes",
    products: [
      {
        name: "Tisane Relax Camomille",
        price: "6,90 €",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400",
        description: "Tisane Relax à la camomille et fleurs de chanvre CBD. Mélange apaisant pour favoriser la détente et le sommeil. Infusion bio aux arômes floraux doux. Sachet 30g.",
      },
      {
        name: "Tisane Energie Citron",
        price: "6,90 €",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
        description: "Tisane Energie au citron et chanvre CBD. Mélange vivifiant pour stimuler l'énergie naturellement. Notes citronnées fraîches et tonifiantes. Infusion bio, sachet 30g.",
      },
      {
        name: "Tisane Digestion Menthe",
        price: "6,90 €",
        image: "https://images.unsplash.com/photo-1563822249366-56d3640b58e1?w=400",
        description: "Tisane Digestion à la menthe et chanvre CBD. Facilite la digestion après les repas. Fraîcheur mentholée et propriétés apaisantes. Infusion bio, sachet 30g.",
      },
    ],
  },
  {
    name: "Cosmétiques",
    slug: "cosmetiques",
    products: [
      {
        name: "Cooling Gel CBD 500mg",
        price: "24,90 €",
        image: productCoolingGel,
        description: "Gel refroidissant au CBD 500mg par ØYL. Soulage muscles et articulations après l'effort. Application locale, action rapide, effet froid apaisant.",
      },
      {
        name: "Bougie Massage CBD 2500mg",
        price: "19,90 €",
        image: "https://oyl.fr/wp-content/uploads/2022/09/bougie-massage-cbd.jpg",
        description: "Bougie de massage au CBD 2500mg par ØYL. Fond en huile chaude pour un massage relaxant. Riche en CBD pour une détente profonde et une peau nourrie.",
      },
      {
        name: "Sel de Bain CBD 2000mg",
        price: "14,90 €",
        image: "https://oyl.fr/wp-content/uploads/2022/09/sel-bain-cbd.jpg",
        description: "Sel de bain CBD Extract par ØYL. 2000mg de fleurs CBD pour 100g. Formule enrichie aux minéraux et extraits de chanvre pour un bain apaisant et régénérant.",
      },
      {
        name: "Huile Corps CBD Asabio",
        price: "22,00 €",
        image: "https://www.asabio-cosmetics.com/cdn/shop/products/ASABIO-Huile-CBD-Massage-Corporelle-100ml.jpg?v=1679928400",
        description: "Huile corps CBD par Asabio Wellness. Enrichie au CBD, romarin et eucalyptus pour le soulagement, la détente et la vitalité.",
      },
      {
        name: "Crème Revitalisante Asabio",
        price: "18,90 €",
        image: productCremeRevitalisante,
        description: "Crème revitalisante et hydratante par Asabio Softness. 140mg de CBD et Citron de Sicile bio en 45ml. Protège et illumine la peau.",
      },
      {
        name: "Baume Régénérant Asabio",
        price: "24,00 €",
        image: productBaumeRegenerant,
        description: "Baume régénérant et calmant Asabio CBD. 500mg de CBD et fleur de Calendula pour réparer, apaiser et régénérer la peau.",
      },
      {
        name: "L'Absolue cbdé",
        price: "28,00 €",
        image: productAbsolueCbde,
        description: "L'Absolue par cbdé — Huile Chanvre et Jojoba Bio. Multiusage pour visage, corps, cheveux et barbe. 100% naturelle et bio, 100ml.",
      },
      {
        name: "Crème Mains Asabio",
        price: "12,50 €",
        image: productCremeMains,
        description: "Crème réparatrice main et ongles Asabio Wellness. 60mg de CBD et beurre de karité pour une hydratation intense. 50ml.",
      },
      {
        name: "Crème Récupération Asabio",
        price: "16,90 €",
        image: productCremeRecuperation,
        description: "Crème récupération corporelle Asabio Wellness. 480mg de CBD et Arnica Montana pour les muscles après l'effort. 30ml.",
      },
      {
        name: "Crème Double Action Asabio",
        price: "19,90 €",
        image: "https://www.asabio-cosmetics.com/cdn/shop/products/ASABIO-Creme-CBD-Double-Action-50ml.jpg?v=1679928400",
        description: "Crème double action épiderme et rougeurs Asabio. 110mg de CBD et Aloe Vera pour peaux sèches et sensibles. 50ml.",
      },
      {
        name: "Le Chanvon cbdé",
        price: "7,90 €",
        image: productChanvonCbde,
        description: "Le Chanvon par cbdé — Savon artisanal à l'huile de chanvre bio. Visage et corps, sans produits chimiques. Hydrate et nourrit en douceur.",
      },
      {
        name: "Savon Facial ØYL",
        price: "9,90 €",
        image: productSavonOyl,
        description: "Savon facial à l'huile de chanvre par ØYL. 70g. Calm & Regenerate pour peaux sensibles. Formule douce enrichie en Hemp Seed Oil.",
      },
    ],
  },
  {
    name: "E-Liquides",
    slug: "eliquides",
    products: [
      {
        name: "E-Liquide CBD 1000mg",
        price: "19,90 €",
        image: "https://www.greeneocbd.fr/wp-content/uploads/2021/03/e-liquide-cbd-greeneo.jpg",
        description: "E-Liquide CBD 1000mg par Greeneo CBD. Saveur Anmesai pour une expérience vapeur douce et aromatique. Compatible avec toutes cigarettes électroniques. 10ml.",
      },
    ],
  },
  {
    name: "Accessoires",
    slug: "accessoires",
    products: [
      {
        name: "Vaporisateur Portable",
        price: "39,90 €",
        image: "https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?w=400",
        description: "Vaporisateur portable haute qualité pour fleurs CBD. Chauffe précise, batterie longue durée, design discret. Extraction optimale sans combustion.",
      },
      {
        name: "Grinder Premium",
        price: "12,90 €",
        image: "https://images.unsplash.com/photo-1612830277582-c7c3e0ef26cc?w=400",
        description: "Grinder premium 4 compartiments en aluminium anodisé. Dents diamantées pour un broyage parfait. Tamis intégré.",
      },
      {
        name: "Boîte Hermétique",
        price: "8,90 €",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        description: "Boîte de conservation hermétique pour fleurs CBD. Contrôle d'humidité intégré, protège les arômes. Matériau anti-UV. Capacité 50g.",
      },
    ],
  },
];
