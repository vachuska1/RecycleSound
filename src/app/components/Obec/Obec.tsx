import React from "react";
import styles from "./Obec.module.css"; // Importuj CSS soubor

const Obec: React.FC = () => {
  return (
    <div>
      {/* Přidání prázdné sekce pro zajištění 150px mezery nahoře */}
      <div className={styles.emptySection}></div>

      {/* Přidání GIFu pod prázdnou sekci */}
      <div className={styles.gifContainer}>
        <img 
          src="/images/Animate2.gif" 
          alt="Animace"
          className={styles.gif} 
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
