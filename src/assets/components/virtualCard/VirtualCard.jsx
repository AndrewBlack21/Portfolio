import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaShareAlt,
  FaDownload,
  FaCheck,
  FaGlobe,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "./VirtualCard.module.css";

const WHATSAPP = "5513981142641";
const LINKEDIN = "https://linkedin.com/in/andrewferreira-680101197";
const GITHUB = "https://github.com/AndrewBlack21";
const PORTFOLIO = "https://andrewblack21.github.io/Portfolio/#cartao";

const featuredProjects = [
  {
    title: "MedWay",
    image: "./imagens/Projetos/MedWay.jpeg",
    description:
      "Aplicação para representantes farmacêuticos com planejamento e roteirização de visitas.",
    link: "https://github.com/AndrewBlack21/MedWay",
  },
  {
    title: "SeControla Ai",
    image: "./imagens/Projetos/secontrola.png",
    description:
      "Aplicação de controle financeiro pessoal com dashboard, transações, cartões, faturas e relatórios.",
    link: "https://github.com/AndrewBlack21/finance-app",
  },
  {
    title: "FinAI Landing Page",
    image: "./imagens/Projetos/FinAI.png",
    description:
      "Landing page de um conceito de aplicativo financeiro com IA, focada em conversão.",
    link: "https://andrewblack21.github.io/finai-landing/",
  },
];

export default function VirtualCard() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Andrew Ferreira | Cartão Digital";
    return () => {
      document.title = "Andrew Ferreira | Portfólio";
    };
  }, []);

  const backToPortfolio = () => {
    window.location.hash = "";
  };

  const saveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Andrew Ferreira",
      "N:Ferreira;Andrew;;;",
      "TITLE:Desenvolvedor Front-end",
      "TEL;TYPE=CELL:+55 13 98114-2641",
      "URL:" + LINKEDIN,
      "URL:" + GITHUB,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Andrew-Ferreira.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const shareCard = async () => {
    const shareData = {
      title: "Andrew Ferreira | Cartão Digital",
      text: "Conheça meu perfil profissional e meu portfólio.",
      url: PORTFOLIO,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(PORTFOLIO);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // O usuário pode cancelar o compartilhamento sem nenhuma ação adicional.
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <header className={styles.topbar}>
        <button className={styles.backButton} onClick={backToPortfolio}>
          <FaArrowLeft />
          <span>{t("card.backToPortfolio")}</span>
        </button>
        <span className={styles.modeBadge}>{t("card.mode")}</span>
      </header>

      <section className={styles.content}>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.avatar}>AF</div>
            <div>
              <span className={styles.eyebrow}>ANDREW FERREIRA</span>
              <h1>{t("card.name")}</h1>
              <p>{t("card.role")}</p>
            </div>
          </div>

          <div className={styles.status}>
            <span className={styles.statusDot} />
            {t("card.status")}
          </div>

          <p className={styles.bio}>{t("card.bio")}</p>

          <div className={styles.skills}>
            {["React", "JavaScript", "TypeScript", "Python", "UX/UI"].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className={styles.primaryActions}>
            <a
              className={styles.primaryButton}
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              {t("card.whatsapp")}
            </a>

            <button className={styles.secondaryButton} onClick={saveContact}>
              <FaDownload />
              {t("card.saveContact")}
            </button>
          </div>

          <div className={styles.socials}>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <button onClick={shareCard} aria-label={t("card.share")}>
              {copied ? <FaCheck /> : <FaShareAlt />}
            </button>
          </div>

          <div className={styles.qrArea}>
            <img
              src="./imagens/portfolio-card-qr.png"
              alt={t("card.qrAlt")}
              className={styles.qr}
            />
            <div>
              <strong>{t("card.scanTitle")}</strong>
              <p>{t("card.scanDescription")}</p>
            </div>
          </div>

          <a className={styles.portfolioLink} href={window.location.pathname + "#projetos"}>
            <FaGlobe />
            {t("card.viewPortfolio")}
          </a>
        </article>

        <aside className={styles.sideInfo}>
          <span>{t("card.label")}</span>
          <h2>{t("card.headline")}</h2>
          <p>{t("card.description")}</p>
          <div className={styles.featureList}>
            <div>
              <strong>01</strong>
              <span>{t("card.feature1")}</span>
            </div>
            <div>
              <strong>02</strong>
              <span>{t("card.feature2")}</span>
            </div>
            <div>
              <strong>03</strong>
              <span>{t("card.feature3")}</span>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <span>{t("card.projectsLabel")}</span>
          <h2>{t("card.projectsTitle")}</h2>
          <p>{t("card.projectsDescription")}</p>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectImageWrap}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <span className={styles.projectArrow}>
                  <FaExternalLinkAlt />
                </span>
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className={styles.projectCta}>
                  {t("card.projectCta")} <FaExternalLinkAlt />
                </span>
              </div>
            </a>
          ))}
        </div>

        <button className={styles.projectsPortfolioButton} onClick={backToPortfolio}>
          <FaGlobe />
          {t("card.allProjects")}
        </button>
      </section>
    </main>
  );
}
