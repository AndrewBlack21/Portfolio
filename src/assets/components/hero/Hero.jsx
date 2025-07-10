import React from "react";
import styles from "./Hero.module.css";
import profilePic from "/imagens/perfil.png";
import githubIcon from "/imagens/github.png";
import LinkedinIcon from "/imagens/linkedin.png";
import Curriculo from "/CurriculoFrontEnd.pdf";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.title}>Olá, eu sou o Andrew Ferreira</p>
        <h1 className={styles.greeting}>Desenvolvedor Front-End</h1>
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
            Download CV
          </a>
          <a href="" className={styles.buttonSecondary}>
            Entra em contato
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
