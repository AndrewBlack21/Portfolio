import React, { useEffect, useState } from "react";
import { useTheme } from "./hook/useTheme";
import "./index.css";
import Header from "./assets/components/header/Header";
import Hero from "./assets/components/hero/Hero";
import Sobre from "./assets/components/sobre/Sobre";
import Skills from "./assets/components/habilidades/Skills";
import Projetos from "./assets/components/projetos/Projetos";
import Services from "./assets/components/services/Services";
import Footer from "./assets/components/footer/Footer";
import FadeInSection from "./assets/components/Animation/FadeInSection";
import VirtualCard from "./assets/components/virtualCard/VirtualCard";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isCardMode, setIsCardMode] = useState(
    () => window.location.hash.toLowerCase() === "#cartao"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsCardMode(window.location.hash.toLowerCase() === "#cartao");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (isCardMode) {
    return <VirtualCard />;
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>

        <FadeInSection>
          <Sobre />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>

        <FadeInSection>
          <Projetos />
        </FadeInSection>

        <FadeInSection>
          <Services />
        </FadeInSection>

        <FadeInSection>
          <Footer />
        </FadeInSection>
      </main>
    </>
  );
}

export default App;
