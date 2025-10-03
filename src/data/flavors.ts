export interface Flavor {
  id: number;
  name: string;
  description: string;
  color: string;
  icon: string;
  category: 'classic' | 'seasonal' | 'special';
  allergens: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
}

export const weeklyFlavors: Flavor[] = [
  {
    id: 1,
    name: "Vanilla Bean",
    description: "Classic Madagascar vanilla with real vanilla beans",
    color: "from-yellow-200 to-yellow-300",
    icon: "🍦",
    category: "classic",
    allergens: ["milk", "eggs"],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 2,
    name: "Strawberry Dream",
    description: "Fresh Bulgarian strawberries in creamy gelato",
    color: "from-pink-200 to-pink-300",
    icon: "🍓",
    category: "seasonal",
    allergens: ["milk", "eggs"],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 3,
    name: "Chocolate Delight",
    description: "Rich Belgian chocolate with cocoa nibs",
    color: "from-amber-200 to-amber-300",
    icon: "🍫",
    category: "classic",
    allergens: ["milk", "eggs", "nuts"],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 4,
    name: "Mint Fresh",
    description: "Cool mint with fresh mint leaves",
    color: "from-green-200 to-green-300",
    icon: "🌿",
    category: "classic",
    allergens: ["milk", "eggs"],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 5,
    name: "Pistachio",
    description: "Authentic Sicilian pistachios",
    color: "from-green-100 to-green-200",
    icon: "🥜",
    category: "special",
    allergens: ["milk", "eggs", "nuts"],
    isGlutenFree: true,
    isVegan: false
  },
  {
    id: 6,
    name: "Lemon Sorbet",
    description: "Refreshing lemon with a hint of zest",
    color: "from-yellow-100 to-yellow-200",
    icon: "🍋",
    category: "seasonal",
    allergens: [],
    isGlutenFree: true,
    isVegan: true
  }
];

export const shopInfo = {
  name: "Atelier del Gelato",
  slogan: "Creating Baci Moments Daily",
  address: "ulitsa Georgi S. Rakovski 149, Sofia, Bulgaria",
  phone: "+359 (0) 2 123 4567",
  email: "hello@atelierdelgelato.bg",
  hours: "Every day: 11:30 AM - 8:00 PM",
  socialMedia: {
    facebook: "#",
    instagram: "#",
    twitter: "#"
  }
};
