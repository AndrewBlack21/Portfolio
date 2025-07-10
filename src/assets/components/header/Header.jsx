import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import sunIcon from "/imagens/sun.png";
import moonIcon from "/imagens/moon.png";
import AF from "/imagens/AF.png";
// Menu Hamburgue
import HamburgueIcon from "./HamburgueIcon";
import CloseIcon from "./CloseIcon";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              Home
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href="#projetos">
              Projeto
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
        <a href="#contato" className={styles.contactButton}>
          Contato
        </a>
        <button onClick={toggleTheme} className={styles.themeToggleButton}>
          <img
            src={theme === "light" ? moonIcon : sunIcon}
            alt="Toggle theme"
          />
        </button>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <HamburgueIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
