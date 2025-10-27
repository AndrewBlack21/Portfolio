import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";

const Services = () => {
  const { t } = useTranslation();

  // Os dados agora vêm do arquivo de tradução
  const servicesData = [
    {
      id: 1,
      titleKey: "services.developmentTitle",
      descriptionKey: "services.developmentDescription",
    },
    {
      id: 2,
      titleKey: "services.designTitle",
      descriptionKey: "services.designDescription",
    },
  ];

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.servicesContainer}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{t(service.titleKey)}</h3>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                {t(service.descriptionKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
