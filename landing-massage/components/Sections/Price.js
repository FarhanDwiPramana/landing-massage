import React, { useState } from "react";
import { Sun, SunMedium, Moon } from "lucide-react";

export default function HargaLayanan() {
  const [selected, setSelected] = useState("pagi");

  const prices = {
    pagi: {
      label: "Pagi",
      icon: <Sun size={24} className="text-white" />,
      time: "08:00 AM",
      price: "Rp 50.000",
    },
    siang: {
      label: "Siang",
      icon: <SunMedium size={24} className="text-yellow-300" />,
      time: "12:00 PM",
      price: "Rp 70.000",
    },
    malam: {
      label: "Malam",
      icon: <Moon size={24} className="text-blue-100" />,
      time: "07:00 PM",
      price: "Rp 90.000",
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#A4B465] to-[#8AA05A] text-white font-[Poppins]">
      {/* Konten Utama */}
      <div className="flex flex-col items-center justify-center flex-grow px-6 py-12">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-white mb-10 text-center drop-shadow-lg">
          Harga Layanan
        </h2>

        {/* Container Utama */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
          {/* Tab Switcher */}
          <div className="flex md:flex-col bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-6 w-full md:w-32 items-center gap-4 shadow-lg">
            {Object.keys(prices).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold w-full transition-all duration-300 ease-in-out shadow-sm ${
                  selected === key
                    ? "bg-white text-[#A4B465]"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {prices[key].icon} {prices[key].label}
              </button>
            ))}
          </div>

          {/* Card Harga */}
          <div className="bg-white text-[#626F44] border border-white/30 rounded-3xl p-10 w-full max-w-md text-center shadow-2xl hover:shadow-3xl transition-transform duration-500 hover:scale-[1.03]">
            {/* Icon Bulat */}
            <div className="w-16 h-16 flex items-center justify-center bg-[#A4B465]/20 rounded-full mx-auto">
              {prices[selected].icon}
            </div>

            <h3 className="text-2xl font-bold mt-5">{prices[selected].label}</h3>

            <p className="text-gray-500 text-base mt-2">
              ⏰ {prices[selected].time}
            </p>
            <p className="text-[#A4B465] font-extrabold text-3xl mt-4">
              💰 {prices[selected].price}
            </p>

            {/* Tombol Booking */}
            <button className="mt-6 bg-[#A4B465] text-white px-6 py-3 rounded-full w-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-[#8DA457] hover:shadow-lg">
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Footer WhatsApp */}
      <div className="w-full py-6 bg-[#626F44] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-20 text-center md:text-left">
        <p className="text-lg md:text-xl font-semibold">
          Tunggu Apa Lagi? Booking Sekarang Juga!
        </p>

        <a
          href="https://wa.me/6282142784477"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 md:mt-0 bg-white border-2 border-white text-[#626F44] font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-[#A4B465] hover:text-white shadow-md"
        >
          Order via WhatsApp <span>➜</span>
        </a>
      </div>
    </div>
  );
}
