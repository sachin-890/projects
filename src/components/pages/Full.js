import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Full = () => {
  return (
    <>
      <div 
        id="fullScreenCarousel" 
        className="carousel slide" 
        data-bs-ride="carousel"
        style={{ height: '100vh' }}
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#fullScreenCarousel" 
            data-bs-slide-to="0" 
            className="active"
          ></button>
          <button 
            type="button" 
            data-bs-target="#fullScreenCarousel" 
            data-bs-slide-to="1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#fullScreenCarousel" 
            data-bs-slide-to="2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#fullScreenCarousel" 
            data-bs-slide-to="3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner h-100">
          {/* Slide 1 */}
          <div className="carousel-item active h-100">
            <img 
              src="/images/hero1.jpg" 
              className="d-block w-100 h-100" 
              alt="Modern Architecture"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Slide 2 */}
          <div className="carousel-item h-100">
            <img 
              src="/images/hero2.jpg" 
              className="d-block w-100 h-100" 
              alt="City Landscape"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Slide 3 */}
          <div className="carousel-item h-100">
            <img 
              src="/images/hero3.jpg" 
              className="d-block w-100 h-100" 
              alt="Nature Scene"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Slide 4 */}
          <div className="carousel-item h-100">
            <img 
              src="/images/hero4.jpg" 
              className="d-block w-100 h-100" 
              alt="Technology"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#fullScreenCarousel" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#fullScreenCarousel" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        #full {
          width: 100vw;
          margin: 0;
          padding: 0;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }
        
        .carousel-item {
          transition: transform 0.6s ease-in-out;
        }
        
        .carousel-indicators {
          bottom: 20px;
          z-index: 15;
        }
        
        .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 8px;
          background-color: rgba(255, 255, 255, 0.5);
          border: 2px solid transparent;
        }
        
        .carousel-indicators button.active {
          background-color: #fff;
          transform: scale(1.2);
        }
        
        .carousel-control-prev,
        .carousel-control-next {
          width: 8%;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        
        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          opacity: 1;
        }
        
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          width: 3rem;
          height: 3rem;
          background-size: 100% 100%;
          filter: invert(1);
        }
      `}</style>
    </>
  );
};

export default Full;