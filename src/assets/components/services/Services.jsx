import React from "react";
import styles from "./Services.module.css";

const servicesData = [
  {
    id: 1,
    title: "Desenvolvimento",
    description:
      "Desenvolvo frontend de sites profissionais, blogs, SaaS, landing pages, e-commerce e entre outros websites, com foco em performance e responsividade.",
  },
  {
    id: 2,
    title: "Design UX/UI",
    description:
      "Desenho interfaces no Figma de forma que ela seja clara, objetiva e principalmente intuitiva para a experiência do usuário, criando um fluxo de navegação coeso.",
  },
  // {
  //   id: 3,
  //   title: "Protótipos e Mockups",
  //   description:
  //     "Crio protótipos interativos e mockups de alta fidelidade que permitem validar ideias e testar a usabilidade antes mesmo do desenvolvimento começar.",
  // },
];

const Services = () => {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.servicesContainer}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
