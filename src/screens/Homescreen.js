
import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import Portfolio from '../componenets/Portfolio';
import ContactPage from '../componenets/ContactUs';
import AboutUs from '../componenets/AboutUs';
import ServiceAreas from '../componenets/ServiceAreas';
import Services from '../componenets/Services';

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

      <section id="projects">
        <Container>
          <h2>Our Portfolio</h2>
          <Row>
            <Portfolio limit={3}/>
          </Row>
        </Container>
      </section>

      <ContactPage id="contact" />
      <ServiceAreas/>
    </div>
  );
}

export default HomePage;
