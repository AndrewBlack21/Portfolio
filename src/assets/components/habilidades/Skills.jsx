import React, { useState } from "react";
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";

const skillGroups = [
  {
    id: "frontend",
    titleKey: "skills.categories.frontend",
    skills: [
      { name: "React", icon: "imagens/habilidades/react.png", description: "Desenvolvimento de interfaces com componentes reutilizáveis, hooks e aplicações modernas." },
      { name: "JavaScript", icon: "imagens/habilidades/javascript.png", description: "Linguagem para criar interações, regras de negócio e funcionalidades dinâmicas na web." },
      { name: "HTML5", icon: "imagens/habilidades/html.png", description: "Estruturação semântica de páginas, com atenção à acessibilidade e organização do conteúdo." },
      { name: "CSS3", icon: "imagens/habilidades/css.png", description: "Estilização de interfaces responsivas com Flexbox, Grid e recursos modernos de CSS." },
      { name: "TypeScript", short: "TS", description: "JavaScript com tipagem estática para desenvolver aplicações mais previsíveis e fáceis de manter." },
      { name: "Next.js", short: "N", description: "Framework React para aplicações web com recursos de renderização e roteamento." },
      { name: "React Native", short: "RN", description: "Desenvolvimento de aplicações mobile utilizando React e componentes nativos." },
      { name: "Bootstrap", icon: "imagens/habilidades/bootstrap.png", description: "Framework CSS para construir layouts responsivos com componentes prontos." },
      { name: "Tailwind CSS", short: "TW", description: "Framework CSS utility-first para construir interfaces diretamente com classes utilitárias." }
    ]
  },
  {
    id: "backend",
    titleKey: "skills.categories.backend",
    skills: [
      { name: "Python", icon: "imagens/habilidades/python.png", description: "Linguagem versátil utilizada em automações, lógica de aplicação e desenvolvimento back-end." },
      { name: "Node.js", short: "JS", description: "Ambiente de execução JavaScript para desenvolver serviços e aplicações no servidor." },
      { name: "APIs REST", short: "API", description: "Integração entre aplicações por meio de endpoints HTTP e troca estruturada de dados." }
    ]
  },
  {
    id: "database",
    titleKey: "skills.categories.database",
    skills: [
      { name: "PostgreSQL", short: "PG", description: "Banco de dados relacional para armazenar e consultar dados com SQL." },
      { name: "Firebase", short: "FB", description: "Plataforma com serviços de autenticação, banco de dados e infraestrutura para aplicações." },
      { name: "Supabase", short: "SB", description: "Plataforma baseada em PostgreSQL com recursos de banco, autenticação e armazenamento." }
    ]
  },
  {
    id: "tools",
    titleKey: "skills.categories.tools",
    skills: [
      { name: "Git", icon: "imagens/github.png", description: "Controle de versão para acompanhar alterações e organizar o desenvolvimento." },
      { name: "GitHub", short: "GH", description: "Hospedagem de repositórios e colaboração por meio de branches, commits e pull requests." },
      { name: "Docker", short: "DK", description: "Containerização para padronizar ambientes e facilitar a execução de aplicações." },
      { name: "Figma", icon: "imagens/habilidades/figma.png", description: "Criação e consulta de layouts, protótipos e referências de interface." },
      { name: "npm", short: "npm", description: "Gerenciamento de dependências e scripts de projetos JavaScript." }
    ]
  },
  {
    id: "ai",
    titleKey: "skills.categories.ai",
    skills: [
      { name: "Inteligência Artificial", short: "IA", description: "Uso de ferramentas de IA como apoio à pesquisa, produtividade, prototipação e desenvolvimento." }
    ]
  }
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const { t } = useTranslation();

  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{t("skills.eyebrow")}</span>
          <h2 className={styles.title}>{t("skills.title")}</h2>
          <p className={styles.subtitle}>{t("skills.subtitle")}</p>
        </header>

        <div className={styles.content}>
          <div className={styles.groups}>
            {skillGroups.map((group) => (
              <section className={styles.group} key={group.id} aria-labelledby={`skills-${group.id}`}>
                <h3 className={styles.groupTitle} id={`skills-${group.id}`}>
                  {t(group.titleKey)}
                  <span>{group.skills.length.toString().padStart(2, "0")}</span>
                </h3>
                <div className={styles.skillList}>
                  {group.skills.map((skill) => {
                    const selected = activeSkill?.name === skill.name;
                    return (
                      <button
                        type="button"
                        key={skill.name}
                        className={`${styles.skillCard} ${selected ? styles.active : ""}`}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onFocus={() => setActiveSkill(skill)}
                        onClick={() => setActiveSkill(skill)}
                        aria-pressed={selected}
                      >
                        <span className={styles.skillIcon}>
                          {skill.icon ? (
                            <img src={skill.icon} alt="" />
                          ) : (
                            <span>{skill.short}</span>
                          )}
                        </span>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.cardArrow} aria-hidden="true">↗</span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <aside className={styles.details} aria-live="polite">
            <span className={styles.detailsLabel}>{t("skills.detailsLabel")}</span>
            {activeSkill ? (
              <>
                <span className={styles.detailsIcon}>
                  {activeSkill.short || activeSkill.name.slice(0, 2).toUpperCase()}
                </span>
                <h3>{activeSkill.name}</h3>
                <p>{activeSkill.description}</p>
              </>
            ) : (
              <>
                <span className={styles.detailsIcon}>{"</>"}</span>
                <h3>{t("skills.selectTitle")}</h3>
                <p>{t("skills.selectDescription")}</p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;
