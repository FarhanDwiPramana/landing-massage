import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Service from "@/components/Sections/Service";
import Main from "@/components/Sections/Main";
import Contact from "@/components/Sections/Contact";
import Price from "@/components/Sections/Price";

export default function Home() {
  return (
    <div>
      <Main />
      <Service />
      <Price />
    </div>
  );
}
