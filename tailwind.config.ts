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
        // Deep navy — primary brand anchor
        navy: {
          50: "#eef2f8",
          100: "#d5deee",
          200: "#aabddc",
          300: "#7f9cca",
          400: "#547bb8",
          500: "#345c98",
          600: "#274776",
          700: "#1d3559",
          800: "#132441",
          900: "#0b172c",
          950: "#060d1a",
        },
        // Medical blue — main action color
        medical: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bcdcff",
          300: "#8ec6ff",
          400: "#59a6ff",
          500: "#3183fb",
          600: "#1b63f0",
          700: "#1650dd",
          800: "#1841b3",
          900: "#1a3b8d",
          950: "#152556",
        },
        // Sky blue — light accents / backgrounds
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Gold — subtle premium accent
        gold: {
          50: "#fbf7ee",
          100: "#f5ebd0",
          200: "#ecd59f",
          300: "#e1bb66",
          400: "#d7a441",
          500: "#c88d2c",
          600: "#ac6f24",
          700: "#8a5220",
          800: "#734321",
          900: "#62381f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(11, 23, 44, 0.06), 0 8px 24px -8px rgba(11, 23, 44, 0.12)",
        "card-hover":
          "0 4px 12px rgba(11, 23, 44, 0.08), 0 16px 40px -12px rgba(11, 23, 44, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
