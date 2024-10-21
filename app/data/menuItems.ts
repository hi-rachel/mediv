export const labels = {
  about: "ABOUT",
  business: "BUSINESS",
  research: "RESEARCH",
  contact: "CONTACT",
  vision: "비전",
  history: "연혁",
  organization: "조직도",
  ci: "CI",
  projects: "수행 사업",
  awards: "수상/인증",
  publications: "논문",
  patents: "특허",
};

const menuItems = [
  {
    id: "about",
    label: labels.about,
    href: "/about",
    subItems: [
      { id: "vision", label: labels.vision, href: "/about/?tab=vision" },
      { id: "history", label: labels.history, href: "/about/?tab=history" },
      {
        id: "organization",
        label: labels.organization,
        href: "/about/?tab=organization",
      },
      { id: "ci", label: labels.ci, href: "/about/?tab=ci" },
    ],
  },
  {
    id: "business",
    label: labels.business,
    href: "/business",
    subItems: [
      {
        id: "projects",
        label: labels.projects,
        href: "/business/?tab=projects",
      },
      { id: "awards", label: labels.awards, href: "/business/?tab=awards" },
    ],
  },
  {
    id: "research",
    label: labels.research,
    href: "/research",
    subItems: [
      {
        id: "publications",
        label: labels.publications,
        href: "/research/?tab=publications",
      },
      { id: "patents", label: labels.patents, href: "/research/?tab=patents" },
    ],
  },
  { id: "contact", label: labels.contact, href: "/contact" },
];

export default menuItems;
