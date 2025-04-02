"use client";

import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Přizpůsobte výšce vašeho headeru
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>RECYCLESOUND</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <button onClick={() => scrollToSection("chytré-kontejnery")}>
                Chytré kontejnery
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("mobilní-kontejnery")}>
                Mobilní kontejnery
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("hlásiče")}>
                Hlásiče
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;