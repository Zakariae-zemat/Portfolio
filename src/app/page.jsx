"use client";
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

export default function Home() {
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
      <section id="experiences">
        <Certificates />
      </section>
      <section id="experiences">
        <Contact />
      </section>
      <section id="experiences">
        <Footer />
      </section>
      <BackToTopButton />
    </div>
  );
}
