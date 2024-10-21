// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // 공통 primary 색상
//         primary: "#3F6CFD",
//         secondary: "#4ECDC4",
//         success: "#4CAF50",
//         info: "#00BCD4",
//         warning: "#FFC107",
//         danger: "#F44336",
//         // 라이트 모드 색상
//         lightBackground: "#F7F9FC",
//         lightSurface: "#FFFFFF",
//         lightText: "#212121",
//         lightMuted: "#9E9E9E",
//         // 다크 모드 색상
//         darkBackground: "#1F2937",
//         darkSurface: "#374151",
//         darkText: "#E0E0E0",
//         darkMuted: "#757575",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "#1A3A5A", // Navy blue
//           light: "#457B9D",
//           dark: "#0D2B4B",
//         },
//         secondary: {
//           DEFAULT: "#2A9D8F", // Teal
//           light: "#4ECDC4",
//           dark: "#1F7268",
//         },
//         accent: "#E63946", // Red
//         success: "#4CAF50", // Green
//         warning: "#FFC107", // Amber
//         error: "#F44336", // Red
//         info: "#2196F3", // Blue
//         neutral: {
//           DEFAULT: "#F1FAEE", // Light gray
//           dark: "#457B9D", // Dark gray
//         },
//         white: "#FFFFFF",
//       },
//     },
//   },
//   plugins: [],
// };

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
          DEFAULT: "#32ACB3", // 청록색 (활동적, 현대적)
          light: "#8AE1C1", // 밝은 민트 (보조용 포인트)
          dark: "#0F5C4E", // 짙은 청록 (강조 색상)
        },
        accent: "#D94157", // 빨강 (포인트 색상, 콜투액션 버튼)
        success: "#4CAF50", // 녹색 (성공 메시지)
        warning: "#F4A261", // 주황색 (경고 메시지)
        error: "#D62828", // 진한 빨강 (에러 메시지)
        info: "#1D4ED8", // 파란색 (정보 강조)
        neutral: {
          DEFAULT: "#F1FAEE", // 연한 회색 (메인 배경)
          dark: "#1F2937", // 짙은 회색 (텍스트, 디테일)
        },
      },
    },
  },
  plugins: [],
};

export default config;
