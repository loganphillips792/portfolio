import { useState } from 'react';
import Head from 'next/head'
import DarkModeToggle from '../components/DarkModeToggle';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import Projects from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import styled, { createGlobalStyle } from "styled-components";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes"
import { useDarkMode } from "../components/useDarkMode";

const Container = styled.div`
  height: 100vh;

  .darkmode-toggle-container {
    position: absolute;
    top: 2%;
    left: 2%;
    z-index: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    //color: #c9c9cb;
    font-family: Open-Sans;
    font-weight: 800;
  }
`;

export default function Home() {
  // const [theme, setTheme] = useState('light');

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // }

  return (
   <ThemeProvider theme={themeMode}>
      <Container>
      <GlobalStyle />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="darkmode-toggle-container">
        <DarkModeToggle toggleTheme={themeToggler}/>
      </div>
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <WorkExperienceSection />
      <Projects />
      <ContactSection />
    </Container>
   </ThemeProvider>
  )
}
