import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";

import { SiPostgresql } from "react-icons/si";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import styles from "./Projetos.module.css";

const ProjetosData = [
  {
    id: 10,
    title: "MedWay",
    image: "imagens/Projetos/MedWay.jpeg",
    link: "https://github.com/AndrewBlack21/MedWay",
    repo: "https://github.com/AndrewBlack21/MedWay",
    descriptionKey:
      "Aplicação para representantes farmaceuticos, onde podem gerar roteiros de visitas para ajustar seu planejamento e metodologia.",
    techs: [
      <FaReact key="react" />,
      <SiTypescript key="typescript" />,
      <RiSupabaseFill key="Supabase" />,
      <SiPostgresql key="SQL" />,
      <RiTailwindCssFill key="Tailwind" />,
    ],
  },
  {
    id: 9,
    title: "FinAI Landing Page",
    image: "imagens/Projetos/FinAI.png",
    link: "https://andrewblack21.github.io/finai-landing/",
    repo: "https://github.com/AndrewBlack21/finai-landing",
    descriptionKey:
      "Conceito de app de controle financeiro com IA. Landing page para converter visitantes em usuários beta.",
    techs: [
      <FaReact key="react" />,
      <FaCss3Alt key="css" />,
      <FaJs key="js" />,
    ],
  },
  {
    id: 1,
    image: "imagens/Projetos/DockTaskBar.png",
    title: "Dock TaskBar",
    descriptionKey: "projects.dock_taskbar_desc",
    link: "https://github.com/AndrewBlack21/Dock-Taskbar-Python",
    repo: "https://github.com/AndrewBlack21/Dock-Taskbar-Python",
    techs: [<FaPython key="python" />],
  },
  {
    id: 2,
    image: "imagens/Projetos/iphocell.png",
    title: "E-commerce Iphocell",
    descriptionKey: "projects.iphocell_desc",
    link: "https://andrewblack21.github.io/loja-celulares/",
    repo: "https://github.com/AndrewBlack21/loja-celulares",
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
    repo: "https://github.com/AndrewBlack21/PIB-VP",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 4,
    image: "imagens/Projetos/InstitutoSina.png",
    title: "Instituto Sina Azul",
    descriptionKey: "projects.sina_azul_desc",
    link: "https://institutosinalazul.org/",
    repo: "https://github.com/AndrewBlack21",
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
    repo: "https://github.com/AndrewBlack21/Gerador-de-QRCode",
    descriptionKey: "projects.qrcode_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 6,
    title: "Relógio Mundial",
    image: "imagens/Projetos/relogio mundial.png",
    link: "https://andrewblack21.github.io/Projeto-Relogio-Digital-Temporizador-Cron-metro/",
    repo: "https://github.com/AndrewBlack21/Projeto-Relogio-Digital-Temporizador-Cron-metro",
    descriptionKey: "projects.clock_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 7,
    title: "To Do List",
    image: "imagens/Projetos/to-do-list.png",
    link: "https://andrewblack21.github.io/To-Do-List-projeto/",
    repo: "https://github.com/AndrewBlack21/To-Do-List-projeto",
    descriptionKey: "projects.todo_list_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
  {
    id: 8,
    title: "Projeto Treino Feminino",
    image: "imagens/Projetos/projeto treino.png",
    link: "https://andrewblack21.github.io/Projeto-de_treino/",
    repo: "https://github.com/AndrewBlack21/Projeto-de_treino",
    descriptionKey: "projects.training_desc",
    techs: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />],
  },
];

export default function Projetos() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>PORTFÓLIO</span>
        <h2 className={styles.title}>{t("projects.title")}</h2>
      </div>

      <div className={styles.swiperWrapper}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: `.${styles.btnNext}`,
            prevEl: `.${styles.btnPrev}`,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Navigation]}
          className={styles.swiper}
        >
          {ProjetosData.map((proj, index) => (
            <SwiperSlide key={proj.id} className={styles.slide}>
              <div className={styles.card}>
                {/* Imagem de fundo */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className={styles.cardImage}
                />

                {/* Overlay com info ao hover */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.techBadges}>
                      {proj.techs.map((tech, i) => (
                        <span key={i} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className={styles.cardTitle}>{proj.title}</h3>
                    <p className={styles.cardDesc}>{t(proj.descriptionKey)}</p>
                    <div className={styles.cardActions}>
                      <a
                        href={proj.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnRepo}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> Repositório
                      </a>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnLive}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt /> Ver Projeto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação customizados */}
        <button className={`${styles.navBtn} ${styles.btnPrev}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className={`${styles.navBtn} ${styles.btnNext}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots de paginação */}
      <div className={styles.dots}>
        {ProjetosData.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
