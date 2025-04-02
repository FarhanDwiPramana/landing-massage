import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const data = {
    menu_nav: [
      { id: 1, title: "Home", href: "home" },
      { id: 2, title: "About Us", href: "aboutUs" },
      { id: 3, title: "Service", href: "service" },
      { id: 4, title: "Contact", href: "contact" },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  return (
    <header className="w-full bg-[#EDE0D4] shadow-md fixed z-10">
      <div className="max-w-7xl mx-auto container flex items-center justify-between px-6 py-4 ">
        <a className="text-gray-900 font-bold text-lg">FRESHMASSAGE</a>

        <div className="hidden md:flex items-center space-x-6 flex-grow justify-end">
          <nav className="flex space-x-6">
            {data.menu_nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.href);
                }}
                className={`font-medium relative after:block after:h-[2px] after:bg-[#5C4033] after:transition-all after:duration-300 ${
                  activeNav === item.href
                    ? "text-[#5C4033] after:w-full"
                    : "text-[#7F5539] hover:text-[#5C4033] after:w-0 hover:after:w-full"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <button className="px-4 py-2 text-xs font-bold uppercase bg-[#A3B18A] text-[#4A4A4A] rounded shadow hover:bg-[#C3A995] hover:text-[#5C4033] transition">
            CONTACT ME
          </button>
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <button className="px-4 py-2 text-xs font-bold uppercase bg-[#A3B18A] text-[#4A4A4A] rounded shadow hover:bg-[#C3A995] hover:text-[#5C4033] transition">
            CONTACT ME
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#7F5539] text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-full bg-[#EDE0D4] border border-gray-300 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {data.menu_nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.href);
                  setIsOpen(false);
                }}
                className={`font-medium relative after:block after:h-[2px] after:bg-[#5C4033] after:transition-all after:duration-300 ${
                  activeNav === item.href
                    ? "text-[#5C4033] after:w-full"
                    : "text-[#7F5539] hover:text-[#5C4033] after:w-0 hover:after:w-full"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
