import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import {BrowserRouter as Router, Route, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services /> 
    </div>
  );
}

export default App;
