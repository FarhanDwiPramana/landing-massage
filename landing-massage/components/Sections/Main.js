import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSeedling, FaWhatsapp } from "react-icons/fa";

const images = [
  "/images/Main/1.jpg",
  "/images/Main/2.jpg",
  "/images/Main/3.jpg",
];

export default function Main() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#DDEEB1]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay Gradasi Hijau */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A3B18A]/70 to-[#DDEEB1]/90"></div>

      {/* Konten */}
      <div className="relative flex flex-col items-start justify-center h-screen max-w-7xl 
                      px-10 md:px-16 lg:px-24 mx-auto space-y-6 text-left mt-20 md:mt-32 lg:mt-40">
        <h3 className="flex items-center gap-2 text-lg text-white font-semibold tracking-wide">
          <FaSeedling className="text-2xl text-[#4B6025]" />
          Solusi Sehat dengan Harga Hemat
        </h3>

        <h1 className="text-5xl md:text-6xl font-bold max-w-xl leading-tight text-white drop-shadow-md">
          Anda <span className="text-[#4B6025]">Pegal?</span> Order Pijat di <br />
          <span className="text-[#4B6025]">Fresh Massage</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium max-w-xl text-white drop-shadow-md">
          Fresh Massage, layanan pijat dan spa online berpengalaman 4+ tahun,
          siap menghadirkan pijat profesional untuk kenyamanan Anda di hotel,
          rumah, kos, vila, dan apartemen.
        </p>

        {/* Tombol WA */}
        <button className="px-6 py-3 mt-6 text-lg md:text-xl font-bold uppercase bg-[#4B6025] text-white rounded-lg shadow-lg 
                           transition-all duration-300 ease-in-out flex items-center gap-3 cursor-pointer 
                           hover:bg-[#3A4E1D] hover:-translate-y-1 active:scale-95">
          <FaWhatsapp className="text-2xl" /> Booking Sekarang
        </button>
      </div>
    </div>
  );
}
