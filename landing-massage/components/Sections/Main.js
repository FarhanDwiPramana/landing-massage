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
    <div
      id="beranda"
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-[#DDEEB1]"
    >
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

      {/* Overlay Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A3B18A]/70 to-[#DDEEB1]/90"></div>

      {/* Konten */}
      <div className="relative flex flex-col items-start justify-center h-screen  max-w-7xl px-6 sm:px-10 md:px-16 lg:px-24 mx-auto space-y-6 text-left text-white mt-10">
        {/* Subjudul */}
        <h3
          className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold tracking-wide"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <FaSeedling className="text-xl sm:text-2xl text-[#4B6025]" />
          Solusi Sehat dengan Harga Hemat
        </h3>

        {/* Judul */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight drop-shadow-md"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Anda <span className="text-[#4B6025]">Pegal?</span> Order Pijat di{" "}
          <br />
          <span className="text-[#4B6025]">Fresh Massage</span>
        </h1>

        {/* Deskripsi */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Fresh Massage, layanan pijat dan spa online berpengalaman 4+ tahun,
          siap menghadirkan pijat profesional untuk kenyamanan Anda di hotel,
          rumah, kos, vila, dan apartemen.
        </p>

        {/* Tombol WA */}
        <a
          href="https://wa.me/6287758455356"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
          className="px-6 py-3 text-base sm:text-lg md:text-xl font-bold uppercase bg-[#4B6025] text-white rounded-lg shadow-lg 
          transition-all duration-300 ease-in-out flex items-center gap-3 cursor-pointer 
          hover:bg-[#3A4E1D] hover:-translate-y-1 active:scale-95"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" /> Booking Sekarang
        </a>
      </div>
    </div>
  );
}
