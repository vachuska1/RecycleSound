// src/components/Obcan/Obcan.tsx
import React from "react";
import styles from "./Obcan.module.css"; // Importuj CSS soubor, pokud potřebuješ vlastní styly

const Obcan: React.FC = () => {
  return (
    <div>
        <div className={styles.emptySection}></div>  {/* Tato sekce má 150px výšku */}
    
    <section className={styles.obcanSection}>
      <h2>Občan</h2>
      <p>
        Tato sekce obsahuje informace pro občany. Může zde být popis služeb,
        nástrojů nebo informací zaměřených na potřeby občanů.
      </p>
      {/* Přidej další obsah, jak potřebuješ */}
    </section>
    </div>
  );
};

export default Obcan;
