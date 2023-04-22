import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Contact from './components/Contact';
import WorkDet from './components/WorkDetails';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services /> 
      <WorkDet />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
