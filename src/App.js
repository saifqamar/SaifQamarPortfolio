import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import WorkDet from './components/WorkDetails';
import ProDetails from './pages/ProjectDetail';
import FooterSec from './components/FooterSec';
import Photography from './pages/Photography';


function App() {
  

  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/SaifQamarPortfolio" element={<LandingPage />} />
        <Route path="/SaifQamarPortfolio/:cat/:id" element={<ProDetails />} />
        <Route path="/SaifQamarPortfolio/:cat" element={<Photography />} />

      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
