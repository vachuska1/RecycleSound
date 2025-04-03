import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import styles from "./MobilKontejnerList.module.css";

const MobilKontejnerList: React.FC = () => {
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
        <h2 className={styles.mainTitle}>Mobilní kontejnery</h2>
        <p className={styles.subtitle}>
          Maximální flexibilita v odpadovém hospodářství
        </p>
      </div>

      {/* Slider s obrázky - zachováno původní chování */}
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          <div>
            <motion.img
              src="/images/Mobil2.jpg"
              alt="Mobilní kontejner 1"
              className={styles.kontejnerImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/Mobil_background.jpg"
              alt="Mobilní kontejner 2"
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
        <li>Mobilita – umožňuje flexibilní a operativní umístění mobilních kontejnerů podle potřeby</li>
        <li>Umožňuje vážení – váží množství předaného odpadu</li>
        <li>Umožňuje evidenci – evidují odpady konkrétních původců</li>
        <li>Vlastní svoz – umožňují obcím a firmám vlastní svoz odpadů dostupnými prostředky, nezávisle na svozových společnostech</li>
        <li>Motivace k třídění – umožňují zavádět motivační bonusové programy a odměňování za správné třídění</li>
        <li>Zábavná osvěta – zabudované interaktivní hlásiče učí občany, jak třídit efektivně a s úsměvem</li>
      </ul>

      {/* Závěrečný text */}
      <p className={styles.subtitle}>
        Mobilní kontejnery – flexibilní řešení pro nakládání s odpady pro moderní obce a firmy
      </p>
    </div>
  );
};

export default MobilKontejnerList;