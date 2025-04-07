import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/Main/logo-head.jpg" />
        <title> Pijat Area Malang Batu </title>
        <meta
          name="description"
          content="Temukan layanan pijat profesional di Batu dengan harga terjangkau dan terapis berpengalaman. Booking online sekarang!"
        ></meta>
        <meta
          name="keywords"
          content="pijat di Batu, pijat Batu, terapis pijat, layanan pijat Batu, pijat di malang, pijat panggilan malang, pijat refleksi malang, pijat terdekat, tempat pijat di malang, pijat malang"
        />
        <meta
          property="og:title"
          content="Pijat di Batu - Layanan Pijat Profesional"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
