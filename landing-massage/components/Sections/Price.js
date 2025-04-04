import React, { useState } from "react";

export default function HargaLayanan() {
  const [selected, setSelected] = useState("pagi");

  const prices = {
    pagi: {
      label: "Pagi",
      icon: "🌞",
      time: "08:00 AM",
      price: "Rp 50.000",
    },
    siang: {
      label: "Siang",
      icon: "☀️",
      time: "12:00 PM",
      price: "Rp 70.000",
    },
    malam: {
      label: "Malam",
      icon: "🌙",
      time: "07:00 PM",
      price: "Rp 90.000",
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#EDE0D4]">
      {/* Konten Utama */}
      <div className="flex flex-col items-center justify-center -mt-10 flex-grow px-4">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-black mb-8">Harga Layanan</h2>

        {/* Container Utama */}
        <div className="flex items-center gap-10">
          {/* Tab Switcher */}
          <div className="flex flex-col bg-white rounded-4xl p-1 w-18 h-64 items-center gap-4 shadow-md">
            {Object.keys(prices).map((key) => (
              <button
                key={key}
                className={`px-3 py-1 rounded-full text-sm text-center mt-8 w-full ${
                  selected === key
                    ? "bg-[#5C4033] text-white"
                    : "text-black cursor-pointer"
                }`}
                onClick={() => setSelected(key)}
              >
                {prices[key].label}
              </button>
            ))}
          </div>

          {/* Card Harga */}
          <div className="bg-white border-2 border-gray-500/50 rounded-xl p-6 w-xl text-center shadow-md">
            {/* Icon Bulat */}
            <div className="w-14 h-14 bg-gray-400 rounded-full mx-auto"></div>

            <h3 className="text-lg font-semibold mt-4 text-black">
              {prices[selected].label}
            </h3>

            {/* Detail Waktu & Harga */}
            <p className="text-gray-700 text-sm mt-1">
              ⏰ {prices[selected].time}
            </p>
            <p className="text-gray-900 font-semibold mt-1">
              💰 {prices[selected].price}
            </p>

            {/* Tombol Booking */}
            <button className="mt-4 bg-[#5C4033] text-white px-4 py-2 rounded-full w-full hover:bg-[#EDE0D4] hover:text-black cursor-pointer">
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Footer WhatsApp  */}
      <div className="w-full h-30  bottom-0 left-0 right-0 bg-[#5C4033] text-white flex justify-between items-center px-72">
        {/* Tulisan di kiri */}
        <p className="text-xl font-semibold">Tunggu Apalagi? Order Sekarang!</p>

        {/* Tombol di kanan */}
        <a
          href="https://wa.me/6282142784477"
          className="bg-white  border-2 border-white text-[#5C4033] font-bold py-2 px-4 rounded-full transition-all flex items-center gap-2 hover:bg-[#5C4033] hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order melalui WhatsApp <span>➜</span>
        </a>
      </div>
    </div>
  );
}
