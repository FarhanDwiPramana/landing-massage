import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />

      {/* Tombol WhatsApp di kanan bawah */}
      <a
        href="https://wa.me/6287758455356"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all duration-300"
      >
        <FaWhatsapp className="text-green-500 text-2xl" />
        <span className="font-semibold">Pesan Sekarang</span>
      </a>
    </div>
  );
}
