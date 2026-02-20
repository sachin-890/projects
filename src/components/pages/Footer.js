import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Footer.css';
import ek1 from '../../assets/ek1.png';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <Container>
        <Row className="footer-main">
          {/* Brand Column */}
          <Col lg={4} md={6} className="footer-brand">
            <img src={ek1} alt="Ekathva Innovations" className="footer-logo" />
            <h3>EKATHVA INNOVATIONS</h3>
            <p>
              Creating innovative IoT solutions for modern agriculture. 
              We empower farmers with smart technology for better yields and sustainable farming.
            </p>
            <div className="social-links">
              <a href="https://wa.me/911234567890" className="social-link whatsapp">
                <FaWhatsapp />
              </a>
              <a href="mailto:info@ekathva.com" className="social-link email">
                <FaEnvelope />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><a href="/products/irrigation">Smart Irrigation</a></li>
              <li><a href="/products/moisture">Moisture Logger</a></li>
              <li><a href="/products/tracker">D-Tracker</a></li>
              <li><a href="/products">all Products</a></li>
            </ul>
          </Col>

          {/* Company Links */}
          <Col lg={2} md={6} className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6} className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Innovation Hub, Tech Park, Bangalore, India</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@ekathva.com</span>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom">
          <Col md={6}>
            <p>&copy; 2024 Ekathva Innovations. All rights reserved.</p>
          </Col>
          <Col md={6} className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;