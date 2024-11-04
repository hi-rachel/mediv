export type MenuItem = {
  id: string;
  label: string;
  href: string;
  subItems?: { id: string; label: string; href: string }[];
};
