import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const data = {
    menu_nav: [
      { id: 1, title: "Home", href: "#home" },
      { id: 2, title: "About Us", href: "#aboutUs" },
      { id: 3, title: "Services", href: "#services" },
      { id: 4, title: "Contacts", href: "#contacts" },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed w-full bg-white shadow-md z-50 top-0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="w-17 h-17 bg-[#F8FFD9] flex items-center justify-center rounded-full shadow-md overflow-hidden">
          <img
            src="/images/Main/logo.png" 
            alt="Logo FRESH"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-black text-base">
          {data.menu_nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav(item.href);
              }}
              className={`relative pb-1 after:block after:h-[2px] after:bg-green-700 after:transition-all after:duration-300 ${
                activeNav === item.href
                  ? "text-green-700 after:w-full"
                  : "text-black hover:text-green-700 after:w-0 hover:after:w-full"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <button className="hidden md:block px-5 py-2 bg-[#A0C878] text-white text-sm font-bold rounded-full shadow-md hover:bg-green-600 transition">
          Hubungi Kami
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-black focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full w-full bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-96 py-3" : "max-h-0 overflow-hidden"
        } md:hidden`}
      >
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
              className={`text-black text-lg font-medium w-full text-center py-2 transition-all ${
                activeNav === item.href ? "text-green-700 bg-gray-100" : "hover:text-green-700 hover:bg-gray-50"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}