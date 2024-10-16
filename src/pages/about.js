import { useState,useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './navbar.css';  
import './team.css';  
import './about.css';

import Footer from './footer';


const About = () => {
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





     const slidingSectionRef = useRef(null);
     const [isVisible, setIsVisible] = useState(false); 

   

     useEffect(() => {
         const handleScroll = () => {
             const section = slidingSectionRef.current;
             if (section) {
                 const { top } = section.getBoundingClientRect();
                 if (top < window.innerHeight) {
                     section.classList.add('section-visible');
                 } else {
                     section.classList.remove('section-visible');
                 }
             }
         };
 
         window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll);
     }, []);




     


     
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

            <div className="image-container">
                {/* The image is now handled via CSS background */}
                <div className="title-overlay">
                    <h1>FUELING TOMORROW WITH INNOVATION</h1>
                    <h3 style={{ marginTop: "20px" }}>Powered by 6 years of Green Thinking</h3>
                </div>
            </div>

            <div className="centered-container">
                <p className="text-center ml-5 p-3 mr-5" >
                    Founded by Mr. Shashank Misra 2018, Ekak was born out of <br /> the thirst for a challenge and a vision for environmentally <br /> and socially sustainable business.
                </p>
            </div>
      

        {/* second section */}
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card" style={{border:'none'}}>
                    <img src="Our Power Source.png" style={{borderRadius:'20px'}} className="card-img-top mid-image1" alt="Card image 1" />
                    <div className="card-body" >
                        <h5 className="card-title1" >Our Power Source</h5>
                        <p className="card-text111 mt-3" >Improve the life of each customer through sustainable interventions</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 ">
                <div className="card" style={{border:'none'}}>
                     <div className="col order-2 order-md-1">
                     <div className="card-body">
                        <h5 className="card-title" >Our North Star</h5>
                        <p className="card-text111 mt-3" >Make innovative technology affordable for all sections of society.</p>
                    </div>
                     </div>
                    
                     <div className="col order-1 order-md-2 mid-image"><img src="AboutUsNorthStar.jpeg" style={{borderRadius:'20px'}} className="card-img-top " alt="Card image 2" /></div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{border:'none'}}>
                    <img src="Our Ship.png" className="card-img-top mid-image1" style={{borderRadius:'20px'}} alt="Card image 3" />
                    <div className="card-body">
                        <h5 className="card-title1">Our Ship</h5>
                        <p className="card-text111 mt-3" >We break down complex problems into smaller, manageable subproblems for effective solutions.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        


{/* Third section */}
<div className="container about_container">
            <div className="row d-flex">
                <div className="col-md-5">
                    <h2>Diverse by Design, Built as One</h2>
                    <p className='mt-4'>Our collective culture was shaped through open conversations, where thoughts evolved and values crystallized into action. These values are the compass we turn to when seeking clarity, a guiding force that moves us forward.</p>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card_4">
                                
                                <div className="card-body">
                                    <h6 className="card-title my-4">INTEGRITY</h6>
                                    <p className="card-text">Always choose your thoughts & actions based on value.</p>
                                </div>
                                <img src="1__4_-removebg-preview (1).png" alt="Integrity Icon" className="card-image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card_4">
                               
                                <div className="card-body">
                                    <h6 className="card-title my-4">EXPLORE</h6>
                                    <p className="card-text">Always be curious to know more. Never stop exploring.</p>
                                </div>
                                <img src="4__3_-removebg-preview.png" alt="Explore Icon" className="card-image" /> {/* Replacing icon with image */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card_4">
                              
                                <div className="card-body">
                                    <h6 className="card-title my-4">CREATE IMPACT</h6>
                                    <p className="card-text">Small gestures make big impact. Create where it matters.</p>
                                </div>
                                <img src="3__3_-removebg-preview.png" alt="Create Impact Icon" className="card-image" /> {/* Replacing icon with image */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card_4">
                                
                                <div className="card-body">
                                    <h6 className="card-title my-4">CREATE IMPACT</h6>
                                    <p className="card-text">Cultivate meaningful work and relationships together.</p>
                                </div>
                                <img src="2__3_-removebg-preview.png" alt="Create Impact Icon" className="card-image" /> {/* Replacing icon with image */}
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>


        {/* fourth section */}
        <div className="container_07">
    <div className="row">
        <div className="col-md-4">
            <div className="image-container_07">
                <img src="Color437x536px324x223px_20241012_125035_000.jpeg" style={{borderRadius:'20px'}} className="main-image" alt="Main Image" />
                <div className="overlay_07">
                    <h2>Sept 2018</h2>
                    <h4>SABI LAMP </h4>
                    <p>Sagar Energy Solution partners with SABI to offer solar-powered lighting, boosting access to sustainable energy solutions.</p>
                    <a href="/gaia" target="_blank" rel="noopener noreferrer">
    <button className="btn btn-color">Know More</button>
  </a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="image-container_07">
                <img src="DaveEkakWebsit.jpeg" style={{borderRadius:'20px'}} className="main-image" alt="Main Image" />
                <div className="overlay_07">
                    <h2>April 2021</h2>
                   <h4>DAVE PROTOTYPING</h4>
                    <p>Dedicated to  develop innovative solutions for enhancing road safety through cutting edge technology.</p>
                    <a href="https://argus.ekak.in/logistics/" target="_blank" rel="noopener noreferrer">
    <button className="btn btn-color">Know More</button>
  </a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="image-container_07">
                <img src="EkaksharAboutU.jpeg" style={{borderRadius:'20px'}} className="main-image" alt="Main Image" />
                <div className="overlay_07">
                    <h2>Oct 2022</h2>
                    <h4>3D PRINTING </h4>
                    <p>Ekak began it's journey as a specialized 3D printing services, focusing on delivering high quality prototype and solution.</p>
                    <a href="/ekakshar" target="_blank" rel="noopener noreferrer">
    <button className="btn btn-color">Know More</button>
  </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div ref={slidingSectionRef} className={`container_07  sliding-section ${isVisible ? 'section-visible' : ''}`}>
    <div className="row">
        <div className="col-md-6">
            <div className="bg-container" style={{ backgroundImage: "url('AttaChakiAboutU.jpeg')" , borderRadius:'20px'}}>
                <div className="content-overlay">
                    <h2>May 2019</h2>
                    <p>ATTA CHAKI PROJECT.</p>
                    <p className="P_tag">This project aimed at improving their product<br/>line.The system incorporates modern<br/> technology ensuring efficient processing.</p>
                    <a href="/gaia" target="_blank" rel="noopener noreferrer">
    <button className="btn btn-color">Know More</button>
  </a>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="bg-container" style={{ backgroundImage: "url('ArgusAboutU.jpeg')",borderRadius:'20px' }}>
                <div className="content-overlay">
                    <h2>Mar 2022</h2>
                    <p>AUTOMATING WORK.</p>
                    <p className="P_tag">By leveraging advanced algorithms and ML, Argus<br/> was created to enhance operational efficiency<br/> and accuracy across various industries.</p>
                    <a href="/https://argus.ekak.in" target="_blank" rel="noopener noreferrer">
    <button className="btn btn-color">Know More</button>
  </a>
                </div>
            </div>
        </div>
    </div>
</div>






   {/* Another sectiob above the footer */}
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
        <button className="contact-button-unique">
          <span>Contact Us</span>
          <div className="arrow-icon-unique">{'>'}</div> {/* This is the right arrow */}
        </button>
      </div>
    </div>
  </div>
</div>








<Footer/>

</div>

    );
};

export default About;
