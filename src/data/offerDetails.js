
import H1 from "@/assets/FDAY/H1.jpeg"
import H2 from "@/assets/FDAY/H2.jpeg"
import H3 from "@/assets/FDAY/H3.jpeg"
import H4 from "@/assets/FDAY/H4.jpeg"



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

export const collectionsjson = [
    {
      id: 1,
      name: "The Debut Dad",
      description: "For the new Dad",
      topNode: "Lemon, Mint, Grapefruit ",
      middleNode: "Ginger, Jasmine",
      baseNode: "Woody, Sandalwood, Amber",
      image: H1,
      detailedImages: [H1], // Add more images as needed
    },
    {
      id: 2,
      name: "Kabhi Naram Kabhi Garam",
      description: "For the dad who balances Strictness and Warmth",
      topNode: "Lemon, Bergamot, Fresh Notes ",
      middleNode: "Jasmine, Rosemary",
      baseNode: "Musky, Cedar",
      image: H2,
      detailedImages: [H2], // Add more images as needed

    },
    {
      id: 3,
      name: "Swag Wale Dad",
      description: "For the dad, who never goes out of style",
      topNode: "Orange, Grapefruit, Mint",
      middleNode: "Cinnamon, Spicy, Rose",
      baseNode: "Woody, Amber, Leathery",
      image: H3
    },
    {
      id: 4,
      name: "The OG Dad",
      description: "For the Original Legend",
      topNode: "Orange, Grapefruit, Mint",
      middleNode: "Cinnamon, Spicy, Rose",
      baseNode: "Woody, Amber, Leathery",
      image: H4
    }
  ]