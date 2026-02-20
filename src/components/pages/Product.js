import React from 'react';
import './Product.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import VideoSection from '../pages/VideoSection';

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Smart Irrigation Controller",
      description: "An IoT based device to control, schedule and micro-manage the watering cycle in irrigation. The system consists of wireless controllers, valve system and mobile application interface in regional languages.",
      features: [
        "Wireless controllers & valve system",
        "Mobile app in regional languages",
        "Reduces irrigation costs",
        "Right water at right time",
        "Affordable for small farmers"
      ],
      icon: "💧",
      color: "#4facfe"
    },
    {
      id: 2,
      title: "Crop Health Monitor",
      description: "AI-powered monitoring system that uses computer vision to detect crop diseases, pest infestations, and nutrient deficiencies in real-time.",
      features: [
        "Real-time disease detection",
        "AI-powered analysis",
        "Mobile alerts & reports",
        "Precision treatment guidance",
        "Multi-crop support"
      ],
      icon: "🌱",
      color: "#43e97b"
    },
    {
      id: 3,
      title: "Soil Analysis Kit",
      description: "Comprehensive soil testing kit that provides detailed analysis of soil health, nutrient levels, and recommendations for optimal crop yield.",
      features: [
        "Complete soil health analysis",
        "Nutrient level monitoring",
        "Fertilizer recommendations",
        "pH balance tracking",
        "Seasonal trend analysis"
      ],
      icon: "🧪",
      color: "#fa709a"
    },
    {
      id: 4,
      title: "Farm Management Dashboard",
      description: "Centralized platform that integrates all farm operations, providing insights, analytics, and management tools for modern farming.",
      features: [
        "Unified farm management",
        "Real-time analytics",
        "Resource optimization",
        "Yield prediction",
        "Market connectivity"
      ],
      icon: "📊",
      color: "#667eea"
    }
  ];

  return (
    <div className="products-page" style={{ marginTop: '100px', paddingTop: '40px' }}>

      {/* Hero Section */}
      <section className="products-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="hero-content">
                <h1 className="hero-title">Our Products</h1>
                <p className="hero-subtitle">
                  Innovative agricultural solutions designed to empower farmers with 
                  smart technology and sustainable practices.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <Container>
          <Row className="g-4">
            {products.map((product, index) => (
              <Col lg={6} key={product.id}>
                <Card className={`product-card puzzle-card puzzle-animation-${index % 4}`}>
                  <div className="product-icon" style={{ backgroundColor: product.color }}>
                    {product.icon}
                  </div>
                  <Card.Body>
                    <Card.Title className="product-title">{product.title}</Card.Title>
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>
                    <div className="product-features">
                      <h6>Key Features:</h6>
                      <ul>
                        {product.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="product-actions">
                      <Button className="demo-btn">View Demo</Button>
                      <Button className="inquiry-btn">Get Quote</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <VideoSection />

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="section-header">
                <h2>Why Choose Our Solutions?</h2>
                <p>Designed with farmers' needs at the core</p>
              </div>
              <Row className="features-grid">
                <Col md={3} className="feature-item">
                  <div className="feature-icon">💰</div>
                  <h5>Cost Effective</h5>
                  <p>Affordable solutions for small and marginal farmers</p>
                </Col>
                <Col md={3} className="feature-item">
                  <div className="feature-icon">🌍</div>
                  <h5>Regional Support</h5>
                  <p>Available in multiple regional languages</p>
                </Col>
                <Col md={3} className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <h5>Easy to Use</h5>
                  <p>Simple interfaces designed for farmers</p>
                </Col>
                <Col md={3} className="feature-item">
                  <div className="feature-icon">📈</div>
                  <h5>Proven Results</h5>
                  <p>Increased efficiency and yield</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoSection />

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="cta-content">
                <h2>Ready to Transform Your Farming?</h2>
                <p>Join thousands of farmers who are already benefiting from our smart agricultural solutions</p>
                <Button className="cta-btn">Contact Our Team</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Product;