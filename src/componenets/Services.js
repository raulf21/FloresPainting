import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Services({ limit }){
    const services = [
        {
          id: 1,
          title: "Interior Painting",
          image: "https://via.placeholder.com/350x200",
          description: "We specialize in high-quality interior painting for homes and businesses."
        },
        {
          id: 2,
          title: "Exterior Painting",
          image: "https://via.placeholder.com/350x200",
          description: "We can transform the look of your home or business with our expert exterior painting services."
        },
        {
          id: 3,
          title: "Color Consultation",
          image: "https://via.placeholder.com/350x200",
          description: "Not sure what colors to choose? Our expert color consultants can help you select the perfect colors for your space."
        },
        {
          id: 4,
          title: "Wallpaper Removal",
          image: "https://via.placeholder.com/350x200",
          description: "We can quickly and efficiently remove old wallpaper to give your walls a fresh start."
        },
        {
          id: 5,
          title: "Cabinet Painting",
          image: "https://via.placeholder.com/350x200",
          description: "Update the look of your kitchen or bathroom with our professional cabinet painting services."
        }
      ];
      return (
        <div>
        <Container>
          <Row>
            {services.slice(0, limit).map(service => (
              <Col md={4} key={service.id}>
                <Card>
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
          {limit < services.length &&
            <Link to="/services">
              <Button variant="primary">View All Services</Button>
            </Link>
          }
          </Container>
        </div>
      );
    }
    
export default Services
