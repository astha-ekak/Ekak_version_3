import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './navbar.css';  
import './team.css';  
import './gaia.css';

import Footer from './footer';


const Gaia = () => {
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.navbar');
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      },
    
     []);





     
     const containerStyle = {
        textAlign: 'left',
        margin: '40px'
      };
    
      const h2Style = {
        
        fontSize: '18px',
        letterSpacing: '2px',
        fontWeight:'500'
      };
    
      const h1Style = {
        fontWeight: '400',
        fontSize: '85px'
      };
    
      const numbersGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginTop: '20px'
      };
    
      const numberItemStyle = {
        textAlign: 'center'
      };
    
      const numberH2Style = {
        fontSize: '80px',
        marginBottom: '10px',
        fontWeight:'400',
        textAlign:'left'
      };
    
      const numberPStyle = {
        fontSize: '16px',
        color: 'black',
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
        textAlign:'left'
      };


   


      const responsiveStyle = `
    @media (max-width: 768px) {
      h1 {
        font-size: 36px;
      }

      .number-box {
        flex: 1 1 100%;   
        margin: 10px 0;
      }

      .number {
        font-size: 36px;   // Adjust font size for smaller screens
      }

      .description {
        font-size: 14px;   // Smaller font for descriptions
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 28px;
      }

      .number {
        font-size: 28px;   // Smaller number font for very small screens
      }

      .description {
        font-size: 12px;   // Smaller font for descriptions
      }
    }
  `;
     


     
    return (
        <div>
            <Navbar fixed="top" variant="dark" expand="lg" className="navbar">
  <Container>
    <Navbar.Brand href="#home" className="brand_text">EKAK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler pl-5">
      <span className="navbar-toggler-icon"></span>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav" className="collapse-horizontal">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" >
            <span className="navbar-toggler-icon" ></span>
          </Navbar.Toggle>
      <Nav className="me-auto">
        <Nav.Link href="/home" className="nav_text">Home</Nav.Link>
        <NavDropdown title="Company" id="basic-nav-dropdown" className="nav_text">
          <NavDropdown.Item href="/about">About</NavDropdown.Item>
          <NavDropdown.Item href="/team">Team</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Solutions" id="basic-nav-dropdown" className="nav_text">
          <NavDropdown.Item href="https://argus.ekak.in/">Argus</NavDropdown.Item>
          <NavDropdown.Item href="/ekakshar">Ekakshar</NavDropdown.Item>
          <NavDropdown.Item href="/gaia">Gaia</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Resource" id="basic-nav-dropdown" className="nav_text">
          <NavDropdown.Item href="https://medium.com/@EkakInn">Blogs</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Button href="/contact" className="ml-auto custom-button" variant="light">Contact</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

           
      {/* Hero section */}
      <div className="gaia-background-container">
      <div className="gaia-text-container">
        <div className="gaia-row gaia-heading-row">
          <h1 className="gaia-heading-text">GAIA: SUSTAINABLE <br/>POWER SOLUTIONS</h1>
        </div>
        <div className="gaia-row gaia-paragraph-row">
          <p className="gaia-paragraph-text">Illuminating progress with nature powered innovations.</p>
        </div>
      </div>
      </div>


      {/* second section */}
      <div className="gaia-cards-section-static">
  <div className="gaia-card-static gaia-card-static-left">
    <h2 className="gaia-card-heading">Shaping<br/> Communities <br/>
    Sustainably</h2>
    <p className="gaia-card-paragraph">
    We believe in a sustainable future by harnessing cleaner, smarter technologies.<br/>
    Our diverse initiatives aim to reduce environmental impact and boost energy<br/> efficiency. From modernizing vital systems to pioneering renewable solutions,<br/> we are committed to innovations that benefit communities.
    </p>
  </div>
  <div
    className="gaia-card-static gaia-card-static-right"
    style={{ backgroundImage: 'url("Screenshot_20241012-133141~2.png")' }}
  >
  </div>
</div>

        {/* Text Section */}
        
        <div className="gaia-two-column-container">
      <div className="gaia-column-left">
       
        <h4 className="gaia-subheading">LIGHTING THE PATH</h4>
        <h2 className="gaia-heading ">For Brighter Tomorrow</h2>
      </div>
      <div className="gaia-column-right">
        <Button href="/contact" className="gaia-button">Create now</Button>
      </div>
    </div>


{/* TWO COLUMN SCTION */}
<div className="gaia-container1" style={{ backgroundImage:'url'}}>
      <div className="gaia-card1">
        <div className="gaia-card1-row gaia-row-1">
          <h2>POWERING THE FUTURE</h2>
        </div>
        <div className="gaia-stats1-section">
      <div className="gaia-stat1-card">
        <h3>Upto</h3>
        <h1>15k</h1>
        <p>kgs of CO2 saved</p>
      </div>
      <div className="gaia-stat1-card">
        <h3>Upto</h3>
        <h1>4.5L</h1>
        <p>INR saved annually</p>
      </div>
    </div>
        <div className="gaia-card1-row gaia-row-3">
          <p>Boost sustainability with our advance Atta Chaki, cutting environmental impact and costs. Save 5,400 litres of diesel annually and 2-2.5 hours daily in oil sourcing. Transition to eco-friendly methods with our energy-saving solutions and streamline your processes for long-term benefits.</p>
        </div>
      </div>
    </div>






{/* new section */}



<div className="gaia-container">
      <div className="gaia-card">
        <div className="gaia-card-row gaia-row-1">
          <h2>REVOLUTIONIZE YOUR ENERGY FUTURE</h2>
        </div>
        <div className="gaia-stats-section">
      <div className="gaia-stat-card">
        <h3>Upto</h3>
        <h1>90%</h1>
        <p>cost efficient</p>
      </div>
      <div className="gaia-stat-card">
        <h3>Upto</h3>
        <h1>300kg</h1>
        <p>CO2 reduce</p>
      </div>
    </div>
        <div className="gaia-card-row gaia-row-3">
          <p>Illuminate your future with solar-powered lamps. Each lamp cuts 300 kgs of CO₂ per year and eliminates cost. Produce 5 kw per year in comparison to traditional method. Enjoy long-term savings while supporting a sustainable planet. Switch today and light up your surroundings with solar energy.</p>
        </div>
      </div>
    </div>



   {/* Another sectiob above the footer */}
   <div className="wrapper">
      <h2 className="title-small">NUMBERS</h2>
      <h1 className="title-large">Success in numbers</h1>
      <div className="grid-container">
        <div className="item">
          <h2 className="item-title">500 kwh</h2>
          <p className="item-description">Clean Energy Produced</p>
        </div>
        <div className="item">
          <h2 className="item-title">15%</h2>
          <p className="item-description">Business Annual Growth Rate Increase</p>
        </div>
        <div className="item">
          <h2 className="item-title">157.4 kg</h2>
          <p className="item-description">CO2 emission saved</p>
        </div>
        <div className="item">
          <h2 className="item-title">90%</h2>
          <p className="item-description">Cost Efficient Method</p>
        </div>
      </div>
    </div>







<Footer/>

</div>

    );
};

export default Gaia;
