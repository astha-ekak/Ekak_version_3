import {  useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Card from 'react-bootstrap/Card'; 
import './navbar.css';  
import Footer from './footer';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
function Navbar1() {
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
 
  






  return (
    <>
      <div className="section-with-background">
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
      <Button href="/contact" className="ml-auto custom-button" variant="light">Contact</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>





{/* Our efficient solutions  */}
        <Container className="text-section">
          <div className="text-content">
            <h1 className='p-2'>ACCESSIBILITY <br />THROUGH <br />INNOVATIONS</h1>
            <Button href="/contact"
  className="get-started-button" 
  variant="primary" 
  style={{ 
    marginTop: '30px', 
    fontSize: '16px', 
    backgroundColor: 'white', 
    color: 'black', 
    border: 'none', 
    borderRadius: '50px', 
     
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' ,
    width:'200px'
  }}
>
  Get Started
  <span 
    className="circle" 
    style={{ 
      width: '30px', 
      height: '30px', 
      backgroundColor: 'black', 
      borderRadius: '50%', 
      marginLeft: '50px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      color: 'white', 
      fontSize: '18px' ,
      
    }}
  >
    {'>'}
  </span> 
</Button>

            <p className='p-2'>We are dedicated to creating innovative<br /> solutions for today's most pressing<br /> challenges.</p>
          </div>
        </Container>
      </div>
      
        <div className="new-section">
  <Container>
    <Row className="align-items-center">
    
      <Col md={6}>
        <div className="text-column">
          <p className="small-text">CATALYSING GLOBAL TRANSFORMATION WITH</p>
          <h2 className="large-text">Our Efficient Solutions</h2>
          <p className="paragraph-text">
            Ekak Innovations is a product development firm. We build solutions that have a positive impact on the lives of each customer, thereby accelerating & bringing sustainability to the mainstream.
          </p>
        </div>
      </Col>

      <Col md={6}>
  <div className="card-stack slide-card-stack" style={{ position: 'relative', maxHeight: '570px', overflowY: 'auto' }}>
    <style>
      {`
        .slide-card-stack::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
          
        }
     
        .slide-card {
          
          border-radius: 30px;
          display: flex;
          align-items: left;
          justify-content: left;
          text-align: left;
          margin-top: 20px;
          padding: 20px;
          transition: all 0.3s ease;
          color: white;
          height:auto;
        }
        .slide-card h2 {
          font-size: 50px;
        }
        .slide-card h3 {
          font-size: 50px;
          margin-top: 20px;
        }
        .slide-card p {
          margin-top: 30px;
          font-size: 20px;
        }
        .slide-button {
          background-color: black;
          color: white;
          margin-top: 10px;
          border-radius: 10px;
          padding: 10px 30px;
        }

        /* Media Query for screens smaller than 768px (e.g. mobile devices) */
        @media (max-width: 768px) {
          .slide-card {
            padding: 0px;
          }
          .slide-card h2 {
            font-size: 30px;
          }
          .slide-card h3 {
            font-size: 30px;
            margin-top: 10px;
          }
          .slide-card p {
            margin-top: 20px;
            font-size: 16px;
          }
          .slide-button {
            padding: 8px 20px;
          }
        }

        /* Media Query for screens smaller than 576px (smaller mobile devices) */
        @media (max-width: 576px) {
          .slide-card {
            padding: 0px;
          }
          .slide-card h2 {
            font-size: 24px;
          }
          .slide-card h3 {
            font-size: 24px;
            margin-top: 8px;
          }
          .slide-card p {
            margin-top: 15px;
            font-size: 14px;
          }
            
          .slide-button {
            padding: 4px 10px;
            margin:0px;
          }
        }
      `}
    </style>

    {/* First Card */}
    <Card className="slide-card" style={{ backgroundColor: '#0097b2' }}>
      <Card.Body>
        <Card.Text>
          <h2>01</h2>
          <h3>ARGUS</h3>
          <p>
          Argus uses AI and computer vision to boost efficiency and cut costs. It ensures end-to-end traceability and quality control throughout the product lifecycle. Discover how Argus can optimize your processes with complete visibility and control.
          </p>
          <Button className="slide-button mt-4" href="https://argus.ekak.in">Know More</Button>
        </Card.Text>
      </Card.Body>
    </Card>

    {/* Second Card */}
    <Card className="slide-card" style={{ backgroundColor: '#BADA55' }}>
      <Card.Body>
        <Card.Text>
          <h2>02</h2>
          <h3>Ekakshar</h3>
          <p>
          Ekakshar started as a 3D printing service and now offers full product development, from prototyping to AI model creation. Let us help bring your ideas to life with our tailored solutions. Explore more about Ekakshar today.
          </p>
          <Button className="slide-button mt-5" href="/ekakshar">Know More</Button>
        </Card.Text>
      </Card.Body>
    </Card>

    {/* Third Card */}
    <Card className="slide-card" style={{ backgroundColor: '#006577' }}>
      <Card.Body>
        <Card.Text>
          <h2>03</h2>
          <h3>Dave</h3>
          <p>
            Our advanced road safety product tracks driver behaviour in real-time using machine learning. With GPS tracking, distraction alerts, and behaviour assessments, keep your fleet safe and responsible with us. Contact Us now to get started with a safer solution!
          </p>
          <Button className="slide-button mt-5" href="https://argus.ekak.in/logistics">Know More</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</Col>

    </Row>
  </Container>
        </div>


{/* Third section */}
        <div className="unique-section">
      <Container>
        {/* Section Heading */}
        <h2 className="unique-section-heading">WE SPECIALISED AT</h2>

        {/* Row with 3 Columns */}
        <Row>
          {/* First Column */}
          <Col md={4}>
            <div className="unique-content-column">
              <img src="Ekak Website 3.0_20241013_133938_0000.png" alt="" className="unique-service-image" />
              <h3 className="unique-column-heading">Renewable Energy</h3>
              <p className="unique-column-subheading">We believe in the power of renewable<br class="hide-for-small" /> energy to transform communities and<br class="hide-for-small" /> improve lives. With years of experience in<br class="hide-for-small" /> this sector, we specialised in providing<br class="hide-for-small" /> innovative green solution, tailored to<br class="hide-for-small" />diverse needs.</p>
            </div>
          </Col>

          {/* Second Column */}
          <Col md={4}>
            <div className="unique-content-column">
              <img src="Ekak Website 3.0_20241013_134002_0000.png" alt="" className="unique-service-image" />
              <h3 className="unique-column-heading">Product Development</h3>
              <p className="unique-column-subheading">Whether you need a one-of-a-kind prototype,<br class="hide-for-small" /> a small production run, or a expert<br class="hide-for-small" /> consulting in same in the sector we can help<br class="hide-for-small" /> you with product  development quickly,<br class="hide-for-small" /> efficiently,  & cost-effectively.</p>
            </div>
          </Col>

          {/* Third Column */}
          <Col md={4}>
            <div className="unique-content-column">
              <img src="Ekak Website 3.0_20241013_134016_0000.png" alt="" className="unique-service-image" />
              <h3 className="unique-column-heading">Digital Transformations</h3>
              <p className="unique-column-subheading">Our products enhance safety in factories<br class="hide-for-small" /> and warehouses, improve road safety, and<br class="hide-for-small" />  optimize supply chain tracking. Whether you<br class="hide-for-small" /> aim to prevent accidents, boost productivity, <br class="hide-for-small" />or ensure compliance , we got it all.</p>
            </div>
          </Col>
        </Row>
      </Container>
        </div>

{/* Image section */}
        <div className="full-background-section">
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <Col>
                        <div className="full-background-image"></div>
                    </Col>
                </Row>
            </Container>
        </div>

{/* Awards section */}

<div className="four-cards-section" style={{ marginTop: '60px' ,fontFamily:'"Poppins",sans-serif'}}>
  <Container>
    <Row>
      {/* Card 1 */}
      <Col md={3} sm={6} xs={12}>
        <Card className="custom-card" style={{ 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
          border: 'none', 
          borderRadius: '8px', 
          transition: 'box-shadow 0.3s ease', 
          height: '280px', 
          textAlign:'center'
      }}>
          <Card.Img 
            variant="top" 
            src="Color (437 x 536 px) (324 x 223 px)_20241013_134240_0000.png"
            alt="" 
            style={{ 
              boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
              border: 'none', 
              maxWidth: '100%', 
              height: '160px', 
              objectFit: 'cover' 
            }} 
          />
          <Card.Body className="text-center" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%' 
          }}>
            <Card.Title className="award_text" style={{ fontSize: '22px' ,textAlign:'center'}}>July 2020</Card.Title>
            <Card.Text className="award_name" style={{ fontSize: '16px', color: '#555',textAlign:'center',fontFamily:'"poppins",sans-serif' }}>Pitch at ITS<br/> Hamburg Competition</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col md={3} sm={6} xs={12}>
        <Card className="custom-card" style={{ 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
          border: 'none', 
          borderRadius: '8px', 
          transition: 'box-shadow 0.3s ease', 
          height: '280px' // Fixed height
        }}>
          <Card.Img 
            variant="top" 
            src="Color (437 x 536 px) (324 x 223 px)_20241013_134519_0001.png"
            alt="" 
            style={{ 
              
              boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
              border: 'none', 
              maxWidth: '100%', 
              height: '160px', 
              objectFit: 'cover',
               
            }} 
          />
          <Card.Body className="text-center" style={{ 
            textAlign:'center',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%' 
          }}>
            <Card.Title className="award_text" style={{ fontSize: '22px',textAlign:'center' }}>June 2020</Card.Title>
            <Card.Text className="award_name" style={{ fontSize: '16px', color: '#555' ,textAlign:'center'}}>2nd Runner-up in Smart Car<br />Category (NASCOM-NIPP)</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col md={3} sm={6} xs={12}>
        <Card className="custom-card" style={{ 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
          border: 'none', 
          borderRadius: '8px', 
          transition: 'box-shadow 0.3s ease', 
          height: '280px' // Fixed height
        }}>
          <Card.Img 
            variant="top" 
            src="Color (437 x 536 px) (324 x 223 px)_20241013_134652_0000.png"
            alt="" 
            style={{ 
              boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
              border: 'none', 
              maxWidth: '100%', 
              height: '160px', 
              objectFit: 'cover' 
            }} 
          />
          <Card.Body className="text-center" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%' // Make sure body fills card
          }}>
            <Card.Title className="award_text" style={{ fontSize: '22px',textAlign:'center' }}>Nov 2020</Card.Title>
            <Card.Text className="award_name" style={{ fontSize: '16px', color: '#555',textAlign:'center' }}>NVIDIA Inception Program: Community Member</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 4 */}
      <Col md={3} sm={6} xs={12}>
        <Card className="custom-card" style={{ 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
          border: 'none', 
          borderRadius: '8px', 
          transition: 'box-shadow 0.3s ease', 
          height: '280px' // Fixed height
        }}>
          <Card.Img 
            variant="top" 
            src="Color (437 x 536 px) (324 x 223 px)_20241013_134718_0000.png"
            alt="" 
            style={{ 
              boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
              border: 'none', 
              maxWidth: '100%', 
              height: '160px', 
              objectFit: 'cover' 
            }} 
          />
          <Card.Body className="text-center" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%' // Make sure body fills card
          }}>
            <Card.Title className="award_text" style={{ fontSize: '22px',textAlign:'center' }}>July 2018 - Feb 2019</Card.Title>
            <Card.Text className="award_name" style={{ fontSize: '16px', color: '#555',textAlign:'center' }}>Pre-Incubate, IIM Bangalore <br />(NSRCEL).</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>




