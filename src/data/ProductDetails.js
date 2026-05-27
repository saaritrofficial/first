import saarBlueedge from "@/assets/Blue_Edge_image.jpg";
import saarAmberDrift from "@/assets/Amber_Drift_image.jpg";
import saarAquaImage from "@/assets/Aqua_Aura_image.jpg";
import saarColdRush from "@/assets/Cold_Rush_image.jpg";
import saarStoneedge from "@/assets/Stone_edge_image.jpg";
import saarFlore from "@/assets/Flore_Essence_image.jpg";
import saarGoldenaura from "@/assets/Golden_Aura_image.jpg";
import saarKingmyst from "@/assets/King_Mystique_image.jpg";
import saarOudeternal from "@/assets/Oud_Eternal_image.jpg";
import saarPulse from "@/assets/Pluse-X_image.jpg";

export const PRICE_TIERS = {
    premium: {
      "30ml": { price: "₹999", launchPrice: "₹699" },
      "60ml": { price: "₹1,549", launchPrice: "₹999" },
      "100ml": { price: "₹2,499", launchPrice: "₹1,899" }
    },
    standard: {
      "30ml": { price: "₹899", launchPrice: "₹599" },
      "60ml": { price: "₹1,449", launchPrice: "₹899" },
      "100ml": { price: "₹2,299", launchPrice: "₹1,699" }
    }
  };

export const collections = [
    {
      id: 1,
      name: "Blue Edge",
      description: "Fresh, Warm and Woody",
      topNode: "Lemon, Mint, Grapefruit ",
      middleNode: "Ginger, Jasmine",
      baseNode: "Woody, Sandalwood, Amber",
      image: saarBlueedge,
      detailedImages: [saarBlueedge], // Add more images as needed
      premium: "yes",
    },
    {
      id: 6,
      name: "Aqua Aura",
      description: "Fresh, Floral and Musky",
      topNode: "Lemon, Bergamot, Fresh Notes ",
      middleNode: "Jasmine, Rosemary",
      baseNode: "Musky, Cedar",
      image: saarAquaImage,
      detailedImages: [saarAquaImage], // Add more images as needed

    },
    {
      id: 2,
      name: "Golden Aura",
      description: "Fruity, Spicy and Woody",
      topNode: "Orange, Grapefruit, Mint",
      middleNode: "Cinnamon, Spicy, Rose",
      baseNode: "Woody, Amber, Leathery",
      image: saarGoldenaura
    },
    {
      id: 3,
      name: "Oud Eternal",
      description: "Floral, Earthy and Musky",
      topNode: "Rose, Saffron",
      middleNode: "Patchouli, Sweet Caramel",
      baseNode: "Oud, Musky, Ambery",
      image: saarOudeternal,
      premium: "yes"
    },
    {
      id: 7,
      name: "Cool Rush",
      description: "Citrus, Spicy and Woody",
      topNode: "Fresh Citrus, Green Notes",
      middleNode: "Spicy, Aromatic",
      baseNode: "Woody, Musky",
      image: saarColdRush
    },
    {
      id: 4,
      name: "Pulse-X",
      description: "Green, Floral and Musky",
      topNode: "Citrus, Green",
      middleNode: "Spicy, Floral",
      baseNode: "Woody, Musky",
      image: saarPulse
    },
    {
      id: 5,
      name: "Amber Drift",
      description: "Warm, Goumand and Amber",
      topNode: "Spicy, Cardamon",
      middleNode: "Sweet, Creamy, Caramel Accord",
      baseNode: "Amber, Woody, Vanilla",
      image: saarAmberDrift
    },
    {
      id: 8,
      name: "Stone Edge",
      description: "Aquatic, Aromatic and Amber",
      topNode: "Citrus, Fresh Notes ",
      middleNode: "Creamy, Sweet",
      baseNode: "Musky, Ambery",
      image: saarStoneedge
    },
    {
      id: 9,
      name: "King Mystique",
      description: "Green, Floral and Earthy",
      topNode: "Bergamot, Sandalwood",
      middleNode: "Lavender, Cardamom, Cypress",
      baseNode: "Oud, Leathery, Musky",
      image: saarKingmyst,
      premium: "yes"
    },
    {
      id: 10,
      name: "Florė Essence",
      description: "Citrus, Floral and Woody",
      topNode: "Peony, Citrus, Orange",
      middleNode: "Fruity, Floral, Rose",
      baseNode: "Woody, Sandalwood, Pink Pepper",
      image: saarFlore
    }
  ];