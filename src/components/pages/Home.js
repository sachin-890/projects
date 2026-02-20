import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoSection from '../pages/VideoSection';
import './Home.css';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import pr1 from '../../assets/pr1.png';
import pr2 from '../../assets/pr2.png';
import pr3 from '../../assets/pr3.png';
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import c6 from '../../assets/c6.jpg';
import c7 from '../../assets/c7.jpg';
import c8 from '../../assets/c8.jpg';
import c9 from '../../assets/c9.jpg';
import c10 from '../../assets/c10.jpg';
import c11 from '../../assets/c11.jpg';
import c12 from '../../assets/c12.jpg';
import c13 from '../../assets/c13.jpg';
import c14 from '../../assets/c14.jpg';
import c15 from '../../assets/c15.jpg';
import c17 from '../../assets/c17.jpg';
import c18 from '../../assets/c18.jpg';
import c19 from '../../assets/c19.jpg';
import c20 from '../../assets/c20.jpg';
import c21 from '../../assets/c21.jpg';
import c22 from '../../assets/c22.jpg';
import c23 from '../../assets/c23.jpg';
import c24 from '../../assets/c24.jpg';
import c25 from '../../assets/c25.jpg';
import c26 from '../../assets/c26.jpg';
import c27 from '../../assets/c27.jpg';
import c28 from '../../assets/c28.jpg';
import t1 from '../../assets/t1.jpg';
import t2 from '../../assets/t2.jpg';
import t3 from '../../assets/t3.jpg';
import Full from './Full';
function Home() {
  return (
    <div className="home-page">
      <Full />
      

      {/* Hero Carousel Section */}
      <Carousel fade controls indicators className="hero-carousel" style={{marginBottom:'0'}}>
        <Carousel.Item>
          <div className="carousel-slide hero-slide-1">
            <div className="carousel-content">
              <div className="brand-section">
                <h1 textAlign="left">E K A T H V A</h1>
                <h2>       I N N O V A T I O N S</h2>
                <p className="tagline">INVENT FOR BETTERMENT</p>
              </div>
              
              <div className="supported-by">
                <h3>SUPPORTED BY</h3>
                <div className="supporters">
                  <div className="supporter-item">
                    <img src={p1} alt="Startup India" height="50" width="50" className="supporter-logo" style={{ borderRadius: '50%', width: '60px', height: '60px' }} />

                    <span className="supporter-text" style={{
  color: 'white',
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif'
}}>Startup India</span>
                  </div>
                  <div className="supporter-item">
                    <img src={p2}  alt="Startup Karnataka" height="50" width="50"   className="supporter-logo" style={{ borderRadius: '50%', width: '60px', height: '60px' }} />

                    <span className="supporter-text"style={{
  color: 'white',
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif'
}}>Startup Karnataka</span>
                  </div>
                  <div className="supporter-item">
                     <img   src={p3}   alt="Deshpande Startups" height="50" width="50"  className="supporter-logo" style={{ borderRadius: '50%', width: '60px', height: '60px' }} />

                    <span className="supporter-text" style={{
  color: 'white',
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif'
}}>Deshpande Startups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="carousel-slide hero-slide-2">
            <div className="carousel-content">
              <h2>Innovating for a Better Tomorrow</h2>
              <p>Cutting-edge solutions in Embedded Systems and IT Services</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <VideoSection />
      {/* About Ekathva Section */}
<section className="about-section">
  <Container>
    <Row className="align-items-center">
      <Col lg={8} className="mx-auto">
        <div className="about-content">
          <h1 className="about-title">
            About <strong>Ekathva Innovations</strong>
          </h1>
          <p className="about-description">
            At Ekathva Innovations, we bring you a team of professionals having expertise in the field of 
            <strong> Embedded systems, Printed Circuit Boards, IoT, Website Development, Mobile App Development 
            and Digital transformations</strong> to develop User-Friendly and Affordable Products and Services.
          </p>
          
          <div className="about-focus">
            <h3>Our Focus Areas</h3>
            <p>
              Our Research and Development is focused on <strong>Agri-Tech, Automotive Electronics, 
              Industrial 4.0, Internet of Things, and Enterprise Softwares</strong>. The company also 
              banks on some in-house products and is always a step forward in satisfying customer needs.
            </p>
          </div>

          <div className="about-services">
            <h3>Our Services</h3>
            <Row>
              <Col md={6} className="mb-4">
                <div className="service-highlight">
                  <h5>Embedded Services</h5>
                  <p>
                    We provide the best embedded services at affordable cost, from embedded hardware 
                    development, firmware development to knowledge-based training and upskilling.
                  </p>
                </div>
              </Col>
              <Col md={6} className="mb-4">
                <div className="service-highlight">
                  <h5>IT Services</h5>
                  <p>
                    We create outstanding, interactive, user friendly, responsive web and mobile 
                    applications, customized software solutions for a wide range of businesses 
                    from frontend to backend.
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-primary know-better-btn">
              KNOW BETTER →
            </button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
<VideoSection />

      {/* Products Section */}
   <section className="products-section">
  <Container>
    <h2 className="section-title">Our Products</h2>
    <Row>
      <Col lg={4} className="mb-4">
        <div className="product-card">
          <div 
            className="product-image" 
            onClick={() => {
              const phoneNumber = "911234567890"; // Replace with your number
              const message = "Hello! I'm interested in SMART IRRIGATION CONTROLLER. Can you provide more details?";
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, '_blank');
            }}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={pr1} 
              alt="Smart Irrigation Controller" 
              className="product-img"
              style={{ 
                width: '300px', 
                height: '300px', 
                objectFit: 'contain',
                borderRadius: '30px'
              }}
            />
          </div>
          <h4>SMART IRRIGATION CONTROLLER</h4>
          <p>Automated irrigation system for smart farming</p>
        </div>
      </Col>
      
      <Col lg={4} className="mb-4">
        <div className="product-card">
          <div 
            className="product-image" 
            onClick={() => {
              const phoneNumber = "911234567890"; // Replace with your number
              const message = "Hello! I'm interested in SMART MOISTURE LOGGER. Can you provide more details?";
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, '_blank');
            }}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={pr2} 
              alt="Smart Moisture Logger" 
              className="product-img"
              style={{ 
                width: '300px', 
                height: '300px', 
                objectFit: 'contain',
                borderRadius: '30px'
              }} 
            />
          </div>
          <h4>SMART MOISTURE LOGGER</h4>
          <p>Precise soil moisture monitoring and logging</p>
        </div>
      </Col>
      
      <Col lg={4} className="mb-4">
        <div className="product-card">
          <div 
            className="product-image" 
            onClick={() => {
              const phoneNumber = "917624865346"; // Replace with your number
              const message = "Hello! I'm interested in D-TRACKER. Can you provide more details?";
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, '_blank');
            }}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={pr3} 
              alt="D-Tracker"
              className="product-img"
              style={{ 
                width: '300px', 
                height: '300px', 
                objectFit: 'contain',
                borderRadius: '50px'
              }} 
            />
          </div>
          <h4>D-TRACKER</h4>
          <p>Advanced device tracking and monitoring system</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>
      <VideoSection />
 

      {/* Clients Section */}
      <section className="clients-section">
        <Container>
          <h2 className="section-title">Our Privileged Clients</h2>
          <p className="section-subtitle">
            We put our heart in our work and our clients love working with us!
          </p>
          
          {/* Stylish Clients Carousel */}
          <Carousel 
            fade 
            indicators={false} 
            controls={true}
            className="clients-carousel"
            interval={3000}
            pause={false}
          >
            {/* Slide 1 */}
            <Carousel.Item>
              <div className="clients-slide">
                <Row className="align-items-center justify-content-center">
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c1} alt="Client 1" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c2} alt="Client 2" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c3} alt="Client 3" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c4} alt="Client 4" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <div className="clients-slide">
                <Row className="align-items-center justify-content-center">
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c5} alt="Client 5" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c6} alt="Client 6" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c7} alt="Client 7" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c8} alt="Client 8" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            {/*slide3*/}
            <Carousel.Item>
              <div className="clients-slide">
                <Row className="align-items-center justify-content-center">
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c9} alt="Client 5" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c10} alt="Client 6" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c11} alt="Client 7" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c12} alt="Client 8" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            {/*slide4*/}
            <Carousel.Item>
              <div className="clients-slide">
                <Row className="align-items-center justify-content-center">
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c13} alt="Client 5" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c14} alt="Client 6" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c15} alt="Client 7" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c28} alt="Client 8" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            
            {/*slide5*/}
            <Carousel.Item>
              <div className="clients-slide">
                <Row className="align-items-center justify-content-center">
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c17} alt="Client 5" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c18} alt="Client 6" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c19} alt="Client 7" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c20} alt="Client 8" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            {/*slide6*/}
            <Carousel.Item>
              <div className="clients-slide">
                <Row className="align-items-center justify-content-center">
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c21} alt="Client 5" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c22} alt="Client 6" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c23} alt="Client 7" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c24} alt="Client 8" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            {/*slide7*/}
            <Carousel.Item>
              <div className="clients-slide">
                <Row className="align-items-center justify-content-center">
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c25} alt="Client 5" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c26} alt="Client 6" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c27} alt="Client 7" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} className="text-center mb-4">
                    <div className="client-logo-card">
                      <img src={c28} alt="Client 8" className="client-logo-img" />
                      <div className="client-overlay">
                        <span className="client-name"></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <VideoSection />
      {/* Testimonials Section */}
            <section className="py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h2 className="display-5 fw-bold text-dark">What Our Clients Say</h2>
        <p className="lead text-muted">Trusted by businesses worldwide</p>
      </div>
    </div>
    
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
          </div>
          
          <div className="carousel-inner">
            {/* Testimonial 1 */}
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-4 text-center">
                  <img 
                    src={t1}
                    alt="Sarah Johnson - TechCorp" 
                    className="img-fluid rounded-circle w-75 mx-auto mb-3"
                    style={{minHeight: '200px', objectFit: 'cover'}}
                  />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content p-4">
                    <div className="stars mb-3">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                    </div>
                    <p className="fs-5 fst-italic text-dark mb-4">
                      ಏಕತ್ವ ಇನ್ನೋವೇಶನ್ಸ್ ಹೆಸರೇ ಹೇಳಿದಂತೆ ಏಕತ್ವವನ್ನು ಸಾರುತ್ತಿದ್ದಾರೆ, ಸಮಾಜಮುಖಿ ಕಾರ್ಯಕ್ರಮದೊಂದಿಗೆ ಮಲೆನಾಡಿನ ಹುಡುಗರು ನಮ್ಮ ಜಿಲ್ಲೆಗೆ ಹೆಮ್ಮೆ ಎನಿಸಿದ್ದಾರೆ