{/* Text section */}
<div className="unique-message-section">
    <Container>
      <Row>
        <Col md={12}>
          <p className="unique-message-text">
            Through a wide range of work in different sectors,<br class="hide-for-small" /> from pilot studies to comprehensive demos, each<br class="hide-for-small"/> endeavour has contributed to our growth, driving<br class="hide-for-small" /> us to constantly <span style={{color:'#006577'}}>redefine the boundaries of<br class="hide-for-small" /> innovation</span>.Our commitment to pushing limits <br class="hide-for-small"/>shapes the future of our work.
          </p>
          <Button  href="/about" className="discover-btn" >
            Discover Now
            <span className="btn-circle">
              <span className="arrow-symbol" >{`>`}</span>
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
      </div>


{/* sTACKING SCETION */}




<section className="priority-section"><div className="priority-content"><h2>WITH EKAK</h2><h1>Your Needs, Our Priority</h1><p> We are dedicated to putting your needs at the forefront of everything we do. Our approach is centered on understanding and addressing your unique challenges, ensuring tailored solutions that deliver exceptional results. With a relentless focus on your success, we turn your vision into reality with unwavering commitment and care. </p></div><div className="priority-image"><img src="18_20241011_191631_001.jpeg" alt="Wind turbines on a green field" /></div></section>
<div className="inspiration-container">
      <div className="inspiration-text-section">
        <div className="inspiration-text-card">
          <h2>01  Our Customers, Our Inspiration</h2>
          <p>We place your needs at the heart of everything we do, crafting solutions tailored to exceed your expectations.</p>
        </div>
        <div className="inspiration-text-card">
          <h2>02  Excellence as a Standard</h2>
          <p>We are unwavering in our commitment to deliver only the highest quality, ensuring every solution meets exceptional standards.</p>
        </div>
        <div className="inspiration-text-card">
          <h2>03  Greener at the Core</h2>
          <p>Sustainability drives us. Our solutions are designed to make a lasting positive impact on the environment and beyond.</p>
        </div>
      </div>
      <div className="inspiration-image-section">
        <img src="19_20241011_191631_001.jpeg" alt="Wind turbines in nature" />
      </div>
    </div>






