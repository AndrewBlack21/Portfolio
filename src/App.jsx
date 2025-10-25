import React from "react";
import { useTheme } from "./hook/useTheme";
import "./index.css";
import Header from "./assets/components/header/Header";
import Hero from "./assets/components/hero/Hero";
import Sobre from "./assets/components/sobre/Sobre";
import Skills from "./assets/components/habilidades/Skills";
import Projetos from "./assets/components/projetos/Projetos";
import OtherProjects from "./assets/components/Allprojects/OtherProjects";
import Services from "./assets/components/services/Services";
import Footer from "./assets/components/footer/Footer";
import FadeInSection from "./assets/components/Animation/FadeInSection";

function App() {
  const { theme, toggleTheme } = useTheme();

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
        {/* <OtherProjects /> */}
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
