
import './Footer.css'; 

import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm'; // Import the NewsletterForm component

const Footer = () => {
  
  const lineStyle = { borderTop: '1px solid #ccc', margin: '20px 0' };
  const copyrightStyle = { textAlign: 'right', marginTop: '10px', fontSize: '16px', color: 'white' };
  return (
    <footer className="footer-container">
      
      <div className="footer-content">
        <div className="footer-column">
      
          
          {/* Replace the previous subscription form with NewsletterForm */}
          <NewsletterForm />
          
        </div>
        <div className="footer-column pl-5">
          <h3 style={{color:'white'}}>Site Map</h3>
          <Link to="/" style={{color:'white'}}>Home</Link>
          <Link to="/about" style={{color:'white'}}>About Us</Link>
          <Link to="/career" style={{color:'white'}}>Career</Link>
          <a target='_blank' style={{color:'white'}} href="https://medium.com/@EkakInn">Blog</a> 
          <Link to="/team" style={{color:'white'}}>Teams</Link>
          <Link to="/contact" style={{color:'white'}}>Contact</Link>
        </div>
        <div className="footer-column pl-5">
          <h3 style={{color:'white'}}>Social</h3>
          <a href="https://www.linkedin.com/company/ekakinn/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>LinkedIn</a>
          <a href="https://www.facebook.com/EkakInn?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>Facebook</a>
          <a href="https://www.instagram.com/ekak1nn?igsh=d3FhdnRtZTU1NDhw" target="_blank" rel="noopener noreferrer"  style={{color:'white'}} >Instagram</a>
          <a href="https://x.com/Ekak1nn?t=TG0nec2gKkL6SNQCh6XFwg&s=09" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>Twitter</a>
        </div>
        <div className="footer-column pl-5">
          <h3 style={{color:'white'}}>Get In Touch</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'white' }}>
            <li style={{color:'white'}}>113/216-A Swaroop Nagar,<br />Kanpur,Uttar Pradesh,<br />India-208002</li>
            <li style={{color:'white'}} className='emailclass'><span className='spanclass'>Email- </span>contact@ekak.in</li>
          </ul>
        </div>
        <div className="footer-column ">


        <div style={lineStyle}></div>
      {/* Add the copyright text */}
      <div style={copyrightStyle}>
        &copy; {new Date().getFullYear()} All rights reserved. Ekak Innovations
      </div>
      </div>
      </div>

     
    </footer>
  );
};

export default Footer;
