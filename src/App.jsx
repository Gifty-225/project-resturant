import React, { useState, useEffect } from 'react';
import Navbar from './Container/Navbar';
import Hero from './Components/Hero';
import Footer from './Container/Footer';
import Popup from './Components/Popup';
import About from './Layout/About';
import Services from './Layout/Services';
import Banner from './Components/Banner';
import WhyChoose from './WhyChoose/WhyChoose';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [showPopup, setShowPopup] =React. useState
  (false);

  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      
      <About HandlePopup={HandlePopup} />
      {/* If duplicate Banner is not needed, remove one */}
      <Footer />
      <Services />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
