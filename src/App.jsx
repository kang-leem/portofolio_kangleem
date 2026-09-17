import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Project';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#111827] min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <Education />
      <Experience />
      <Certificates />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
