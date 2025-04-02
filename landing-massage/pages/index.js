import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Main from "@/components/Sections/Main";
import AboutUs from "@/components/Sections/AboutUs";
import Service from "@/components/Sections/Service";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <div>
      <Main />
      <Service />
    </div>
  );
}
