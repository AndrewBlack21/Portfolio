import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Projetos.module.css";

// Os dados agora usam chaves de tradução
const ProjetosData = [
  {
    id: 1,
    image: "imagens/Projetos/DockTaskBar.png",
    title: "Dock TaskBar",
    descriptionKey: "projects.dock_taskbar_desc",
    link: "https://github.com/AndrewBlack21/Dock-Taskbar-Python",
    techs: [<FaPython key="python" />],
  },
  {
    id: 2,
    image: "imagens/Projetos/iphocell.png",
    title: "E-commercer Iphocell",
    descriptionKey: "projects.iphocell_desc",
    link: "https://andrewblack21.github.io/loja-celulares/",
    techs: [
      <FaReact key="react" />,
      <SiPostgresql key="SQL" />,
      <FaJs key="js" />,
    ],
  },
  {
    id: 3,
    image: "imagens/Projetos/InstitutoPIB.png",
    title: "Instituto PIB VP",
    descriptionKey: "projects.pib_vp_desc",
    link: "https://andrewblack21.github.io/PIB-VP/",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 4,
    image: "imagens/Projetos/InstitutoSina.png",
    title: "Instituto Sina Azul",
    descriptionKey: "projects.sina_azul_desc",
    link: "https://institutosinalazul.org/",
    techs: [
      <FaReact key="react" />,
      <FaCss3Alt key="css" />,
      <FaJs key="js" />,
    ],
  },
  {
    id: 5,
    title: "Gerador de QR Code",
    image: "imagens/Projetos/generate-qr-code.png",
    link: "https://andrewblack21.github.io/Gerador-de-QRCode/",
    descriptionKey: "projects.qrcode_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 6,
    title: "Relogio Mundial",
    image: "imagens/Projetos/relogio mundial.png",
    link: "https://andrewblack21.github.io/Projeto-Relogio-Digital-Temporizador-Cron-metro/",
    descriptionKey: "projects.clock_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 7,
    title: "To Do List",
    image: "imagens/Projetos/to-do-list.png",
    link: "https://andrewblack21.github.io/To-Do-List-projeto/",
    descriptionKey: "projects.todo_list_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 8,
    title: "Projeto Treino Femino",
    image: "imagens/Projetos/projeto treino.png",
    link: "https://andrewblack21.github.io/Projeto-de_treino/",
    descriptionKey: "projects.training_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
];

export default function Projetos() {
  const { t } = useTranslation();

  return (
    <div id="projetos" className={styles.container}>
      <h2 className={styles.title}>{t("projects.title")}</h2>
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
                  <p>{t(proj.descriptionKey)}</p>
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
