import React from 'react';
import './SuccessStories.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import VideoSection from '../pages/VideoSection';

// Import your images (replace with actual image paths)
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import s4 from '../../assets/s4.png';
import s5 from '../../assets/s5.png';
import s6 from '../../assets/s6.png';
import s7 from '../../assets/s7.png';
import s8 from '../../assets/s8.png';
import s9 from '../../assets/s9.png';
import s10 from '../../assets/s10.png';
import s11 from '../../assets/s11.png';
import s12 from '../../assets/s12.png';
import s13 from '../../assets/s13.png';
import s14 from '../../assets/s14.png';
import s15 from '../../assets/s15.png';
import s16 from '../../assets/s16.png';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: "Ibbani Foods E-commerce",
      description: "Revolutionized online presence for traditional food products, increasing sales by 300% in first quarter.",
      category: "E-commerce",
      client: "Ibbani Foods",
      results: "300% Sales Growth",
      duration: "3 Months",
      image: s1,
      color: "#ff6b6b"
    },
    {
      id: 2,
      title: "V-Tech Engineers Innovation",
      description: "Developed India's first pizza rut processing machine with automated denkusing technology.",
      category: "Agri-Tech",
      client: "V-Tech Engineers",
      results: "First in India",
      duration: "12 Months",
      image: s2,
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "RootsCoods Platform",
      description: "Created comprehensive farm-to-market platform connecting farmers directly with wholesale buyers.",
      category: "Agri-Tech",
      client: "RootsCoods OPC",
      results: "10K+ Farmers",
      duration: "8 Months",
      image: s3,
      color: "#45b7d1"
    },
    {
      id: 4,
      title: "Smart Irrigation System",
      description: "Implemented IoT-based irrigation saving 60% water while increasing crop yield by 45%.",
      category: "IoT Solution",
      client: "Green Fields Agro",
      results: "60% Water Saved",
      duration: "6 Months",
      image: s4,
      color: "#96ceb4"
    },
    {
      id: 5,
      title: "Crop Monitoring AI",
      description: "AI-powered disease detection system reducing crop loss by 75% in tomato farms.",
      category: "AI Solution",
      client: "Tomato Masters",
      results: "75% Loss Reduced",
      duration: "9 Months",
      image: s5,
      color: "#feca57"
    },
    {
      id: 6,
      title: "Soil Health Analysis",
      description: "Mobile soil testing labs providing real-time nutrient analysis to 5000+ farmers.",
      category: "Analytics",
      client: "Soil Care Inc",
      results: "5000+ Farmers",
      duration: "4 Months",
      image: s6,
      color: "#ff9ff3"
    },
    {
      id: 7,
      title: "Farm Management Dashboard",
      description: "Centralized dashboard managing 1000+ acres of farmland with predictive analytics.",
      category: "Software",
      client: "Mega Farms Ltd",
      results: "1000+ Acres",
      duration: "10 Months",
      image:s7,
      color: "#54a0ff"
    },
    {
      id: 8,
      title: "Organic Certification Platform",
      description: "Digital platform streamlining organic certification for 200+ small farmers.",
      category: "Certification",
      client: "Organic India",
      results: "200+ Farmers",
      duration: "5 Months",
      image: s8,
      color: "#1dd1a1"
    },
    {
      id: 9,
      title: "Precision Farming App",
      description: "Mobile app providing precise farming recommendations based on satellite data.",
      category: "Mobile App",
      client: "Tech Farmers Co-op",
      results: "40% Yield Increase",
      duration: "7 Months",
      image: s9,
      color: "#ff9f43"
    },
    {
      id: 10,
      title: "Supply Chain Optimization",
      description: "Blockchain-based supply chain reducing food waste by 30% in perishable goods.",
      category: "Blockchain",
      client: "Fresh Logistics",
      results: "30% Waste Reduced",
      duration: "11 Months",
      image: s10,
      color: "#5f27cd"
    },
    {
      id: 11,
      title: "Drone Crop Monitoring",
      description: "Drone technology implementation for aerial crop health monitoring across 5000 acres.",
      category: "Drone Tech",
      client: "Sky Agro Tech",
      results: "5000 Acres",
      duration: "3 Months",
      image: s11,
      color: "#00d2d3"
    },
    {
      id: 12,
      title: "Farmer Education Portal",
      description: "Digital learning platform training 10,000+ farmers in modern agricultural practices.",
      category: "Education",
      client: "Agri Learn",
      results: "10K+ Trained",
      duration: "6 Months",
      image: s12,
      color: "#ff6b81"
    },
    {
      id: 13,
      title: "Weather Prediction System",
      description: "AI-based weather forecasting helping farmers plan crops with 95% accuracy.",
      category: "AI & Analytics",
      client: "Climate Smart",
      results: "95% Accuracy",
      duration: "8 Months",
      image: s13,
      color: "#a29bfe"
    },
    {
      id: 14,
      title: "Market Linkage Platform",
      description: "Connecting 5000+ farmers directly with markets eliminating middlemen commissions.",
      category: "Marketplace",
      client: "Direct Farm",
      results: "5000+ Farmers",
      duration: "7 Months",
      image:s14,
      color: "#fd79a8"
    },
    {
      id: 15,
      title: "Automated Harvesting",
      description: "Robotic harvesting system increasing efficiency by 300% in vegetable farms.",
      category: "Robotics",
      client: "Harvest Bot",
      results: "300% Efficiency",
      duration: "14 Months",
      image: s15,
      color: "#e17055"
    },
    {
      id: 16,
      title: "Water Management System",
      description: "Smart water management saving 50% water in drought-prone regions.",
      category: "Water Tech",
      client: "Aqua Save",
      results: "50% Water Saved",
      duration: "5 Months",
      image: s16,
      color: "#74b9ff"
    }
  ];

  const categories = ["All", "E-commerce", "Agri-Tech", "IoT Solution", "AI Solution", "Software", "Mobile App"];

  return (
    <div className="success-stories-page">
      {/* Hero Section */}
      <section className="success-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="hero-content">
                <h1 className="hero-title">Success Stories</h1>
                <p className="hero-subtitle">
                  Transforming agriculture through innovative technology solutions. 
                  Discover how we've helped farmers and agribusinesses achieve remarkable results.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row className="g-4">
            <Col md={3} className="text-center">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
            </Col>
            <Col md={3} className="text-center">
              <div className="stat-item">
                <h3>25K+</h3>
                <p>Farmers Impacted</p>
              </div>
            </Col>
            <Col md={3} className="text-center">
              <div className="stat-item">
                <h3>15+</h3>
                <p>States Covered</p>
              </div>
            </Col>
            <Col md={3} className="text-center">
              <div className="stat-item">
                <h3>300%</h3>
                <p>Average ROI</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoSection />


      {/* Filter Section */}
      <section className="filter-section">
        <Container>
          <div className="filter-container">
            <h4>Filter by Category:</h4>
            <div className="filter-buttons">
              {categories.map((category, index) => (
                <Button key={index} className="filter-btn">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Success Stories Grid */}
      <section className="stories-grid-section">
        <Container>
          <Row className="g-4">
            {successStories.map((story, index) => (
              <Col lg={4} md={6} key={story.id}>
                <Card className={`story-card story-animation-${index % 6}`}>
                  <div className="story-image-container">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="story-image"
                    />
                    <div className="story-category">
                      <span>{story.category}</span>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="story-title">{story.title}</Card.Title>
                    <Card.Text className="story-description">
                      {story.description}
                    </Card.Text>
                    <div className="story-client">
                      <strong>Client:</strong> {story.client}
                    </div>
                    <div className="story-metrics">
                      <Row>
                        <Col xs={6}>
                          <div className="metric">
                            <div className="metric-value">{story.results}</div>
                            <div className="metric-label">Results</div>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="metric">
                            <div className="metric-value">{story.duration}</div>
                            <div className="metric-label">Duration</div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="story-actions">
                      <Button className="read-more-btn">Read Full Story</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="success-cta">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="cta-content">
                <h2>Ready to Write Your Success Story?</h2>
                <p>Join hundreds of successful farmers and agribusinesses who have transformed their operations with our solutions.</p>
                <Button className="cta-btn">Start Your Journey</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SuccessStories;