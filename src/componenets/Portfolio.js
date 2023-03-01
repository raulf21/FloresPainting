import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Portfolio({ limit }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await axios.get('http://localhost:5000/projects');
      setProjects(response.data.projects);
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {projects.slice(0, limit).map((project) => (
            <Col md={4} key={project.id}>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {limit < projects.length && (
          <Link to="/project">
            <br/>
            <Button variant="primary">View All Projects</Button>
          </Link>
        )}
      </Container>
    </div>
  );
}

export default Portfolio;