import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Projetos.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Variavel onde sera armazena em lista os projetos principais

const ProjetosData = [
  {
    id: 1,
    image: "imagens/Projetos/DockTaskBar.png",
    title: "Dock TaskBar",
    description:
      "Uma Dock minimalista para centralizar todos os icones da area de trabalho, em uma so area deixando a area de trabalho clear",
    link: "https://github.com/AndrewBlack21/Dock-Taskbar-Python",
    techs: [<FaPython key="python" />, <FaHtml5 key="html" />],
  },
  {
    id: 2,
    image: "imagens/Projetos/InstitutoPIB.png",
    title: "Instituto PIB VP",
    description:
      "Landing page para uma organização social, focada em apresentar a missão, os valores e os projetos da instituição de forma clara e impactante para atrair voluntários e doadores. ",
    link: "https://andrewblack21.github.io/PIB-VP/",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 3,
    image: "imagens/Projetos/InstitutoSina.png",
    title: "Instituto Sina Azul",
    description:
      "Plataforma web para uma ONG de apoio a crianças com autismo. O site serve como um portal de informações, recursos para pais e um canal para doações online.",
    link: "https://institutosinalazul.org/",
    techs: [
      <FaReact key="react" />,
      <FaCss3Alt key="css" />,
      <FaJs key="js" />,
    ],
  },
  {
    id: 4,
    title: "Gerador de QR Code",
    image: "imagens/Projetos/generate-qr-code.png",
    link: "https://andrewblack21.github.io/Gerador-de-QRCode/",
    description: "Gerador de QR Code para links",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 5,
    title: "Relogio Mundial",
    image: "imagens/Projetos/relogio mundial.png",
    link: "https://andrewblack21.github.io/Projeto-Relogio-Digital-Temporizador-Cron-metro/",
    description: "Relogio Mundial com temporizador, e cronometro ",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 2,
    title: "To Do List",
    image: "imagens/Projetos/to-do-list.png",
    link: "https://andrewblack21.github.io/To-Do-List-projeto/",
    description: "To Do List simples, para organizar tarefas diarias",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 3,
    title: "Projeto Treino Femino",
    image: "imagens/Projetos/projeto treino.png",
    link: "https://andrewblack21.github.io/Projeto-de_treino/",
    description:
      "Uma aplicação de treinos femininos, com dicas e treinos personalizados.",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
];

export default function Projetos() {
  return (
    <div id="projetos" className={styles.container}>
      <h2 className={styles.title}>Meus Projetos</h2>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        navigation
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {ProjetosData.map((proj, index) => (
          <SwiperSlide key={index}>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.thumbnail}>
                <img src={proj.image} alt={proj.title} />
                <div className={styles.overlay}>
                  <p>{proj.description}</p>
                </div>
              </div>
              <div className={styles.techs}>{proj.techs}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
