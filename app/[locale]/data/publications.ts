interface Publication {
  tag: string[];
  title: string;
  author: string[];
  publication?: string;
  patentNumber?: string;
  href: string;
  year: number;
  month: number;
}

const publications: Publication[] = [
  {
    tag: ["AI"],
    title:
      "Prognostic prediction of sepsis patient using transformer with skip connected token for tabular data",
    author: ["Jee-Woo Choi"],
    publication: "Artificial Intelligence in Medicine (IF 7.5)",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S0933365724000460",
    year: 2024,
    month: 3,
  },
];

export default publications;
