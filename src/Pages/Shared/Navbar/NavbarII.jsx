import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // For dropdown arrow icon

const NavbarII = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dynamic menu data
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    {
      name: "Brands",
      subItems: [
        { name: "Nike", link: "/brands/nike" },
        { name: "Adidas", link: "/brands/adidas" },
        { name: "Puma", link: "/brands/puma" },
      ],
    },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // Toggle Submenu Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-indigo-600">
              MyEcommerce
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {/* If item has subItems, render dropdown */}
                {item.subItems ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center text-gray-800 hover:text-indigo-600 transition"
                    >
                      {item.name}
                      <ChevronDownIcon className="w-5 h-5 ml-1" />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-48">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.link}
                    className="text-gray-800 hover:text-indigo-600 transition"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 hover:text-indigo-600 focus:outline-none"
              onClick={toggleDropdown}
            >
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
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isDropdownOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b">
              {/* If item has subItems */}
              {item.subItems ? (
                <>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {item.name}
                  </button>
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </>
              ) : (
                <a
                  href={item.link}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarII;
