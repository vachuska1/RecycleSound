"use client";

import React from "react";
import Link from "next/link"; // Importujeme Link z next/router
import styles from "./Header.module.css"; // Importujeme CSS modul

interface HeaderProps {
  setActiveSection: (section: string) => void; // Definujeme typ pro prop
  activeSection: string; // Přidáme activeSection pro sledování aktivní sekce
}

const Header: React.FC<HeaderProps> = ({ setActiveSection, activeSection }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>RECYCLESOUND</h1>
        <nav className={styles.nav}>
          <ul>
            <li onClick={() => setActiveSection("Obec")}>
              <Link href="/#obec" className={activeSection === "Obec" ? styles.activeMenuItem : ""}>
                Obec
              </Link>
            </li>
            <li onClick={() => setActiveSection("Obcan")}>
              <Link href="/#obcan" className={activeSection === "Obcan" ? styles.activeMenuItem : ""}>
                Občan
              </Link>
            </li>
            <li onClick={() => setActiveSection("Firma")}>
              <Link href="/#firma" className={activeSection === "Firma" ? styles.activeMenuItem : ""}>
                Firma
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

