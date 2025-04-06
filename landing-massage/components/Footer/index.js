import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#F8F6F1] to-[#EDEAE0] text-[#444] py-12 w-full">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="false"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
      >
        {/* Kolom 1 - Tentang Kami */}
        <div>
          <h2 className="text-xl font-bold uppercase mb-4 tracking-wide text-[#626F44]">
            Tentang Kami
          </h2>
          <p className="text-sm leading-relaxed opacity-90">
            Kami memberikan layanan terbaik dengan harga terjangkau. Hubungi
            kami untuk informasi lebih lanjut.
          </p>
          {/* Social Media */}
          <div className="flex justify-center md:justify-start gap-3 mt-5">
            {[FaFacebook, FaInstagram, FaTwitter, FaWhatsapp].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#A4B465]/10 text-[#626F44] flex items-center justify-center hover:bg-[#A4B465]/20 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Kolom 2 - Jam Operasional */}
        <div>
          <h2 className="text-xl font-bold uppercase mb-4 tracking-wide text-[#626F44]">
            Jam Operasional
          </h2>
          <ul className="text-sm space-y-1 opacity-90">
            <li>Senin - Jumat: 08:00 - 20:00</li>
            <li>Sabtu: 09:00 - 18:00</li>
            <li className="opacity-70">Minggu: Tutup</li>
          </ul>
        </div>

        {/* Kolom 3 - Kontak */}
        <div>
          <h2 className="text-xl font-bold uppercase mb-4 tracking-wide text-[#626F44]">
            Hubungi Kami
          </h2>
          <ul className="text-sm space-y-2 opacity-90">
            <li>📍 Jalan Contoh No. 123, Kota ABC</li>
            <li>✉️ email@contoh.com</li>
            <li>📞 0812-3456-7890</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-[#ccc]/40 pt-6 text-center text-sm text-[#888]">
        &copy; {new Date().getFullYear()} TaraProject. All rights reserved.
      </div>
    </footer>
  );
}
