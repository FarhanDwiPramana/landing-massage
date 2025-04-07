// pages/_app.js
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });

    // Penting untuk refresh setelah semua asset dimuat
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
