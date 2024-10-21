"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import menuItems from "../data/menuItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (
    href: string,
    subItems?: { id: string; label: string }[]
  ) => {
    if (subItems && subItems.length > 0) {
      router.push(`${href}?tab=${subItems[0].id}`);
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
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

          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => handleNavigation(item.href, item.subItems)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:text-primary focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  {item.label}
                </button>
                {item.subItems && item.subItems.length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={`${item.href}?tab=${subItem.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition duration-150 ease-in-out"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white border border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="en">EN</option>
              <option value="ko">KO</option>
            </select>
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
          {menuItems.map((item) => (
            <div key={item.id} className="py-2">
              <button
                onClick={() => handleNavigation(item.href, item.subItems)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:text-primary focus:bg-gray-100 w-full text-left"
              >
                {item.label}
              </button>
              {item.subItems && item.subItems.length > 0 && (
                <div className="pl-4 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`${item.href}?tab=${subItem.id}`}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:text-primary focus:bg-gray-100"
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
