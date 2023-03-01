import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

function AboutUs() {
  const [about, setAbout] = useState("");

  useEffect(() => {
    async function fetchAbout() {
      try {
        const response = await axios.get('http://localhost:5000/about');
        setAbout(response.data.about);
      } catch (error) {
      }
    }
    fetchAbout();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>About Our Company</h2>
          {about && <p>{about}</p>}
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/400x300" roundedCircle />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;
