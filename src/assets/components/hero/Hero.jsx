import React from "react";
import styles from "./Hero.module.css";
import profilePic from "/imagens/perfil.png";
import githubIcon from "/imagens/github.png";
import LinkedinIcon from "/imagens/linkedin.png";
import Curriculo from "/CurriculoFrontEnd.pdf";

import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.title}>{t("hero.greeting")}</p>
        <h1 className={styles.greeting}>
          <Typewriter
            words={[
              t("hero.typewriter1"),
              t("hero.typewriter2"),
              t("hero.typewriter3"),
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h1>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/andrewsilvaferreira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Lindkedin" />
          </a>
          <a
            href="https://github.com/AndrewBlack21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <div className={styles.buttons}>
          <a href={Curriculo} download className={styles.buttonPrimary}>
            {t("hero.downloadCV")}
          </a>
          <a
            href="https://wa.me/5513981142641"
            className={styles.buttonSecondary}
          >
            {t("hero.contact")}
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.spinningRing}></div>
        <img src={profilePic} className={styles.profileImage} alt="Andrew" />
      </div>
    </section>
  );
};

export default Hero;
