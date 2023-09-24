import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import WorkDet from '../components/WorkDetails';
import FooterSec from '../components/FooterSec';


function LandingPage() {
  return (
    <>

      <Hero />
      <Services /> 
      <About />
      <Contact />
    
    </>
  );
}

export default LandingPage;
