/* 로고 종류 */
export interface LogoVariation {
  src: string;
  alt: string;
  title: string;
}

export const logoVariations: LogoVariation[] = [
  { src: "/mediv-logo.png", alt: "MEDIV logo", title: "Standard" },
  {
    src: "/mediv-logo-co.png",
    alt: "MEDIV logo vertical",
    title: "Vertical Korean",
  },
  {
    src: "/mediv-logo-co2.png",
    alt: "MEDIV logo horizontal",
    title: "Horizontal Korean",
  },
];

export const grayVersion: LogoVariation = {
  src: "/mediv-logo-gray.png",
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
