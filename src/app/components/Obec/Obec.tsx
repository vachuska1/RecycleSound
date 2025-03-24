import React from "react";
import { motion } from "framer-motion";
import styles from "./Obec.module.css";
import KontejnerList from "./KontejnerList/KontejnerList";

const Obec: React.FC = () => {
  return (
    <div>
      {/* Slogan */}
      <motion.h1 
        className={styles.slogan}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
      >
        Udržitelná budoucnost díky modernímu vzdělávání o třídění a snižování množství odpadu
      </motion.h1>

      {/* Obrázky */}
      <div className={styles.imageContainer}>
        <motion.img 
          src="/images/Animate2.png" 
          alt="Animace 2" 
          className={styles.image} 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <KontejnerList />
    </div>
  );
};

export default Obec;
