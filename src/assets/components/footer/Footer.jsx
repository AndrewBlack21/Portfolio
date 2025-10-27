import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

// Icones
import GitHubIcon from "/imagens/github.png";
import LinkedInIcon from "/imagens/linkedin.png";
import Whatsapp from "/imagens/whatsapp.png";
import Logo from "/imagens/AF.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>{/* ...icones sociais... */}</div>

      <div className={styles.footerBottom}>
        <div className={styles.emailWrapper}>
          <div className={styles.emailAnimate}>
            <span>andrew.moraes16@hotmail.com</span>
            <span>andrew.moraes16@hotmail.com</span>
          </div>
        </div>
        <div className={styles.copyright}>{t("footer.developed_by")}</div>
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
