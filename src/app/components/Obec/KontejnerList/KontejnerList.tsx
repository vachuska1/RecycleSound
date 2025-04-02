import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import styles from "./KontejnerList.module.css";

const KontejnerList: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className={styles.contentWrapper}>
      {/* Nadpis a podnadpis - základní zobrazení bez animací */}
      <div className={styles.textContent}>
        <h2 className={styles.mainTitle}>Chytré kontejnery</h2>
        <p className={styles.subtitle}>
          Snížení nákladů, zvýšení efektivity a motivace k lepšímu třídění
        </p>
      </div>

      {/* Slider s obrázky - zachováno původní chování */}
      <div className={styles.carouselContainer}>
      <Slider {...settings}>
          <div>
            <motion.img
              src="/images/bio.webp"
              alt="Kontejner 1"
              className={styles.kontejnerImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/papir.webp"
              alt="Kontejner 2"
              className={styles.kontejnerImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/plast.webp"
              alt="Kontejner 3"
              className={styles.kontejnerImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/sklo.webp"
              alt="Kontejner 4"
              className={styles.kontejnerImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/smiseny.webp"
              alt="Kontejner 5"
              className={styles.kontejnerImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </Slider>
      </div>

      {/* Seznam výhod - statický obsah */}
      <ul className={styles.featureList}>
        <li>Automatické vážení – váží přesné množství odpadu</li>
        <li>Chytré hlášení – samy žádají o vývoz, když jsou plné</li>
        <li>Transparentní evidence – evidují odpady konkrétních původců</li>
        <li>Spravedlivé platby – platíte jen za skutečně vyprodukovaný odpad</li>
        <li>Motivace k třídění – bonusové programy a odměny</li>
        <li>Zábavná osvěta – interaktivní hlásiče pro efektivní třídění</li>
      </ul>

      {/* Závěrečný text */}
      <p className={styles.subtitle}>
        Chytré kontejnery – revoluční řešení pro nakládání s odpady pro moderní obce a firmy
      </p>
    </div>
  );
};

export default KontejnerList;