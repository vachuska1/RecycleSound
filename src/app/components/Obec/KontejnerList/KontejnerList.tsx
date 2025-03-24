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
    <div>
      {/* Text s animací */}
      <motion.section
        className={styles.carouselText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nabízíme tyto druhy kontejnerů
        </motion.h2>
      </motion.section>

      {/* Slider s obrázky */}
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
    </div>
  );
};

export default KontejnerList;
