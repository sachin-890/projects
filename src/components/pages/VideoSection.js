import React from 'react';
import { Container } from 'react-bootstrap';

function VideoSection() {
  return (
    <section className="video-section" style={{ margin: '40px 0' }}>
      <Container fluid>
        <div style={{ 
          width: '100%', 
          height: '200px', 
          position: 'relative',
          backgroundColor: '#000',
          overflow: 'hidden',
          margin:'0',
          padding:'0'
        }}>
          <video 
            
            autoPlay
            muted
            loop
            playsInline
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              margin:'0',
          padding:'0',
              display: 'block'
            }}
          >
            <source src="/assets/me-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </section>
  );
}

export default VideoSection;