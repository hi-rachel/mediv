const menuItems = [
  {
    name: "About",
    href: "/about",
    subItems: [
      { name: "비전", href: "/about/?tab=vision" },
      { name: "연혁", href: "/about/?tab=history" },
      { name: "조직도", href: "/about/?tab=organization" },
      { name: "CI", href: "/about/?tab=ci" },
    ],
  },
  {
    name: "Business",
    href: "/business",
    subItems: [
      { name: "수행 사업", href: "/business/?tab=record" },
      { name: "수상/인증", href: "/business/?tab=awards" },
    ],
  },
  {
    name: "Research",
    href: "/research",
    subItems: [
      { name: "논문", href: "/research/?tab=publications" },
      { name: "특허", href: "/research/?tab=patents" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default menuItems;
