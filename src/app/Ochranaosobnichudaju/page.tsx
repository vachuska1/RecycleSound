// app/Ochranaosobnichudaju/page.tsx
import React from "react";
import Link from "next/link";

const Ochranaosobnichudaju = () => {
  return (
    <div
      style={{
        padding: "20px",
        width: "100%", // Pozadí bude na celé šířce
        background:
          "linear-gradient(90deg, #007f73, #009687, #00ae9d, #0dc6b1, #26d6bc, #26d6bc, #0dc6b1, #00ae9d, #009687, #007f73)",
        color: "white", // Bílé písmo
        lineHeight: "1.8", // Větší mezery mezi řádky
      }}
    >
      <div
        style={{
          maxWidth: "800px", // Text bude mít maximální šířku 800px
          margin: "auto", // Centrumje textu
        }}
      >
        <h1>Zásady ochrany osobních údajů</h1>
        <p>
          Tyto zásady ochrany osobních údajů vysvětlují, jak zpracováváme osobní
          údaje, které nám poskytujete prostřednictvím našeho kontaktního formuláře.
        </p>

        <h2>1. Správce osobních údajů</h2>
        <p>
          Správcem vašich osobních údajů je **Ing. Václav Vachuška, PhD.**, se
          sídlem Mayerova 1097, 34101 Horažďovice, e-mail:{" "}
          <a href="mailto:vachuska@ekostat.cz">vachuska@ekostat.cz</a>.
        </p>

        <h2>2. Jaké osobní údaje zpracováváme?</h2>
        <ul>
          <li>Jméno a příjmení</li>
          <li>E-mailová adresa</li>
          <li>Telefonní číslo</li>
          <li>Obsah zprávy</li>
        </ul>

        <h2>3. Účel zpracování</h2>
        <p>
          Osobní údaje zpracováváme pouze za účelem vyřízení vašeho dotazu a
          případné další komunikace.
        </p>

        <h2>4. Doba uchování údajů</h2>
        <p>
          Osobní údaje uchováváme pouze po dobu nezbytně nutnou k vyřízení dotazu,
          maximálně po dobu 6 měsíců od poslední komunikace.
        </p>

        <h2>5. Práva subjektu údajů</h2>
        <p>V souladu s GDPR máte následující práva:</p>
        <ul>
          <li>Právo na přístup k vašim údajům</li>
          <li>Právo na opravu nepřesných údajů</li>
          <li>Právo na výmaz údajů („právo být zapomenut“)</li>
          <li>Právo na omezení zpracování</li>
          <li>Právo vznést námitku proti zpracování</li>
          <li>Právo na přenositelnost údajů</li>
          <li>Právo podat stížnost u Úřadu pro ochranu osobních údajů</li>
        </ul>

        <h2>6. Poskytování údajů třetím stranám</h2>
        <p>
          Vaše údaje nejsou předávány žádným třetím stranám ani využívány pro
          marketingové účely.
        </p>

        <h2>7. Jak nás můžete kontaktovat?</h2>
        <p>
          Pokud máte jakékoliv dotazy k ochraně osobních údajů, kontaktujte nás na
          e-mailu:{" "}
          <a href="mailto:vachuska@ekostat.cz">vachuska@ekostat.cz</a>.
        </p>

        {/* Odkaz zpět na hlavní stránku */}
        <p>
          <Link href="/">Zpět na hlavní stránku</Link>
        </p>
      </div>
    </div>
  );
};

export default Ochranaosobnichudaju;
