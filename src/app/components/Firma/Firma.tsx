// src/components/Firma/Firma.tsx
import React from "react";
import styles from "./Firma.module.css"; // Importuj CSS soubor, pokud potřebuješ vlastní styly

const Firma: React.FC = () => {
  return (
    <div>
        <div className={styles.emptySection}></div>  {/* Tato sekce má 150px výšku */}
    <section className={styles.firmaSection}>
      <h2>Firma</h2>
      <p>
        Tato sekce obsahuje informace pro firmy. Může zde být popis služeb,
        nástrojů nebo informací zaměřených na potřeby firem.
      </p>
      {/* Přidej další obsah, jak potřebuješ */}
    </section>
    </div>
  );
};

export default Firma;
