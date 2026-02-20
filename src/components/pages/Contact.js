import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [showVideo,setShowVideo]=useState(false);
  const handleVideoClick=()=>{
    setShowVideo(true);
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "Na Croix, Hosamane, Shivamogga, Karnataka - 577204",
      description: "Visit our headquarters"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 7624865346",
      description: "Mon to Fri 9am to 6pm"
    },
    {
      icon: "✉",
      title: "Email",
      details: "support@ekathvainnovations.com",
      description: "Send us your query anytime"
    }
  ];

  const partners = [
    {
      name: "Deshpande Startups",
      role: "Incubated at"
    },
    {
      name: "STARTUP KARNATAKA",
      role: "Recognised by"
    },
    {
      name: "AGRI-TECH INDIA",
      role: "Supported by"
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="hero-title">Get In Touch</h1>
                <p className="hero-subtitle">
                  We'd love to hear from you. Let's discuss how we can help transform 
                  your agricultural operations with our innovative solutions.
                </p>
                <div className="hero-features">
                  <div className="feature-item">
                    <span className="feature-icon">🚀</span>
                    <span>Quick Response</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💡</span>
                    <span>Expert Consultation</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌱</span>
                    <span>Agricultural Focus</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
        <div className="video-section">
          <div className="video-container">
            {showVideo ? (
              <div className="video-embed">
                <iframe
                  width="100%"
                  height="315"
                  src="https://youtube.com/watch?v=mi9_1qZV0W8&si=ygDuzX40DUUK9r3R"
                  title="Ekathva Innovations Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div 
                className="video-placeholder" 
                onClick={handleVideoClick}
              >
                <div className="play-button">
                  <span>▶</span>
                </div>
                <div className="video-overlay">
                  <h4>Welcome to Ekathva</h4>
                  <p>Click to watch our story</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Col>
          </Row>
        </Container>
      </section>

      {/* Contact & Map Section */}
      <section className="contact-map-section">
        <Container>
          <Row className="g-5">
            {/* Contact Information */}
            <Col lg={4}>
              <div className="contact-info-section">
                <h2 className="section-title">Locate Us</h2>
                <p className="section-subtitle">
                  Reach out to us through any of these channels. We're here to help you 
                  with innovative agricultural solutions.
                </p>
                
                <div className="contact-cards">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="contact-card">
                      <Card.Body>
                        <div className="contact-icon">{item.icon}</div>
                        <h5>{item.title}</h5>
                        <p className="contact-detail">{item.details}</p>
                        <p className="contact-description">{item.description}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>

                {/* Partners Section */}
                <div className="partners-section">
                  <h5>Our Recognition</h5>
                  <div className="partners-grid">
                    {partners.map((partner, index) => (
                      <div key={index} className="partner-item">
                        <div className="partner-role">{partner.role}</div>
                        <div className="partner-name">{partner.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            {/* Google Map */}
            <Col lg={8}>
              <div className="map-section">
                <h2 className="section-title">Find Us Here</h2>
                <div className="map-container">
                  <div className="google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.036218557909!2d75.57138977499656!3d13.929547112086432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba5d17c6b7f3d%3A0x5e76ab3253d5c2b1!2sShivamogga%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698765432107!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: 0, borderRadius: '15px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ekathva Innovations Location"
                    ></iframe>
                  </div>
                  <div className="map-overlay">
                    <div className="location-pin">
                      <span>📍</span>
                    </div>
                    <div className="location-info">
                      <h6>Ekathva Innovations</h6>
                      <p>Na Croix, Hosamane, Shivamogga</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="form-card">
                <Card.Body>
                  <h2 className="form-title">Send us a Message</h2>
                  <p className="form-subtitle">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Enter your full name"
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control 
                            type="email" 
                            placeholder="Enter your email"
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control 
                            type="tel" 
                            placeholder="Enter your phone number"
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="What is this regarding?"
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Message *</Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={5}
                            placeholder="Tell us about your requirements..."
                            className="form-input"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Button className="submit-btn" size="lg">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions-section">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <div className="action-card">
                <div className="action-icon">💬</div>
                <h5>Live Chat</h5>
                <p>Chat instantly with our support team</p>
                <Button variant="outline-primary" size="sm">Start Chat</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="action-card">
                <div className="action-icon">📱</div>
                <h5>Call Back</h5>
                <p>Request a callback from our experts</p>
                <Button variant="outline-primary" size="sm">Request Call</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="action-card">
                <div className="action-icon">💼</div>
                <h5>Partnership</h5>
                <p>Explore business partnership opportunities</p>
                <Button variant="outline-primary" size="sm">Partner With Us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;