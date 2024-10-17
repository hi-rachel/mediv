"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import menuItems from "../data/menuItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/mediv-logo.png"
              alt="Mediv Logo"
              width={60}
              height={60}
            />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-primary"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white border border-gray-300 rounded-md"
            >
              <option value="en">EN</option>
              <option value="ko">KO</option>
            </select>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-primary"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
                {item.subItems &&
                  item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block py-2 pl-4 text-sm text-gray-600 hover:text-primary"
                      onClick={toggleMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
