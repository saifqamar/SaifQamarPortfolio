import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import WorkDet from './components/WorkDetails';
import ProDetails from './pages/ProjectDetail';
import FooterSec from './components/FooterSec';
import Photography from './pages/Photography';
import Projects from './pages/Projects';
import SendMail from './components/SendMail';
import RedoilCaseStudy from './pages/uiux/RedoilCaseStudy';
import BureatCaseStudy from './pages/uiux/BureatCaseStudy';
import BookBudsCaseStudy from './pages/uiux/BookBudsCaseStudy';
import About from './pages/About';
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
        <Route path="/SaifQamarPortfolio/projects" element={<Projects />} />
        <Route path="/SaifQamarPortfolio/about" element={<About />} />
        <Route path="/SaifQamarPortfolio/:cat" element={<Photography />} />
        <Route path="/SaifQamarPortfolio/contact" element={<SendMail />} />
        <Route path="/SaifQamarPortfolio/:cat/redoil-case-study" element={<RedoilCaseStudy />} />
        <Route path="/SaifQamarPortfolio/:cat/bureat-case-study" element={<BureatCaseStudy />} />
        <Route path="/SaifQamarPortfolio/:cat/bookbuds-case-study" element={<BookBudsCaseStudy />} />

      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
