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
    <div className="relative w-full h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#EDE0D4] to-100%"></div>

      <div className="relative flex flex-col items-start justify-center h-screen max-w-7xl text-[#5C4033] px-6 mx-auto space-y-5">
        <h3 className="  flex items-center gap-2 text-[#5C4033]">
          <FaSeedling className="text-xl" />
          Solusi Sehat dengan Harga Hemat
        </h3>
        <h1 className="text-5xl font-bold max-w-xl leading-tight">
          Anda Pegal? Order Pijat di Fresh Massage
        </h1>
        <p className="text-2xl font-md max-w-xl">
          Fresh Massage, layanan pijat dan spa online berpengalaman 4+ tahun,
          siap menghadirkan pijat profesional untuk kenyamanan Anda di hotel,
          rumah, kos, vila, dan apartemen.
        </p>
        <button className="px-6 py-3 mt-4 text-lg font-bold uppercase bg-[#A3B18A] text-white rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center gap-2 cursor-pointer hover:-rotate-3 hover:scale-105 active:scale-95">
          <FaWhatsapp className="text-2xl" /> CONTACT ME
        </button>
      </div>
    </div>
  );
}
