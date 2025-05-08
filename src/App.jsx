import React, { useState, useEffect } from 'react';
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check and set the theme based on localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []); // Empty array ensures this effect runs only once when the component mounts

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');  // Add dark class
    } else {
      document.documentElement.classList.remove('dark');  // Remove dark class
    }
  };

  return (
    <div className="App">
      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
