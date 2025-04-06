// components/Service.js
import Image from "next/image";
import React from "react";

export default function Service() {
  const features = [
    {
      icon: "/icons/service1.png",
      title: "Melayani dengan Tulus",
      description:
        "Profesionalisme & kenyamanan pelanggan adalah prioritas kami.",
    },
    {
      icon: "/icons/service2.png",
      title: "Bebas Biaya Transport",
      description: "Layanan pijat langsung ke lokasi tanpa biaya tambahan.",
    },
    {
      icon: "/icons/service3.png",
      title: "Buka 24 Jam",
      description: "Siap melayani kapan pun Anda butuhkan.",
    },
    {
      icon: "/icons/service4.png",
      title: "Pesan Mudah",
      description: "Booking layanan dengan cepat melalui WhatsApp.",
    },
  ];

  const services = [
    {
      icon: "/icons/service",
      title: "Body Massage",
      description: "Membantu tubuh rileks dan kembali bugar.",
    },
    {
      icon: "/icons/service",
      title: "Pijat Refleksi",
      description:
        "Meningkatkan kesehatan organ tubuh melalui pijatan refleksi.",
    },
    {
      icon: "/icons/service",
      title: "Totok Wajah",
      description: "Menghilangkan stres & memberikan efek segar pada wajah.",
    },
    {
      icon: "/icons/service",
      title: "Pijat Tradisional",
      description: "Metode klasik untuk mengurangi ketegangan otot.",
    },
    {
      icon: "/icons/service",
      title: "Pijat Kerokan",
      description: "Membantu mengeluarkan angin dari tubuh.",
    },
    {
      icon: "/icons/service",
      title: "Scrub & Lulur",
      description: "Membantu regenerasi kulit agar tetap cerah & sehat.",
    },
  ];

  return (
    <div id="layanan" className="relative w-full py-8 bg-transparent">
      {/* Spacer tambahan untuk scroll ke atas */}
      <div className="h-32" />

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-[#626F47] rounded-lg p-4 text-center shadow-md text-white
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-center mb-3">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <h3 className="font-semibold text-sm">{feature.title}</h3>
              <p className="text-xs text-[#DCE5B4]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1
            className="text-3xl text-center font-bold text-[#626F47]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="false"
          >
            Layanan Kami
          </h1>
          <h2
            className="text-base md:text-lg text-center mt-2 text-[#A4B465]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="false"
          >
            Pilih layanan sesuai dengan kebutuhan Anda
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {services.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="p-4 bg-white border border-[#A4B465] rounded-lg shadow-sm
                           hover:shadow-md transition-all duration-300 text-gray-700"
              >
                <div className="flex justify-center mb-3">
                  <Image
                    src={`${item.icon}.png`}
                    alt={item.title}
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <h3 className="font-semibold text-sm text-[#626F47]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A4B465]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer bawah */}
      <div className="h-32" />
    </div>
  );
}
