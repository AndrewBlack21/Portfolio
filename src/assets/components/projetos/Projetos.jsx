import React from "react";
import styles from "./Projetos.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Variavel onde sera armazena em lista os projetos principais

const ProjetosData = [
  {
    id: 1,
    image: "/imagens/Projetos/DockTaskBar.png",
    title: "Dock TaskBar",
    description:
      "Uma Dock minimalista para centralizar todos os icones da area de trabalho, em uma so area deixando a area de trabalho clear",
    html: "https://github.com/AndrewBlack21/Dock-Taskbar-Python",
  },
  {
    id: 2,
    image: "/imagens/Projetos/InstitutoPIB.png",
    title: "Instituto PIB VP",
    description:
      "Landing page para uma organização social, focada em apresentar a missão, os valores e os projetos da instituição de forma clara e impactante para atrair voluntários e doadores. ",
    html: "https://andrewblack21.github.io/PIB-VP/",
  },
  {
    id: 3,
    image: "imagens/Projetos/InstitutoSina.png",
    title: "Instituto Sina Azul",
    description:
      "Plataforma web para uma ONG de apoio a crianças com autismo. O site serve como um portal de informações, recursos para pais e um canal para doações online.",
    html: "https://andrewblack21.github.io/Instituto-Sina-Azul/",
  },
];

const Projetos = () => {
  return (
    <section id="destaques" className={styles.featuredProjects}>
      <h2 className={styles.title}>Projetos em destaque</h2>

      {/* Swiper configuração */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className={styles.swiperContainer}
      >
        {ProjetosData.map((Projetos) => (
          <SwiperSlide key={Projetos.id}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <a href={Projetos.html}>
                  <img
                    src={Projetos.image}
                    className={styles.cardImage}
                    alt={Projetos.title}
                  />
                </a>
              </div>
              <h3 className={styles.cardTitle}>{Projetos.title}</h3>
              <p className={styles.cardDescription}>{Projetos.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projetos;
