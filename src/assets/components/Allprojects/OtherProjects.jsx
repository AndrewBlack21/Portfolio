import React from "react";
import styles from "./OtherProjects.module.css";

// Criar variavel em lista com os itens

const OtherProjectsData = [
  {
    id: 1,
    title: "Em breve",
    image: "/imagens/Projetos/coming_soon.png",
    link: "",
    discreption: "Em Desenvolvimento",
  },
  {
    id: 2,
    title: "To Do List",
    image: "/imagens/Projetos/to-do-list.png",
    link: "",
    discreption: "Em Desenvolvimento",
  },
  {
    id: 3,
    title: "Projeto Treino Femino",
    image: "/imagens/Projetos/projeto treino.png",
    link: "",
    discreption: "Em Desenvolvimento",
  },
  {
    id: 4,
    title: "Gerador de QR Code",
    image: "/imagens/Projetos/generate-qr-code.png",
    link: "",
    discreption: "Em Desenvolvimento",
  },
  {
    id: 5,
    title: "Relogio Mundial",
    image: "/imagens/Projetos/relogio mundial.png",
    link: "",
    discreption: "Em Desenvolvimento",
  },
];

const OtherProjects = () => {
  return (
    <section id="outros-projetos" className={styles.otherProjects}>
      <h2 className={styles.title}>Todos os Projetos</h2>
      <div className={styles.projectsGrid}>
        {OtherProjectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            {/* ÁREA DA IMAGEM (ou placeholder) */}
            <div className={styles.imageContainer}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              ) : (
                <div className={styles.placeholder}></div> // Placeholder para cards sem imagem
              )}
            </div>

            {/* ÁREA DO CONTEÚDO (título) */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
