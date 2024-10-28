"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Menu");
  const menuItems = [
    {
      id: "about",
      label: t("about"),
      href: "/about",
      subItems: [
        { id: "vision", label: t("vision"), href: "/about/?tab=vision" },
        { id: "history", label: t("history"), href: "/about/?tab=history" },
        {
          id: "organization",
          label: t("organization"),
          href: "/about/?tab=organization",
        },
        { id: "ci", label: t("ci"), href: "/about/?tab=ci" },
      ],
    },
    {
      id: "business",
      label: t("business"),
      href: "/business",
      subItems: [
        {
          id: "projects",
          label: t("projects"),
          href: "/business/?tab=projects",
        },
        { id: "awards", label: t("awards"), href: "/business/?tab=awards" },
      ],
    },
    {
      id: "research",
      label: t("research"),
      href: "/research",
      subItems: [
        {
          id: "publications",
          label: t("publications"),
          href: "/research/?tab=publications",
        },
        { id: "patents", label: t("patents"), href: "/research/?tab=patents" },
      ],
    },
    { id: "contact", label: t("contact"), href: "/contact" },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [language, setLanguage] = useState(
    pathname.startsWith("/ko") ? "ko" : "en"
  );

  const localizedMenuItems = menuItems.map((item) => ({
    ...item,
    label: t(item.id),
    subItems: item.subItems?.map((subItem) => ({
      ...subItem,
      label: t(subItem.id),
    })),
  }));

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".lang-selector")) {
        setIsLangMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNavigation = (href: string, subItems: { id: string }[]) => {
    if (subItems && subItems.length > 0) {
      router.push(`${href}?tab=${subItems[0].id}`);
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  const switchLanguage = (lang: string) => {
    const params = new URLSearchParams(window.location.search);
    const newPathname = pathname.replace(/^\/(en|ko)/, "");
    const queryParams = params.toString() ? `?${params.toString()}` : "";
    router.push(`/${lang}${newPathname}${queryParams}`);
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const isActive = (href: string) => {
    return pathname.startsWith(href)
      ? "border-b-4 border-primary text-primary"
      : "text-gray-600 hover:text-primary";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/mediv-logo.png"
              alt="Mediv Logo"
              width={60}
              height={60}
              className="w-auto h-10 sm:h-12"
            />
          </Link>

          <div className="ml-5 hidden md:flex items-center space-x-6 lg:space-x-12">
            {localizedMenuItems.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={
                    item.subItems && item.subItems.length > 0
                      ? `${item.href}?tab=${item.subItems[0].id}`
                      : item.href
                  }
                  className={`px-4 py-2 rounded-none text-sm font-bold focus:outline-none transition duration-150 ease-in-out ${isActive(
                    item.href
                  )}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && item.subItems.length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${item.href}?tab=${subItem.id}`}
                        className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition duration-150 ease-in-out"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center ml-8">
            <div className="relative lang-selector">
              <button
                onClick={toggleLangMenu}
                className="flex items-center space-x-2 px-4 py-2 rounded-none text-gray-600 hover:bg-gray-100 focus:outline-none"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </button>

              {isLangMenuOpen && (
                <div className="font-semibold absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => switchLanguage("en")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => switchLanguage("ko")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    한국어
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
          {localizedMenuItems.map((item) => (
            <div key={item.id} className="py-2">
              <button
                onClick={() => handleNavigation(item.href, item.subItems || [])}
                className={`block px-4 py-2 rounded-none text-base font-medium hover:text-primary focus:outline-none w-full text-left ${isActive(
                  item.href
                )}`}
              >
                {item.label}
              </button>
              {item.subItems && item.subItems.length > 0 && (
                <div className="pl-4 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`${item.href}?tab=${subItem.id}`}
                      className="block px-4 py-2 rounded-none text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:text-primary focus:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
