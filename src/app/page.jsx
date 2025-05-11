"use client";
import { useState, useEffect } from 'react';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import ScrollProgressBar from './Components/ScrollProgressBar';
import BackToTopButton from './Components/BackToTopButton';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';
import Certificates from './Components/Certif';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingPage';


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <ScrollProgressBar />
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experiences">
        <Timeline />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <BackToTopButton />
    </div>
  );
}