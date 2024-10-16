import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar1 from './pages/navbar'; 
import About from './pages/about';  
import Team from './pages/team';
import Ekakshar from './pages/ekakshar';
import Gaia from './pages/gaia';
import Contact from "./pages/contact"; 
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Accessibility from './pages/accessibility';


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
      <Route path="/terms" element={  <Terms/>} />
      <Route path="/privacy" element={  <Privacy/>} />
      <Route path="/accessibility" element={  <Accessibility/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
