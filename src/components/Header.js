import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import ek1 from '../assets/ek1.png';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink]=useState('home');
  const navigate=useNavigate();

  
  

  // Scroll animation with debounce
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsExpanded(false);
  };
  const handleLoginClick=()=>{
    navigate('/Login');
  }

  return (
    
    
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      className={`custom-header ${scrolled ? 'scrolled' : ''} ${isExpanded ? 'navbar-expanded' : ''}`}
      expanded={isExpanded}
      onToggle={(expanded) => setIsExpanded(expanded)}
      fixed="top" // Keep this
    >
      {/* Video Background */}
      <div className="header-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="header-video"
        >
          <source src="/assets/me-video.mp4" type="video/mp4" />
          <source src="/assets/me-video.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div 
  style={{
    background: 'rgba(10, 25, 47, 0.85)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  }}
/>
      
      {/* Dark Overlay */}
      <div className="header-overlay" />
      
      <Container>
        {/* Your existing header content */}
        <Navbar.Brand href="/" className="d-flex align-items-center brand-container">
          <img 
            src={ek1}
            width="80"
            height="80"
            className="d-inline-block align-top me-2 logo"
            alt="EKATHVA-LOGO" 
          />
          <span className="brand-text">EKATHVA INNOVATIONS</span>
        </Navbar.Brand>
        
        
        
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="nav-links-container">
            <Nav.Link 
              href="/" 
              className={`nav-btn home-btn slide-in ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('home')}
              style={{outline:'none',boxShadow:'none'}}
              onFocus={(e)=>{
                e.target.style.outline='none';
                e.target.style.boxShadow='none';
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="/about" 
              className={`nav-btn about-btn slide-in ${activeLink === 'about' ? 'active permanent-hover' : ''}`}
              onClick={() => handleNavLinkClick('about')}
            >
              About US
            </Nav.Link>
            <Nav.Link 
              href="/product" 
              className={`nav-btn product-btn slide-in ${activeLink === 'product' ? 'active permanent-hover' : ''}`}
              onClick={() => handleNavLinkClick('product')}
            >
              Products
            </Nav.Link>
            <Nav.Link 
              href="/success-stories" 
              className={`nav-btn stories-btn slide-in ${activeLink === 'success-stories' ? 'active permanent-hover' : ''}`}
              onClick={() => handleNavLinkClick('success-stories')}
            >
              Success Stories
            </Nav.Link>
            
            <Nav.Link 
              href="/contact" 
              className={`nav-btn contact-btn slide-in ${activeLink === 'contact' ? 'active permanent-hover' : ''}`}
              onClick={() => handleNavLinkClick('contact')}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Login Button on Left */}
        <div className="d-flex align-items-center ms-auto">
          <Button 
            className="login-btn me-3"
            onClick={handleLoginClick}
            variant="outline-light"
            size="sm"
          >
            Login
          </Button>
          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            className="navbar-toggler-animated toggle-animation ms-2"
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;