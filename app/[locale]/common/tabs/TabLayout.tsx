import { getTranslations } from "next-intl/server";
import TabNavigation from "./TabNavigation";
import { MenuItem } from "@/types/menu";

interface TabLayoutProps {
  children: React.ReactNode;
  params: { locale: string; basePath: string };
}

export default async function TabLayout({
  children,
  params: { locale, basePath },
}: TabLayoutProps) {
  const t = await getTranslations("MenuItems");
  const menuItems = t.raw("list") as MenuItem[];
  const currentMenu = menuItems.find((item) => item.id === basePath);
  const subItems = currentMenu?.subItems || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <TabNavigation
          locale={locale}
          basePath={basePath}
          menuItems={subItems}
        />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
