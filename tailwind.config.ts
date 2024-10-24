import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2540", // 짙은 네이비 블루 (전문성, 신뢰)
          light: "#4A6FA5", // 차분한 블루 (보조 색상)
          dark: "#081C30", // 아주 짙은 블루 (고급스러움)
        },
        secondary: {
          DEFAULT: "#32ACB3", // Teal
          light: "#4ECDC4",
          dark: "#1F7268",
        },
        accent: "#E63946", // Red
        success: "#4CAF50", // Green
        warning: "#FFC107", // Amber
        error: "#F44336", // Red
        info: "#1D4ED8", // Blue
        neutral: {
          DEFAULT: "#F1FAEE", // Light gray
          dark: "#457B9D", // Dark gray
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
