import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import styles from "./HlasicList.module.css";

const HlasicList: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    rtl: true
  };

  return (
    <div className={styles.contentWrapper}>
      {/* Nadpis a podnadpis */}
      <div className={styles.textContent}>
        <h2 className={styles.mainTitle}>Hlásiče</h2>
        <p className={styles.subtitle}>
          Udržitelná budoucnost díky modernímu vzdělávání o třídění a snižování množství odpadu
        </p>
      </div>

      {/* Slider s obrázky */}
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          <div>
            <motion.img
              src="/images/waytronic-1.webp"
              alt="Hlásič 1"
              className={styles.hlasicImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/waytronic-2.webp"
              alt="Hlásič 2"
              className={styles.hlasicImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/waytronic-3.webp"
              alt="Hlásič 3"
              className={styles.hlasicImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/waytronic-4.webp"
              alt="Hlásič 4"
              className={styles.hlasicImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div>
            <motion.img
              src="/images/waytronic-5.webp"
              alt="Hlásič 5"
              className={styles.hlasicImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </Slider>
      </div>

      {/* Seznam výhod */}
      <ul className={styles.featureList}>
        <li>Mobilita – umožňuje flexibilní a operativní umístění hlásičů, podle potřeby</li>
        <li>Databáze nahrávek - široká škála vlastních veselých osvětových informací hlasem známých osobností</li>
        <li>Nezávislé napájení – vlastní baterie, solární napájení, 230 V</li>
        <li>Účelnost – umožňují obcím a firmám cílit sdělované informace a jejich obsah podle aktuální potřeby</li>
        <li>Rychlé nahrávání – hlásiče umožňují změnu nahrávek ve velmi krátkém čase</li>
        <li>Bezpečné zařízení – hlásiče jsou určeny pro použití v interiéru i exteriéru (IP63)</li>
      </ul>

      {/* Závěrečný text */}
      <p className={styles.subtitle}>
        Hlásiče jsou nástrojem k operativnímu sdělování informací, instruktážím a vzdělávání
      </p>
    </div>
  );
};

export default HlasicList;