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
        baseText: "#37352F",
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
      animation: {
        wave: "wave 0.6s ease-in-out infinite",
        wave200: "wave 0.6s ease-in-out infinite 200ms",
        wave400: "wave 0.6s ease-in-out infinite 400ms",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(-5px)" }, // 더 크게 위로 이동
          "50%": { transform: "translateY(5px)" }, // 더 크게 아래로 이동
        },
      },
    },
  },
  plugins: [],
};

export default config;
