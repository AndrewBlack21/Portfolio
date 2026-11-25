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
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {t("skills.eyebrow")}
            </span>
            <h2 className={styles.title}>{t("skills.title")}</h2>
            <p className={styles.subtitle}>{t("skills.subtitle")}</p>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <span className={styles.visualOrb} />
            <span className={styles.visualOrbit} />
            <span className={styles.visualCode}>{"</>"}</span>
            <span className={styles.visualCaption}>DESIGN · BUILD · CREATE</span>
          </div>
        </header>

        <div className={styles.sectionMeta}>
          <span>{t("skills.stackLabel")}</span>
          <span className={styles.metaCount}>
            <strong>{String(totalSkills).padStart(2, "0")}</strong>
            {t("skills.technologiesLabel")}
          </span>
        </div>

        <div className={styles.groups}>
          {skillGroups.map((group, index) => (
            <article className={`${styles.groupRow} ${index === 0 ? styles.primaryGroup : ""}`} key={group.id}>
              <div className={styles.groupInfo}>
                <span className={styles.groupIndex}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.groupTitle}>{t(group.titleKey)}</h3>
                  <p className={styles.groupDescription}>{t(group.descriptionKey)}</p>
                </div>
              </div>

              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <span className={styles.skill} key={skill.name}>
                    <span className={styles.skillMark}>
                      {skill.icon ? (
                        <img src={skill.icon} alt="" loading="lazy" />
                      ) : (
                        skill.short
                      )}
                    </span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footerNote}>
          <span className={styles.footerSparkle}>✳</span>
          <p>{t("skills.footerNote")}</p>
        </footer>
      </div>
    </section>
  );
};

export default Skills;
