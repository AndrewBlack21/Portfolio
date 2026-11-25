import React from "react";
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";

const skillGroups = [
  {
    id: "frontend",
    titleKey: "skills.categories.frontend",
    descriptionKey: "skills.categoryDescriptions.frontend",
    skills: [
      { name: "React", icon: "imagens/habilidades/react.png" },
      { name: "JavaScript", icon: "imagens/habilidades/javascript.png" },
      { name: "HTML5", icon: "imagens/habilidades/html.png" },
      { name: "CSS3", icon: "imagens/habilidades/css.png" },
      { name: "TypeScript", short: "TS" },
      { name: "Next.js", short: "N" },
      { name: "React Native", short: "RN" },
      { name: "Bootstrap", icon: "imagens/habilidades/bootstrap.png" },
      { name: "Tailwind CSS", short: "TW" }
    ]
  },
  {
    id: "backend",
    titleKey: "skills.categories.backend",
    descriptionKey: "skills.categoryDescriptions.backend",
    skills: [
      { name: "Python", icon: "imagens/habilidades/python.png" },
      { name: "Node.js", short: "JS" },
      { name: "APIs REST", short: "API" }
    ]
  },
  {
    id: "database",
    titleKey: "skills.categories.database",
    descriptionKey: "skills.categoryDescriptions.database",
    skills: [
      { name: "PostgreSQL", short: "PG" },
      { name: "Firebase", short: "FB" },
      { name: "Supabase", short: "SB" }
    ]
  },
  {
    id: "tools",
    titleKey: "skills.categories.tools",
    descriptionKey: "skills.categoryDescriptions.tools",
    skills: [
      { name: "Git", icon: "imagens/github.png" },
      { name: "GitHub", short: "GH" },
      { name: "Docker", short: "DK" },
      { name: "Figma", icon: "imagens/habilidades/figma.png" },
      { name: "npm", short: "npm" }
    ]
  },
  {
    id: "ai",
    titleKey: "skills.categories.ai",
    descriptionKey: "skills.categoryDescriptions.ai",
    skills: [
      { name: "Inteligência Artificial", short: "AI" }
    ]
  }
];

const Skills = () => {
  const { t } = useTranslation();
  const totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0);

  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.heroTopline}>
            <span className={styles.eyebrow}>{t("skills.eyebrow")}</span>
            <span className={styles.heroIndex}>01 — 05 / TOOLKIT</span>
          </div>

          <div className={styles.heroMain}>
            <div className={styles.heroCopy}>
              <h2 className={styles.title}>
                {t("skills.heroLineOne")}<br />
                <span>{t("skills.heroLineTwo")}</span>
              </h2>
              <p className={styles.subtitle}>{t("skills.subtitle")}</p>
            </div>

            <div className={styles.heroArt} aria-hidden="true">
              <div className={styles.artGlow} />
              <div className={`${styles.artRing} ${styles.artRingOne}`} />
              <div className={`${styles.artRing} ${styles.artRingTwo}`} />
              <div className={styles.artCore}>
                <span>{"</>"}</span>
              </div>
              <span className={`${styles.artNode} ${styles.artNodeOne}`}>JS</span>
              <span className={`${styles.artNode} ${styles.artNodeTwo}`}>AI</span>
              <span className={`${styles.artNode} ${styles.artNodeThree}`}>UI</span>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>{t("skills.heroFootnote")}</span>
            <div className={styles.stats}>
              <div><strong>{String(totalSkills).padStart(2, "0")}</strong><span>{t("skills.technologiesLabel")}</span></div>
              <i />
              <div><strong>05</strong><span>{t("skills.areasLabel")}</span></div>
            </div>
          </div>
        </header>

        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionEyebrow}>{t("skills.stackLabel")}</span>
            <h3>{t("skills.organizedTitle")}</h3>
          </div>
          <p>{t("skills.organizedDescription")}</p>
        </div>

        <div className={styles.skillGrid}>
          {skillGroups.map((group, index) => (
            <article
              className={`${styles.category} ${index === 0 ? styles.categoryFeatured : ""} ${group.id === "ai" ? styles.categoryAi : ""}`}
              key={group.id}
            >
              <div className={styles.categoryTop}>
                <span className={styles.categoryNumber}>0{index + 1}</span>
                <span className={styles.categoryCount}>{String(group.skills.length).padStart(2, "0")} {t("skills.itemsLabel")}</span>
              </div>

              <div className={styles.categoryHeading}>
                <h4>{t(group.titleKey)}</h4>
                <p>{t(group.descriptionKey)}</p>
              </div>

              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <div className={styles.skill} key={skill.name}>
                    <span className={styles.skillIcon}>
                      {skill.icon ? <img src={skill.icon} alt="" loading="lazy" /> : <span>{skill.short}</span>}
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footerNote}>
          <span className={styles.footerMark}>✳</span>
          <p>{t("skills.footerNote")}</p>
        </footer>
      </div>
    </section>
  );
};

export default Skills;
