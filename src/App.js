import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import WorkDet from './components/WorkDetails';
import ProDetails from './pages/ProjectDetail';
import FooterSec from './components/FooterSec';
import Photography from './pages/Photography';
import SendMail from './components/SendMail';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function App() {

  useEffect(()=> {
    Aos.init();
  }, [])
  
  

  return (
    <BrowserRouter className="App controlling-flow">
      <Header />
      <Routes>
        <Route path="/SaifQamarPortfolio" element={<LandingPage />} />
        <Route path="/SaifQamarPortfolio#work" element={<LandingPage />} />
        <Route path="/SaifQamarPortfolio/:cat/:id" element={<ProDetails />} />
        <Route path="/SaifQamarPortfolio/:cat" element={<Photography />} />
        <Route path="/SaifQamarPortfolio/contact" element={<SendMail />} />

      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
