const menuItems = [
  {
    name: "About",
    href: "/about",
    subItems: [
      { name: "비전", href: "/about/vision" },
      { name: "연혁", href: "/about/history" },
      { name: "조직도", href: "/about/organization" },
    ],
  },
  {
    name: "Business",
    href: "/business",
    subItems: [
      { name: "수행 사업", href: "/business/record" },
      { name: "수상/인증", href: "/business/awards" },
    ],
  },
  {
    name: "Research",
    href: "/research",
    subItems: [
      { name: "논문", href: "/research/publications" },
      { name: "특허", href: "/research/patents" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default menuItems;
