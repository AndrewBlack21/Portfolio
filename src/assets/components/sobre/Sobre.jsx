import React from "react";
import styles from "./Sobre.module.css";
import Curriculo from "/CurriculoFrontEnd.pdf";

const Sobre = () => {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Sobre mim</h2>
      </div>

      <p className={styles.description}>
        Desenvolvedor Front-end apaixonado por criar experiências digitais
        interativas, escaláveis e com alto desempenho. Tenho sólida experiência
        em projetos desafiadores, utilizando tecnologias modernas como React.js,
        HTML, CSS, JavaScript, Bootstrap, Swiper, além de conhecimentos em
        Python e Design UX/UI. Sou entusiasta na construção de componentes
        reutilizáveis, na criação de interfaces intuitivas e no aprimoramento
        constante da performance e acessibilidade das aplicações. Busco sempre
        melhorar a experiência do usuário, oferecendo soluções inovadoras e
        eficientes.
      </p>
      <div className={styles.buttonContainer}>
        <a href={Curriculo} download className={styles.cvButton}>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Sobre;
