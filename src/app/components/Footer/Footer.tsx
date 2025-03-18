"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { useState } from "react";


const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Kontakt vlevo - zarovnán na střed */}
        <div className={styles.contactBox}>
          <div className={styles.contact}>
            <h3>Kontakt</h3>
            <p>Ing. Václav Vachuška, PhD.</p>
            <p>
              <a href="tel:+420602305209">602 305 209</a>
            </p>
            <p>
  <a href="mailto:vachuska@ekostat.cz">vachuska@ekostat.cz</a>
</p>
            <p>Mayerova 1097, 34101 Horažďovice</p>
          </div>
        </div>

        {/* Kontaktní formulář vpravo */}
        <div className={styles.formContainer}>
          <h3>KONTAKTUJTE NÁS</h3>
          <form className={styles.form}>
            <input type="text" placeholder="Jméno" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Telefon" required />
            <textarea placeholder="Zpráva" required></textarea>

            {/* Checkbox pro souhlas se zpracováním osobních údajů */}
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                required
              />
              Souhlasím se{" "}
              <Link href="/Ochranaosobnichudaju">
                zpracováním osobních údajů
              </Link>
            </label>

            <button type="submit" disabled={!isChecked}>
              Odeslat
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
