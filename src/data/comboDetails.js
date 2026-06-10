// src/data/comboDetails.js
import saar8mlcombo from "@/assets/combo_8ml.jpg";
import saar3mlcombo from "@/assets/combo_3ml.jpg";
export const comboCollections = [
  {
    id: 101,
    name: "Gift Set",
    description: "A curated selection of SAAR fragrances. Set of 4",
    perfectFor: "Festival | Wedding | Corporate gifting",
    image: saar8mlcombo,
    combo: true,
    // Custom variants just for this combo
    variants: {
      "4 x 8ml": { price: "₹1099", launchPrice: "₹679" },
    }
  },
  {
    id: 102,
    name: "Discovery Set",
    description: "Explore the world of SAAR through miniature selection. Set of 5",
    perfectFor: "Travel | Gifting",
    image: saar3mlcombo,
    combo: true,
    variants: {
      "5 x 3ml": { price: "₹350", launchPrice: "₹250" },
    }
  }
  import saar8mlcombo from "@/assets/combo_8ml.jpg";
  import saar3mlcombo from "@/assets/combo_3ml.jpg";
  export const comboCollections = [
    {
      id: 101,
      name: "Gift Set",
      description: "A curated selection of SAAR fragrances. Set of 4",
      perfectFor: "Festival | Wedding | Corporate gifting",
      image: saar8mlcombo,
      combo: true,
      // Custom variants just for this combo
      variants: {
        "4 x 8ml": { price: "₹1099", launchPrice: "₹679" },
      }
    },
    {
      id: 102,
      name: "Discovery Set",
      description: "Explore the world of SAAR through miniature selection. Set of 5",
      perfectFor: "Travel | Gifting",
      image: saar3mlcombo,
      combo: true,
      variants: {
        "5 x 3ml": { price: "₹350", launchPrice: "₹250" },
      }
    }
];