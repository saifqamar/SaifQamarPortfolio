import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import WorkDet from './components/WorkDetails';
import ProDetails from './pages/ProjectDetail';
import FooterSec from './components/FooterSec';


function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='SaifQamarPortfolio' element={<LandingPage />} />
        <Route exact path="/:cat/:id" element={<ProDetails />} />
      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
