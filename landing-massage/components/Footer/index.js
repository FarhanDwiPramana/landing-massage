import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EDE0D4] text-[#5C4033] py-10 w-full flex justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-start text-center md:text-left gap-8">
        {/* Kolom 1 - About Us */}
        <div className="w-auto flex flex-col items-center md:items-start max-w-xs">
          <h1 className="text-lg font-bold mb-3">About Us</h1>
          <p className="text-sm">
            Kami menyediakan layanan terbaik dengan harga terjangkau. Hubungi
            kami untuk informasi lebih lanjut.
          </p>
          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-gray-300 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300 text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Kolom 2 - Jam Operasional */}
        <div className="w-auto flex flex-col items-center md:items-start max-w-xs">
          <h1 className="text-lg font-bold mb-3">Jam Operasional</h1>
          <ul className="text-sm space-y-1">
            <li>Senin - Jumat: 08:00 - 20:00</li>
            <li>Sabtu: 09:00 - 18:00</li>
            <li>Minggu: Tutup</li>
          </ul>
        </div>

        {/* Kolom 3 - Kontak */}
        <div className="w-auto flex flex-col items-center md:items-start max-w-xs">
          <h1 className="text-lg font-bold mb-3">Hubungi Kami</h1>
          <ul className="text-sm space-y-1">
            <li>📍 Jalan Contoh No. 123, Kota ABC</li>
            <li>✉️ email@contoh.com</li>
            <li>📞 0812-3456-7890</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
