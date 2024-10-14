import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar1 from './pages/navbar'; 
import About from './pages/about';  
import Team from './pages/team';
import Ekakshar from './pages/ekakshar';
import Gaia from './pages/gaia';
import Contact from "./pages/contact"; 


function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/home" element={<Navbar1 />} />
      <Route path="/" element={<Navbar1 />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ekakshar" element={<Ekakshar />} />
      <Route path="/gaia" element={<Gaia />} />
      <Route path="/contact" element={  <Contact />} />
      </Routes>
    </Router>
   
  );
}

export default App;
