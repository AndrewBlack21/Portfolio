import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import sunIcon from "/imagens/sun.png";
import moonIcon from "/imagens/moon.png";
import AF from "/imagens/AF.png";
// Menu Hamburgue
import HamburgueIcon from "./HamburgueIcon";
import CloseIcon from "./CloseIcon";

import { useTranslation } from "react-i18next"; // 1. Importe o hook

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // 2. Use o hook

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.bodyNoScroll);
    } else {
      document.body.classList.remove(styles.bodyNoScroll);
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src={AF} className={styles.logoimg} alt="" />
        </a>
      </div>
      <nav
        className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ""}`}
      >
        <ul>
          <li>
            <a onClick={toggleMenu} href="#home">
              {t("header.home")}
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#sobre">
              {t("header.about")}
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#projetos">
              {t("header.services")}
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#servicos">
              Serviço
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <a href="https://wa.me/5513981142641" className={styles.contactButton}>
          {t("header.contact")}
        </a>
        <button onClick={toggleTheme} className={styles.themeToggleButton}>
          <img
            src={theme === "light" ? moonIcon : sunIcon}
            alt="Toggle theme"
          />
        </button>

        <div className={styles.languageSwitcher}>
          <button
            onClick={() => changeLanguage("pt")}
            className={i18n.language === "pt" ? styles.activeLanguage : ""}
          >
            PT
          </button>
          <span className={styles.separator}>|</span>
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? styles.activeLanguage : ""}
          >
            EN
          </button>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <HamburgueIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