ಡಾ. ವಿದ್ಯಾಶಂಕರ್ ಎಂ. ಹೆಚ್,
ಅಧ್ಯಕ್ಷರು, ವಿಶ್ವ ಭೂಷಣ ವಿಶ್ವಸ್ತ ಮಂಡಳಿ,
ಭದ್ರಾವತಿ
                    </p>
                    <h5 className="fw-bold text-dark mb-1">ಡಾ. ವಿದ್ಯಾಶಂಕರ್ ಎಂ. ಹೆಚ್</h5>
                    <p className="text-muted mb-0">ಅಧ್ಯಕ್ಷರು, ವಿಶ್ವ ಭೂಷಣ ವಿಶ್ವಸ್ತ ಮಂಡಳಿ,ಭದ್ರಾವತಿ</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-4 text-center">
                  <img 
                    src={t2}
                    alt="Michael Chen - Global Innovations" 
                    className="img-fluid rounded-3 w-100 mx-auto mb-3"
                    style={{maxHeight: '280px', objectFit: 'cover'}}
                  />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content p-4">
                    <div className="stars mb-3">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                    </div>
                    <p className="fs-5 fst-italic text-dark mb-4">
                      "The excellent website design for our institute displays the hallmark of professionalism of the web developers and designers at Ekathva Innovations"
                    </p>
                    <h5 className="fw-bold text-dark mb-1">Niveditha</h5>
                    <p className="text-muted mb-0">Assisstance Professor</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-4 text-center">
                  <img 
                    src={t3} 
                    alt="Emma Rodriguez - Creative Labs" 
                    className="img-fluid rounded-pill w-50 mx-auto mb-3"
                    style={{height: '220px', objectFit: 'cover'}}
                  />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content p-4">
                    <div className="stars mb-3">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                    </div>
                    <p className="fs-5 fst-italic text-dark mb-4">
                      The team at Ekathva always works with a structured approach with an end result in mind. Time and again they have surprised me with the quality of work.

Sachin Hegdekudgi,
RootsGoods (OPC) Pvt Ltd,
Bengaluru
</p>
                    <h5 className="fw-bold text-dark mb-1">Sachin Hegdekudgi</h5>
                    <p className="text-muted mb-0">RootsGoods (OPC) Pvt Ltd,Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  .carousel-item {
    padding: 2rem 0;
  }
  .testimonial-content {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 25px rgba(0,0,0,0.1);
    height: 100%;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }
  .carousel-indicators button {
    background-color: #6c757d;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
  }
  .carousel-indicators button.active {
    background-color: #0d6efd;
  }
`}</style>

      
    </div>
  );
}

export default Home;