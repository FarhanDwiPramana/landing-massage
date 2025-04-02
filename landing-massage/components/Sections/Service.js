import Image from "next/image";
import React from "react";

export default function Service() {
  const features = [
    {
      icon: "/icons/service1.png",
      title: "Melayani dengan Tulus",
      description: "Profesional kenyamanan adalah prioritas kami.",
    },
    {
      icon: "/icons/service2.png",
      title: "Bebas Biaya Transport",
      description: "Layanan tanpa biaya transport langsung ke lokasi Anda.",
    },
    {
      icon: "/icons/service3.png",
      title: "Buka 24 Jam",
      description: "Tersedia kapan saja sesuai kebutuhan Anda.",
    },
    {
      icon: "/icons/service4.png",
      title: "Pesan Mudah",
      description: "Pesan layanan pijat dengan cepat melalui WhatsApp.",
    },
  ];

  const service = [
    {
      icon: "/icons/service",
      title: "Body Massage",
      description:
        "Manfaat Body Massage sangat banyak untuk mengembalikan tubuh menjadi bugar dan sehat kembali karena dengan memilih menu ini badan anda akan terasa rileks.",
    },
    {
      icon: "/icons/service",
      title: "Pijat Refleksi",
      description:
        "Nunc Manfaat dari Pijat Refleksi atau sering juga di sebut Reflexology ini memberikan jutaan manfaat untuk mecegah dan memperbaiki organ bagian dalam.",
    },
    {
      icon: "/icons/service",
      title: "Totok Wajah",
      description:
        "Manfaat yang didapat jika anda melakukan Totok Wajah dengan rutin maka fikiran dan rasa penat yang anda rasakan sebelumnya akan terasa hilang setelah di pijat.",
    },
    {
      icon: "/icons/service",
      title: "Pijat Tradisional",
      description:
        "Untuk manfaat Pijat Tradisional hampir sama dengan menu layanan Body Massage karena metode pemijatanya memang sama persis.",
    },
    {
      icon: "/icons/service",
      title: "Pijat Kerokan",
      description:
        "Manfaat Pijat Kerokan yaitu untuk mengeluarkan angin yang berada di dalam tubuh anda, pijat (masuk angin) sangat manjur untuk mengusir angin dalam tubuh.",
    },
    {
      icon: "/icons/service",
      title: "Scrub & Lulur",
      description:
        "Banyak sekali manfaat Scrub dan Lulur ini untuk mengangkat sel sel kulit mati dan memberikan nutrisi dan vitamin pada kulit agar tetap cerah dan sehat.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white">
      <div className="relative -mt-1">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 250"
        >
          <path
            fill="#EDE0D4"
            fillOpacity="1"
            d="M0,32L48,48C96,64,192,96,288,133.3C384,171,480,213,576,218.7C672,224,768,192,864,154.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="py-12 px-6 -mt-90 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#5C4033] rounded-lg p-6 text-center shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" py-24">
        <h1 className="text-4xl text-center font-bold text-black">
          Layanan Kami
        </h1>
        <h2 className="text-xl text-center mt-6 ">
          Silakan pilih menu di bawah ini sesuai dengan kebutuhan Anda
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4">
          {service.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={`${item.icon}.png`}
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
