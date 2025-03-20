import React from "react";
import styles from "./Obec.module.css"; // Importuj CSS soubor

const Obec: React.FC = () => {
  return (
    <div>
      {/* Přidání prázdné sekce pro zajištění 150px mezery nahoře */}
      <div className={styles.emptySection}></div>

      {/* Přidání MP4 videa pod prázdnou sekci */}
      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        >
          <source src="/images/Animate.mp4" type="video/mp4" />
          Váš prohlížeč nepodporuje video tag.
        </video>
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
