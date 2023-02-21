import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import Portfolio from '../componenets/Portfolio';
import ContactPage from '../componenets/ContactUs';
import AboutUs from '../componenets/AboutUs';
import Services from '../componenets/Services';
import ServiceAreas from '../componenets/ServiceAreas';

function HomePage() {

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url(/path/to/image.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          minHeight: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h1 style={{ color: 'black' }}>Painting Company</h1>
        <p style={{ color: 'black' }}>Transforming Your Property With Color</p>
      </div>
      <AboutUs id="about" />

      <section id="services">
        <Container>
        <h2>Our Services</h2>
          <Row>
            <Services limit={3} />
          </Row>
        </Container>
      </section>

      <Portfolio id="portfolio" />

      <ContactPage id="contact" />
      <ServiceAreas/>
    </div>
  );
}

export default HomePage;
