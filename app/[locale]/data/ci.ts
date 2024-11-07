/* 로고 종류 */
export interface LogoVariation {
  src: string;
  alt: string;
  title: string;
}

export const logoVariations: LogoVariation[] = [
  { src: "/images/logo/mediv-logo.webp", alt: "MEDIV logo", title: "Standard" },
  {
    src: "/images/logo/mediv-logo-co.webp",
    alt: "MEDIV logo vertical",
    title: "Vertical Korean",
  },
  {
    src: "/images/logo/mediv-logo-co2.webp",
    alt: "MEDIV logo horizontal",
    title: "Horizontal Korean",
  },
];

export const grayVersion: LogoVariation = {
  src: "/images/logo/mediv-logo-gray.webp",
  alt: "MEDIV logo gray",
  title: "Gray Version",
};

/* 주요 컬러 팔레트 */
export interface ColorPalette {
  name: string;
  color: string;
}

export const colorPalette: ColorPalette[] = [
  { name: "Primary", color: "#262F57" },
  { name: "Secondary", color: "#32ACB3" },
  { name: "Accent", color: "#D94157" },
  { name: "Gray", color: "#C6CACE" },
];
