import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import WorkDet from './components/WorkDetails';
import ProDetails from './pages/ProjectDetail';
import FooterSec from './components/FooterSec';
import Photography from './pages/Photography';
// import ScrollReveal from 'scrollreveal';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function App() {

  useEffect(()=> {
    Aos.init();
  }, [])
  
  // ScrollReveal().reveal('.header', {easing: 'ease-in-out' });
  // ScrollReveal().reveal('.hero', { delay: 200, easing: 'ease-in-out', reset: true });
  // ScrollReveal().reveal('.heading', { easing: 'ease-in-out', reset: true });
  // ScrollReveal().reveal('.services', {easing: 'ease-in-out', reset: true  });
  // ScrollReveal().reveal('.cards', {easing: 'ease-in-out', reset: true  });
  // ScrollReveal().reveal('.about-sec', {easing: 'ease-in-out', reset: true  });
  // ScrollReveal().reveal('.contact-box', {easing: 'ease-in-out', reset: true  });
  // ScrollReveal().reveal('.projdetimg', {easing: 'ease-in-out', reset: true  });




  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/SaifQamarPortfolio" element={<LandingPage />} />
        <Route path="/SaifQamarPortfolio#work" element={<LandingPage />} />
        <Route path="/SaifQamarPortfolio/:cat/:id" element={<ProDetails />} />
        <Route path="/SaifQamarPortfolio/:cat" element={<Photography />} />

      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
