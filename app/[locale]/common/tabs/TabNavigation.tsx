"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MenuItem } from "@/types/menu";

interface TabNavigationProps {
  locale: string;
  basePath: string;
  menuItems: MenuItem[];
}

const TabNavigation = ({ locale, basePath, menuItems }: TabNavigationProps) => {
  const pathname = usePathname();

  return (
    <div className="flex border-b border-gray-300">
      {menuItems.map((tab) => {
        const isActive = pathname.includes(`/${basePath}/${tab.id}`);

        return (
          <Link
            key={tab.id}
            href={`/${locale}/${basePath}/${tab.id}`}
            className={`cursor-pointer py-4 md:text-lg text-sm px-4 md:px-6 font-semibold text-center border-b-4 transition-colors duration-300 ${
              isActive
                ? "border-info text-info bg-gray-50"
                : "border-transparent text-gray-600 hover:text-info"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default TabNavigation;
