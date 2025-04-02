"use client";

import Header from "./components/Header/Header";
import "../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import Obec from "./components/Obec/Obec";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Obec />
      </main>
      <Footer />
    </div>
  );
}