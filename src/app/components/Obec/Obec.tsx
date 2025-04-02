"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Obec.module.css";
import KontejnerList from "./KontejnerList/KontejnerList";
import MobilKontejneryList from "./MobilKontejnerList/MobilKontejnerList";
import HlasicList from "./HlasicList/HlasicList";

const Obec: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Slogan s animací */}
      <motion.h1 
        className={styles.slogan}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 100 }}  
        transition={{ duration: 1 }}
      >
        Udržitelná budoucnost díky modernímu vzdělávání o třídění a snižování množství odpadu
      </motion.h1>

      {/* Obrázek s animací */}
      <div className={styles.imageWrapper}>
        <motion.img 
          src="/images/Animate2.png" 
          alt="Animace 2" 
          className={styles.mainImage} 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Sekce s omezenou šířkou */}
      <div className={styles.contentContainer}>
        {/* Chytré kontejnery */}
        <section 
          id="chytré-kontejnery"
          className={styles.section}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          </motion.h2>
          <KontejnerList />
        </section>

        {/* Mobilní kontejnery */}
        <section 
          id="mobilní-kontejnery"
          className={styles.section}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Mobilní kontejnery
          </motion.h2>
          <MobilKontejneryList />
        </section>

        {/* Hlásiče */}
        <section 
          id="hlásiče"
          className={styles.section}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hlásiče
          </motion.h2>
          <HlasicList />
        </section>
      </div>
    </div>
  );
};

export default Obec;