import React, { useState } from "react";
import styles from "./Skills.module.css";

// --- DADOS DAS HABILIDADES ---
// Variavel como lista para estar passando as habilidades que quero incrementar, posso adicionar quantas eu quiser
const skillsData = [
  {
    id: 1,
    name: "React",
    icon: "/imagens/habilidades/react.png",
    description:
      "Crio interfaces de usuário dinâmicas e reativas, utilizando componentes, hooks e o ecossistema moderno do React para construir SPAs (Single Page Applications) de alta performance.",
  },
  {
    id: 2,
    name: "JavaScript (ES6+)",
    icon: "/imagens/habilidades/javascript.png",
    description:
      "Domínio da linguagem base da web, incluindo features modernas (ES6+), manipulação do DOM, assincronicidade (Promises, async/await) para criar interações complexas.",
  },
  {
    id: 3,
    name: "HTML5",
    icon: "/imagens/habilidades/html.png",
    description:
      "Estruturo páginas web com HTML semântico, garantindo acessibilidade, melhor SEO e uma base sólida para estilização e scripts.",
  },
  {
    id: 4,
    name: "CSS3",
    icon: "/imagens/habilidades/css.png",
    description:
      "Estilizo componentes e layouts responsivos utilizando conceitos avançados de CSS, como Flexbox, Grid Layout, e variáveis CSS para temas dinâmicos.",
  },
  {
    id: 5,
    name: "Python",
    icon: "/imagens/habilidades/python.png",
    description:
      "Desenvolvo APIs RESTful e gerencio o ambiente de back-end para aplicações full-stack, utilizando o ecossistema do Node.js com frameworks como Express.",
  },
  {
    id: 6,
    name: "Git",
    icon: "/imagens/github.png",
    description:
      "Utilizo Git para controle de versão de projetos, trabalhando com branches, merges e colaborando em equipe através de plataformas como GitHub e GitLab.",
  },
  {
    id: 7,
    name: "Bootstrap",
    icon: "/imagens/habilidades/bootstrap.png",
    description: "Framework para estilização de design responsivos para css",
  },
  {
    id: 8,
    name: "Figma",
    icon: "imagens/habilidades/figma.png",
    description:
      "Uma ferramenta utilizada para criar mockoup de pre-visualizações de design de alta fidelidade",
  },
  // Adicione mais 3 habilidades para completar o grid 3x3
];

// Variavel para quando passar o mouse
const Skills = () => {
  // Estado para guardar a habilidade que está em hover
  const [activeSkill, setActiveSkill] = useState(null);

  const handleMouseEnter = (skill) => {
    setActiveSkill(skill);
  };

  const handleMouseLeave = () => {
    setActiveSkill(null);
  };

  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.container}>
        {/* Coluna da Esquerda: Grid de Habilidades */}
        <div className={styles.skillsGrid} onMouseLeave={handleMouseLeave}>
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className={styles.skillCard}
              onMouseEnter={() => handleMouseEnter(skill)}
            >
              <img src={skill.icon} alt={skill.name} />
            </div>
          ))}
        </div>

        {/* Coluna da Direita: Detalhes da Habilidade */}
        <div className={styles.skillDetails}>
          <h2 className={styles.title}>HABILIDADES</h2>

          <div className={styles.descriptionContainer}>
            {activeSkill ? (
              <>
                <h3>{activeSkill.name}</h3>
                <p>{activeSkill.description}</p>
              </>
            ) : (
              <p className={styles.defaultText}>
                PASSE O CURSO DO MOUSE <br /> PARA LER O CARD
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
