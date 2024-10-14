import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './navbar.css';  
import './team.css';  

import Footer from './footer';

function Team() {
    const [isZoomed, setIsZoomed] = useState(false);
    const [isToggled, setIsToggled] = useState(false);



    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

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
    }, []);


    const [activeCards, setActiveCards] = useState('leadership');
    const [activeCard, setActiveCard] = useState(null);

    const toggleCards = (category) => {
        setActiveCards(activeCards === category ? null : category);
    };

    const showOverlay = (card) => {
        setActiveCard(activeCard === card ? null : card);
    };
   
    







    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to handle window resize
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    // Set up event listener for resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine styles based on screen width
    const getImageStyles = () => {
        if (screenWidth <= 768) {
            return {
                borderRadius: '15px',
                marginLeft: '0', // No margin on small screens
                width: '90vw',
                height: isZoomed ? '100vh' : '50vh',
                transition: 'transform 0.5s ease',
                transform: isZoomed ? 'scale(1.2)' : 'scale(1)',
            };
        } else {
            return {
                borderRadius: '15px',
                marginLeft: '150px',
                width: '65vh',
                height: isZoomed ? '100vh' : '80vh',
                transition: 'transform 0.5s ease',
                transform: isZoomed ? 'scale(1.2)' : 'scale(1)',
            };
        }
    };

    

    return (
        <>
            {/* Navbar */}
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
      <Button className="ml-auto custom-button" variant="light">Contact</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

            <div className="container_top">
                {/* Content Section */}
                <div className="content m-4">
                <h1 className="mt-5 responsive-heading" >
    LIVE LOUD <br />WORK LOUDER
</h1>

                    <p className="mt-3">
                        Where Innovation isn't just a buzzword-it's a way<br /> of life. At Ekak, it is more than just a company, it's <br />where passion meets purpose.
                    </p>
                    <div className="toggle-switch mt-3" style={{ marginLeft: '50px', }}>
                        <input 
                            type="checkbox" 
                            id="toggle" 
                            checked={isToggled} 
                            onChange={handleToggle} 
                        />
                        <label htmlFor="toggle" className="switch"></label>
                    </div>
                </div>
                {isToggled && (
                        <p
                            className="image-description"
                            id="imageDesc"
                            style={{
                                position: 'absolute',
                                bottom: '40px',
                                right: '520px',
                               fontSize:'12px',
                                backgroundColor: 'transparent',
                                color: 'black',
                                padding: '0px',
                                display: isToggled ? 'block' : 'none', // Ensures proper display
                                textAlign:'right',
                                alignItems:'right',
                                
                            }}
                        >
                            We're the dreamer, the doer and very occasional<br /> coffee spiller who are on a mission to make every<br /> project a masterpiece
                        </p>
                    )}

                {/* Image Section */}
                <div className="image-container_top">
                <div>
            <img
                id="photo"
                style={getImageStyles()}
                src="Team Page Hero Section.png"
                alt="Sample Photo"
                onClick={() => setIsZoomed(!isZoomed)} // Toggle zoom
            />
        </div>
        </div>
            </div>




            {/* team members section  */}

            <div className="mavericks-container">
            <h1>Get to know the Mavericks<br /> who are making it all happen</h1>
            <div className="mavericks-columns">
                <div className="mavericks-column">
                    <button className="mavericks-btn" onClick={() => toggleCards('leadership')}>LEADERSHIP</button>
                </div>
                <div className="mavericks-column">
                    <button className="mavericks-btn" onClick={() => toggleCards('business')}>BUSINESS</button>
                </div>
                <div className="mavericks-column">
                    <button className="mavericks-btn" onClick={() => toggleCards('technology')}>TECHNOLOGY</button>
                </div>
            </div>

            <div className="mavericks-cards-container" style={{ display: activeCards ? 'flex' : 'none' }}>
            <div className="mavericks-cards" style={{ display: activeCards === 'leadership' ? 'flex' : 'none' }}>
                    <div className="mavericks-card" onClick={() => showOverlay('leader1')}>
                        <img src="shashank.png" alt="Leader Image" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
                            <p>Leader Card 1: Detailed information goes here...</p>
                        </div>
                        <div className="mavericks-hover-overlay">
                            <p><span className='p_tag1'>CEO</span><br /><span className='p_tag'>who loves to tackle new innovation and idea, been innovating since birth. (It seems)</span><br />
                            <button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p>
                            
                        </div>
                    </div>
                </div>

                <div className="mavericks-cards" style={{ display: activeCards === 'business' ? 'flex' : 'none' }}>
                    <div className="mavericks-card" onClick={() => showOverlay('business1')}>
                        <img src="neelakshi.png" alt="Business Image 1" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
        <p>Leader Card 1: Detailed information goes here...</p>
    </div>
    <div className="mavericks-hover-overlay">
    <p> <span className='p_tag1'>GROWTH ASSOCIATE</span><br />
    Turns bland ideas into brilliant concepts with a dash of creativity. They’re the spark that gets the brainstorming sessions buzzing.<br />
    <button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p>
        
    </div>
                    </div>
                    <div className="mavericks-card" onClick={() => showOverlay('business2')}>
                        <img src="Unnati Bajpai Team Page.png" alt="Business Image 2" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
        <p>Leader Card 1: Detailed information goes here...</p>
    </div>
    <div className="mavericks-hover-overlay">
   <p> <span className='p_tag1'>BUSINESS DEVELOPER</span><br />
    Brings positivity and energy to every project. They make work enjoyable and are always ready to lend a hand or a laugh.<br />
    <button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p>
    </div>
                    </div>
                    <div className="mavericks-card" onClick={() => showOverlay('business3')}>
                        <img src="Anjali Maurya Team Page.png" alt="Business Image 3" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
        <p>Leader Card 1: Detailed information goes here...</p>
    </div>
    <div className="mavericks-hover-overlay">
   <p><span className='p_tag1'>BUSINESS DEVELOPER</span>< br />

A quiet powerhouse behind the scenes. Shy? Maybe. But their wit and hidden fun always brighten the workday!<br /> <button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p> 
    </div>
                    </div>
                </div>

                <div className="mavericks-cards technology_card" style={{ display: activeCards === 'technology' ? 'flex' : 'none',
                 }} >
                    <div className="mavericks-card" onClick={() => showOverlay('tech1')} >
                        <img src="Mohd. Numan Photo Team age.png" alt="Tech Image 1" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
        <p>Leader Card 1: Detailed information goes here...</p>
    </div>
    <div className="mavericks-hover-overlay">
        <p><span className='p_tag1'>FULL STACK DEVELOPER</span><br />Master of front and back-end. When not crafting user experiences, Numan balances his diet with equal parts code and cookies.
       <br /><button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p>
    </div>
                    </div>
                    <div className="mavericks-card" onClick={() => showOverlay('tech2')}>
                        <img src="Astha Photo Team Page.png" alt="Tech Image 2" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
        <p>Leader Card 1: Detailed information goes here...</p>
    </div>
    <div className="mavericks-hover-overlay">
        <p><span className='p_tag1'>PYTHON DEVELOPER</span><br />
        Sweet and reliable, Astha blends code with a touch of charm, always delivering results with a smile.
        <br /><button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p>
    </div>
                    </div>
                    <div className="mavericks-card" onClick={() => showOverlay('tech3')}>
                        <img src="Richa Shukla (1).png" alt="Tech Image 3" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
        <p>Leader Card 1: Detailed information goes here...</p>
    </div>
    <div className="mavericks-hover-overlay">
        <p><span className='p_tag1'>PYTHON DEVELOPER</span><br />
        Can tackle any issue with a smile and a can-do attitude. When there’s a problem, they’re on it, turning headaches into smooth sailing
        <br /><button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p>
    </div>
                    </div>
                    <div className="mavericks-card" onClick={() => showOverlay('tech4')}>
                        <img src="Amitesh Photo.png" alt="Tech Image 4" />
                        <div className={`mavericks-overlay ${activeCard === 'leader1' ? 'active' : ''}`}>
        <p>Leader Card 1: Detailed information goes here...</p>
    </div>
    <div className="mavericks-hover-overlay">
        <p><span className='p_tag1'>PYTHON DEVELOPER</span><br />
        Sweet and reliable, Astha blends code with a touch of charm, always delivering results with a smile.
        <br /><button  style={{borderRadius:'20px',marginTop:'20px'}}>Know more</button></p>
    </div>
                    </div>
                </div>
            </div>
        </div>


        {/* PURPOSE ,PEOPLE SECTION */}
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-90">
            <div className="text-center">
    <h1 className="mb-3 heading-text" style={{ marginTop: '100px' }}>
        Perks, People, and Purpose
    </h1>
    <p className="lead paragraph-text">
        When you join our team, you're not only diving into exciting work but
        <br />
        also into a culture that values your growth, creativity and well-being.
    </p>
</div>

            </div>

            <div className="container_lower m-3">
                <div className="card_lower pt-5">
                    <h3 style={{ marginTop: '15px' }}>Fast Growing Company</h3>
                    <p style={{ marginTop: '20px' }}>We’re at the inflection point to achieve accelerated growth.</p>
                </div>
                <div className="card_lower">
                    <h3 style={{ marginTop: '45px'}}>Great Colleagues</h3>
                    <p style={{ marginTop: '25px' }}>Closely tied and supportive team</p>
                </div>
                <div className="card_lower pt-5">
                    <h3 style={{ marginTop: '15px'}}>Don’t Stop Learning</h3>
                    <p style={{ marginTop: '25px'}}>An environment that encourages continuous learning.</p>
                </div>
                <div className="card_lower pt-5">
                    <h3 style={{ marginTop: '15px' }}>Free Snacks of Your Choice</h3>
                    <p style={{ marginTop: '25px'}}>We know you're a foodie at heart, which is why we offer free snacks.</p>
                </div>
            </div>

            <div className="container_lower m-3">
            <div className="card_lower1"></div>
                <div className="card_lower">
                    <h3 style={{ marginTop: '55px' }}>Work-Life Balance</h3>
                    <p style={{ marginTop: '25px'}}>We prioritize work, but we never put it before life.</p>
                </div>
                <div className="card_lower pt-5">
                    <h3 style={{ marginTop: '15px'}}>Cross Domain Exposure</h3>
                    <p style={{ marginTop: '25px' }}>A highly passionate team of business and technology personnel.</p>
                </div>
                <div className="card_lower1"></div>
            </div>
        </div>


        {/* want to join us */}
        <div className="unique-container my-5 m-3">
    <h1 className="unique-title">WANT TO JOIN US?</h1>
    <p className="unique-paragraph">Drop your resume capturing what kind of role you are applying for</p>
    <button className="button1">Apply Now</button>
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
        <button className="contact-button-unique">
          <span>Contact Us</span>
          <div className="arrow-icon-unique">{'>'}</div> {/* This is the right arrow */}
        </button>
      </div>
    </div>
  </div>
</div>








<Footer/>

        </>
    );
}

export default Team;