{/* cARD SECTION - SCROLLING  */}


<div className="partner-section-unique">
      <div className="container">
        <div className="partner-text-start">
          <p className="partner-small-text">Our Valued Partners</p>
          <h1 className="partner-heading">SERVING INDUSTRY LEADERS</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-3 col-sm-6 mb-3">
            <div className="partner-box-unique">
              <img
                src="1000012564-removebg-preview.png"
                alt="Ounce Bakery"
                className="partner-logo-unique img-fluid"
              />
            </div>
          </div>

          <div className="col-12 col-md-3 col-sm-6 mb-3">
            <div className="partner-box-unique">
              <img
                src="1000012565-removebg-preview.png"
                alt="TruBoard Partners"
                className="partner-logo-unique img-fluid"
              />
            </div>
          </div>

          <div className="col-12 col-md-3 col-sm-6 mb-3">
            <div className="partner-box-unique">
              <img
                src="1000012562-removebg-preview.png"
                alt="GESL"
                className="partner-logo-unique img-fluid"
              />
            </div>
          </div>

          <div className="col-12 col-md-3 col-sm-6 mb-3">
            <div className="partner-box-unique">
              <img
                src="1000012560-removebg-preview.png"
                alt="Sagar Energy Solutions"
                className="partner-logo-unique img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>


   {/* Another sectiob above the footer */}
   <div className="two-column-section-unique">
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



<Footer />

    </>
  );
}

export default Navbar1;
