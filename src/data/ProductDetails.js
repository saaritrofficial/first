import saarBlueedge from "@/assets/Collection/Blue_Edge_image.jpg";
import saarBlueedge_B from "@/assets/Collection/Blue_Edge_with_box.jpg";
import saarAmberDrift from "@/assets/Collection/Amber_Drift_image.jpg";
import saarAmberDrift_B from "@/assets/Collection/Amber_Drift_with_box.jpg";
import saarAquaImage from "@/assets/Collection/Aqua_Aura_image.jpg";
import saarAquaImage_B from "@/assets/Collection/Aqua_Aura_with_box.jpg";
import saarCoolRush from "@/assets/Collection/Cool_Rush_image.jpg";
import saarCoolRush_B from "@/assets/Collection/Cool_Rush_with_box.jpg";
import saarStoneedge from "@/assets/Collection/Stone_edge_image.jpg";
import saarStoneedge_B from "@/assets/Collection/Stone_with_box.jpg";
import saarFlore from "@/assets/Collection/Flore_Essence_image.jpg";
import saarFlore_B from "@/assets/Collection/Flore_Essence_with_box.jpg";
import saarGoldenaura from "@/assets/Collection/Golden_Aura_image.jpg";
import saarGoldenaura_B from "@/assets/Collection/Golden_Aura_with_box.jpg";
import saarKingmyst from "@/assets/Collection/King_Mystique_image.jpg";
import saarKingmyst_B from "@/assets/Collection/king_with_box.jpg";
import saarOudeternal from "@/assets/Collection/Oud_Eternal_image.jpg";
import saarOudeternal_B from "@/assets/Collection/Oud_with_box.jpg"
import saarPulse from "@/assets/Collection/Pulse-X_image.jpg";
import saarPulse_B from "@/assets/Collection/Pulse-X_with_box.jpg";
import Back from "@/assets/Box_back.jpg";
import Reason from "@/assets/Reason.jpg";

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
      description: "Best for Office and Evening Wear",
      topNode: "Lemon, Mint, Grapefruit ",
      middleNode: "Ginger, Jasmine",
      baseNode: "Sandalwood, Amber",
      image: saarBlueedge,
      detailedImages: [saarBlueedge,saarBlueedge_B,Reason,Back], // Add more images as needed
      premium: "yes",
    },
    {
      id: 6,
      name: "Aqua Aura",
      description: "Best for Daily, Summer and Office Wear",
      topNode: "Lemon, Bergamot",
      middleNode: "Jasmine, Rosemary",
      baseNode: "Musk, Cedar",
      image: saarAquaImage,
      detailedImages: [saarAquaImage,saarAquaImage_B,Reason,Back], // Add more images as needed

    },
    {
      id: 2,
      name: "Golden Aura",
      description: "Best for Celebrations and Occasions",
      topNode: "Citrus, Mint",
      middleNode: "Cinnamon, Rose",
      baseNode: "Amber, Leather",
      image: saarGoldenaura,
      detailedImages: [saarGoldenaura,saarGoldenaura_B,Reason,Back], // Add more images as needed
    },
    {
      id: 3,
      name: "Oud Eternal",
      description: "Best for Special occasions and Evening Wear",
      topNode: "Rose, Saffron",
      middleNode: "Patchouli, Caramel",
      baseNode: "Oud, Musk, Amber",
      image: saarOudeternal,
      detailedImages: [saarOudeternal,saarOudeternal_B,Reason,Back], // Add more images as needed
      premium: "yes"
    },
    {
      id: 7,
      name: "Cool Rush",
      description: "Best for Summer and Daily Wear",
      topNode: "Fresh Citrus",
      middleNode: "Aquatic notes",
      baseNode: "Woody, Musk",
      image: saarCoolRush,
      detailedImages: [saarCoolRush,saarCoolRush_B,Reason,Back], // Add more images as needed
    },
    {
      id: 4,
      name: "Pulse-X",
      description: "Best for Casual and Active lifestyle",
      topNode: "Citrus, Green",
      middleNode: "Spices",
      baseNode: "Woody, Musk",
      image: saarPulse,
      detailedImages: [saarPulse,saarPulse_B,Reason,Back], // Add more images as needed
    },
    {
      id: 5,
      name: "Amber Drift",
      description: "Best for Evening and Date nights",
      topNode: "Spicy, Cardamon",
      middleNode: "Caramel Accord",
      baseNode: "Amber, Wood, Vanilla",
      image: saarAmberDrift,
      detailedImages: [saarAmberDrift,saarAmberDrift_B,Reason,Back], // Add more images as needed
    },
    {
      id: 8,
      name: "Stone Edge",
      description: "Best for Office and Professional Wear",
      topNode: "Citrus",
      middleNode: "Creamy accord",
      baseNode: "Musky amber",
      image: saarStoneedge,
      detailedImages: [saarStoneedge,saarStoneedge_B,Reason,Back], // Add more images as needed
    },
    {
      id: 9,
      name: "King Mystique",
      description: "Best for Night Wear and Signature scent",
      topNode: "Bergamot",
      middleNode: "Lavender, Cardamom",
      baseNode: "Oud, Leather, Musk",
      image: saarKingmyst,
      detailedImages: [saarKingmyst,saarKingmyst_B,Reason,Back], // Add more images as needed
      premium: "yes"
    },
    {
      id: 10,
      name: "Florė Essence",
      description: "Best for Daytime wear and Everyday elegance",
      topNode: "Peony, Citrus",
      middleNode: "Fruity, Floral, Rose",
      baseNode: "Sandalwood, Soft spice",
      image: saarFlore,
      detailedImages: [saarFlore,saarFlore_B,Reason,Back], // Add more images as needed
    }
  ];