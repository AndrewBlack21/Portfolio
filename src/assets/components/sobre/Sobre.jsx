import React from "react";
import styles from "./Sobre.module.css";
import Curriculo from "/CurriculoFrontEnd.pdf";
import { useTranslation } from "react-i18next";
const Sobre = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{t("about.title")}</h2>
      </div>

      <p className={styles.description}>{t("about.description")}</p>
      <div className={styles.buttonContainer}>
        <a href={Curriculo} download className={styles.cvButton}>
          {t("hero.downloadCV")}
        </a>
      </div>
    </section>
  );
};

export default Sobre;
