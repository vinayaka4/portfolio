'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experinces";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Volunteer from "@/components/Volunteer";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMOde] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(preferes-color-scheme:dark)').matches)) {
      setIsDarkMOde(true)
    } else {
      setIsDarkMOde(false)
    }

  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMOde={setIsDarkMOde} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experiences isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Volunteer isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
