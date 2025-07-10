import React from "react";
import styles from "./Footer.module.css";

// Icones
import GitHubIcon from "/imagens/github.png";
import LinkedInIcon from "/imagens/linkedin.png";
import Whatsapp from "/imagens/whatsapp.png";
import Logo from "/imagens/AF.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/AndrewBlack21"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrewsilvaferreira/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://wa.me/5513981142641"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.emailWrapper}>
          <div className={styles.emailAnimate}>
            <span>andrew.moraes16@hotmail.com</span>
            <span>andrew.moraes16@hotmail.com</span>
          </div>
        </div>
        <div className={styles.copyright}>
          Desenvolvido por - Andrew Ferreira
        </div>
        <div className={styles.logo}>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
