import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6b9d", // Pink gelato
        secondary: "#ffa726", // Orange gelato
        accent: "#66bb6a", // Mint gelato
        cream: "#fff8f0", // Cream background
        chocolate: "#8d4e00", // Dark chocolate
        vanilla: "#f5f5dc", // Vanilla
        strawberry: "#ffcdd2", // Strawberry
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-titan-one)", "cursive"],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      backgroundImage: {
        'gradient-gelato': 'linear-gradient(135deg, #ff6b9d 0%, #ffa726 50%, #66bb6a 100%)',
        'gradient-cream': 'linear-gradient(135deg, #fff8f0 0%, #f5f5dc 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
