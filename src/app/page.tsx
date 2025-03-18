"use client";

import Header from "./components/Header/Header";
import "../app/globals.css";
import Footer from "./components/Footer/Footer";
import Obec from "./components/Obec/Obec";
import Obcan from "./components/Obcan/Obcan";
import Firma from "./components/Firma/Firma";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Obec"); // Počáteční sekce je 'obec'
  
  return (
    <div>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} /> {/* Předáme stav aktivní sekce */}
      <main>
        {activeSection === "Obec" && <Obec />}
        {activeSection === "Obcan" && <Obcan />}
        {activeSection === "Firma" && <Firma />}
      </main>
      <Footer />
    </div>
  );
}
