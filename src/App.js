
import './App.css';

import Header from './components/layouts/header';
import Service from './components/sections/services';
import WhyChooseUs from './components/sections/whychooseus';
import Footer from './components/layouts/footer';
import Home from './components/sections/home';
import AppointmentDetails from './components/sections/appointmentDetails';
import About from './components/sections/about';
import Stat from './components/sections/stat';
import Whyus from './components/sections/whyus';
import Team from './components/sections/team';
import Testimonial from './components/sections/testimonal';
import Contact from './components/sections/contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const ball = document.querySelector(".pointer-ball");
    if (!ball) return; 

    let mouseX = 0, mouseY = 0;
    let ballX = 0, ballY = 0;
    const speed = 0.2; 

    const moveBall = () => {
      ballX += (mouseX - ballX) * speed;
      ballY += (mouseY - ballY) * speed;
      
      ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
      requestAnimationFrame(moveBall);
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX - ball.clientWidth / 2; 
      mouseY = e.clientY - ball.clientHeight / 2; 
    });

    moveBall();
    return () => {
      document.removeEventListener("mousemove", moveBall);
    };
  }, []);

  return (
    <>
      <div className="pointer-ball"></div>
      <div className="App">
        <Header />
        <Home />
        <AppointmentDetails />
        <About />
        <Service />
        <Stat />
        <WhyChooseUs />
        <Whyus />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;