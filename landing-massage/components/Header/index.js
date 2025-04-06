import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const data = {
    menu_nav: [
      { id: 1, title: "Beranda", href: "#beranda" },
      { id: 2, title: "Layanan", href: "#layanan" },
      { id: 3, title: "Harga", href: "#harga" },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#beranda");
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
    <header className="fixed w-full bg-white shadow-md z-50 top-0 transition-transform duration-300 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="w-17 h-17 bg-[#F8FFD9] flex items-center justify-center rounded-full shadow-md overflow-hidden">
          <Image
            src="/images/Main/logo.png"
            alt="Logo FRESH"
            width={200} // Wajib diisi
            height={100} // Wajib diisi
            className="w-full h-full object-cover"
          />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-black text-base">
          {data.menu_nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveNav(item.href)}
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
        <a
          href="https://wa.me/6282142784477"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 bg-[#A0C878] text-white text-sm font-bold rounded-full shadow-md hover:bg-green-600 transition"
        >
          Hubungi Kami
        </a>

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
              onClick={() => {
                setActiveNav(item.href);
                setIsOpen(false);
              }}
              className={`relative text-black text-lg font-medium w-full text-center py-2 transition-all after:block after:h-[2px] after:bg-green-700 after:transition-all after:duration-300 after:mx-auto ${
                activeNav === item.href
                  ? "text-green-700 after:w-full"
                  : "hover:text-green-700 hover:bg-gray-50 after:w-0 hover:after:w-full"
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
