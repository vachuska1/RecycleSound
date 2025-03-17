import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Kontakt vlevo */}
        <div className={styles.contact}>
          <h3>Kontakt</h3>
          <p>Ing. Václav Vachuška, PhD.</p>
          <p>Tel: <a href="tel:+420602305209">602 305 209</a></p>
          <p>Adresa: Mayerova 1097, 34101 Horažďovice</p>
        </div>

        {/* Kontaktní formulář vpravo */}
        <div className={styles.formContainer}>
          <h3>Napište nám</h3>
          <form className={styles.form}>
            <input type="text" placeholder="Jméno" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Telefon" required />
            <textarea placeholder="Zpráva" required></textarea>
            <button type="submit">Odeslat</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
