import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AboutUs from "@/components/Sections/aboutUs";
import Contact from "@/components/Sections/contact";
import Service from "@/components/Sections/service";
import Main from "@/components/Sections/Main";

export default function Home() {
  return (
    <div>
      <Main />
      <AboutUs />
      <Contact />
      <Service />
    </div>
  );
}
