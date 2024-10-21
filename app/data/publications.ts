interface Publication {
  category: string;
  title: string;
  author: string;
  publication?: string;
  patentNumber?: string;
  href: string;
}

const publications: Publication[] = [
  {
    category: "AI",
    title:
      "Prognostic prediction of sepsis patient using transformer with skip connected token for tabular data",
    author: "Jee-Woo Choi et al.",
    publication: "Artificial Intelligence in Medicine (IF 7.5)",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S0933365724000460",
  },
];

export default publications;
