import React from "react";
import styles from "./Obec.module.css"; // Importuj CSS soubor

const Obec: React.FC = () => {
  return (
    <div>
      {/* Přidání prázdné sekce pro zajištění 150px mezery nahoře */}
      <div className={styles.emptySection}></div>

      {/* První obrázek */}
      <div className={styles.imageContainer}>
        <img 
          src="/images/Animate.png" 
          alt="Animace 1" 
          className={styles.image} 
        />
      </div>

      {/* Druhý obrázek */}
      <div className={styles.imageContainer}>
        <img 
          src="/images/Animate2.png" 
          alt="Animace 2" 
          className={styles.image} 
        />
      </div>

      <section className={styles.obecSection}>
        <h2>Obec</h2>
        <p>
          Tato sekce obsahuje informace pro obce. Může zde být popis služeb,
          nástrojů nebo informací zaměřených na potřeby obcí.
        </p>
      </section>
    </div>
  );
};

export default Obec;
