import { useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './navbar.css';  
import './team.css';  
import './ekakshar.css';

import Footer from './footer';


const Ekakshar = () => {
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
      <div className="ekakshar-background-container">
      <div className="ekakshar-text-container">
        <div className="ekakshar-row ekakshar-heading-row">
          <h1 className="ekakshar-heading-text">EKAKSHAR: YOUR<br/> PARTNER IN PRODUCT<br/> DEVELOPMENT</h1>
        </div>
        <div className="ekakshar-row ekakshar-paragraph-row">
          <p className="ekakshar-paragraph-text">Designing Tomorrow's Reality Today.</p>
        </div>
      </div>
      </div>


      {/* second section */}
      <div className="ekakshar-cards-section-static">
  <div className="ekakshar-card-static ekakshar-card-static-left">
    <h2 className="ekakshar-card-heading">Precision and Quality in Every Print</h2>
    <p className="ekakshar-card-paragraph">
      At Ekakshar, we’re pioneering the future of 3D printing with cutting-edge technology that transforms ideas into reality.
      From precision engineering to creative design, our services are tailored to meet your unique needs. Experience the power of 3D printing and unlock limitless possibilities for your projects with Ekakshar.
    </p>
  </div>
  <div
    className="ekakshar-card-static ekakshar-card-static-right"
    style={{ backgroundImage: 'url("EkaksharLittleBoa.jpeg")' }}
  >
  </div>
</div>

        {/* Text Section */}
        
        <div className="ekakshar-two-column-container">
      <div className="ekakshar-column-left">
       
        <h4 className="ekakshar-subheading">TRANSFORM YOUR</h4>
        <h2 className="ekakshar-heading ">Ideas Into Reality</h2>
      </div>
      <div className="ekakshar-column-right">
        <Button href="/contact" className="ekakshar-button">Create now</Button>
      </div>
    </div>


{/* TWO COLUMN SCTION */}
<div className="ekakshar-container">
      <div className="ekakshar-card">
        <div className="ekakshar-card-row ekakshar-row-1">
          <h2>TRANSFORM YOUR PRODUCTION</h2>
        </div>
        <div className="ekakshar-stats-section">
      <div className="ekakshar-stat-card">
        <h3>Upto</h3>
        <h1>50%</h1>
        <p>cost reduction</p>
      </div>
      <div className="ekakshar-stat-card">
        <h3>Upto</h3>
        <h1>70%</h1>
        <p>Material waste cut</p>
      </div>
    </div>
        <div className="ekakshar-card-row ekakshar-row-3">
          <p>Transform your production with our advanced solutions, cutting material wastage by 70% and reducing costs by 50%. Experience exceptional efficiency and cost-effectiveness. Upgrade today to minimize waste and maximize savings with our innovative approach</p>
        </div>
      </div>
    </div>







{/* new section */}

<div className="ekakshar-container1" >
      <div className="ekakshar-card1">
        <div className="ekakshar-card1-row ekakshar-row-1">
          <h2>CRAFTING EFFICIENT SOLUTION</h2>
        </div>
        <div className="ekakshar-stats1-section">
      <div className="ekakshar-stat1-card">
        <h3>Upto</h3>
        <h1>90%</h1>
        <p>Speedy Output</p>
      </div>
      <div className="ekakshar-stat1-card">
        <h3>Upto</h3>
        <h1>40%</h1>
        <p>reduction in lead time</p>
      </div>
    </div>
        <div className="ekakshar-card1-row ekakshar-row-3">
          <p>Elevate your production by up to 90% and achieve a 40%<br/ >  reduction in lead time with our advanced solutions.<br/> Experience unparalleled efficiency and effectiveness.Upgrade from outdated  methods and start maximizing your output while streamlining your processes.</p>
        </div>
      </div>
    </div>

  {/* new section */}
 {/* Another sectiob above the footer */}
 <div className="wrapper">
      <h2 className="title-small">NUMBERS</h2>
      <h1 className="title-large">Success in numbers</h1>
      <div className="grid-container">
        <div className="item">
          <h2 className="item-title">50%</h2>
          <p className="item-description">Client Iteration Cycle</p>
        </div>
        <div className="item">
          <h2 className="item-title">48%</h2>
          <p className="item-description">Slashing Production Cost</p>
        </div>
        <div className="item">
          <h2 className="item-title">85%</h2>
          <p className="item-description">Material Conservation Rate</p>
        </div>
        <div className="item">
          <h2 className="item-title">90%</h2>
          <p className="item-description">Rapid Production cycle</p>
        </div>
      </div>
    </div>





    <div className="two-column-section-unique" style={{borderRadius:'10px'}}>
  <div className="container">
    <div className="row">
      {/* Left Column */}
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
        <h2 className="left-heading-unique">Ready to get started ?</h2>
        
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
        <h2 className="right-heading-unique">If solutions you seek, let's speak!</h2>
        <Button href="/contact" className="contact-button-unique">
          <span>Contact Us</span>
          <div className="arrow-icon-unique">{'>'}</div>
        </Button>
      </div>
    </div>
  </div>
</div>



<Footer/>

</div>

    );
};

export default Ekakshar;
