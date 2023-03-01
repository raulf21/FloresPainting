import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Services({ limit }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const response = await axios.get('http://localhost:5000/services');
      setServices(response.data.services);
    }
    fetchServices();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {services.slice(0, limit).map((service) => (
            <Col md={4} key={service.id}>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {limit < services.length && (
          <Link to="/services">
            <br/>
            <Button variant="primary">View All Services</Button>
          </Link>
        )}
      </Container>
    </div>
  );
}

export default Services;