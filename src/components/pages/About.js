import React from 'react';
import './About.css';


// Import team member images (replace with actual image paths)

import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import foxel from '../../assets/foxel.jpg';
import ceo1 from '../../assets/ceo1.jpg';
import ghouse1 from'../../assets/ghouse1.jpg';
import sd3 from'../../assets/sd3.jpg';

// Fallback placeholder component for missing images
const TeamImage = ({ src, alt, name }) => {
  return (
    <div className="team-image-container">
      {src ? (
        <img src={src} alt={alt} className="team-member-img" />
      ) : (
        <div className="team-member-placeholder">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
    </div>
  );
};

function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Mohammed Afnan",
      role: "Founder and CEO",
      image: ceo1
    },
    {
      id: 2,
      name: "ghouse khan",
      role: "manager", 
      image: ghouse1
    },
    {
      id: 3,
      name: "sachin R",
      role: "assistant manager",
      image: sd3
    },
    {
      id: 4,
      name: "Akhay K K",
      role: "Founder and CFO",
      image: foxel
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <div className="container">
          {/* Company Introduction */}
          <section className="company-intro">
            <h2>Ekathva Innovations Private Limited</h2>
            <div className="content-text">
              <p>
                In the mid of 2018, as a team of four young minds, we came together to innovate and solve the day-to-day problems of the common man by our innovative products and services. Resulting in establishing a new venture of our own, <strong>"Ekathva Innovations Private Limited"</strong>, at SNL College of Engineering, Shivamogga, Karnataka.
              </p>
              
              <p>
                The company consists of electronics and computer science engineers who have enthusiasm for making day-to-day life better with their creative ideas. We target to develop User-Friendly and Economic products in the areas like Embedded systems, Printed Circuit Boards, Agriculture Automation, Automotive Electronics, Home and Industrial Automation under the direction of electronics. In the field of information technology, we offer services in Android® / iOS development, Website design and development. The company also builds on some in-house products and is always a step forward in satisfying customer needs.
              </p>
              
              <p>
                With the ideas of innovation in creating a better future in the ever-changing field of electronics and IT, the company wants to be a pioneer in some of the products which will change the perspective of everyday life for the layman too.
              </p>
              
              <p>
                Ekathva Innovation received recognition as a startup under the <strong>"Startup India"</strong> program of the Government of India and the <strong>"Startup Karnataka"</strong> program of the Government of Karnataka in 2019.
              </p>
              
              <p>
                Currently, Ekathva Innovations is being incubated at <strong>Deshpande Startups</strong>, Hubbell, Karnataka.
              </p>
            </div>
          </section>

          <div className="divider"></div>

          {/* Vision Section */}
          <section className="vision-mission">
            <div className="vm-grid">
              <div className="vm-item">
                <h3>Our Vision</h3>
                <p>
                  To change the perspective of everyday life even to a layman by filling the gap of the need for the field of Electronics and Information Technology with the finest quality solutions.
                </p>
              </div>
              
              <div className="vm-item">
                <h3>Our Mission</h3>
                <p>
                  To bring out affordable products with impeccable quality and accuracy in the field of day-to-day Electronics and Information Technology, for the problems ranging from simpler to complex.
                </p>
              </div>
            </div>
          </section>

          <div className="divider"></div>

          {/* Team Section */}
          <section className="team-section">
            <h3>Meet Our Team</h3>
            <p className="team-subtitle">Delighted to have passionate and technology driven people in Team B</p>
            
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <TeamImage 
                    src={member.image} 
                    alt={member.name}
                    name={member.name}
                  />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      
    </div>
  );
}

export default About;