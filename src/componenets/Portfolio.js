import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";

function Portfolio(){
    const projects = [
        {
          title: 'Project 1',
          image: 'https://via.placeholder.com/300x200',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non posuere ex. Fusce sit amet dapibus enim, ut posuere magna.',
          link: 'https://example.com/project1'
        },
        {
          title: 'Project 2',
          image: 'https://via.placeholder.com/300x200',
          description: 'Pellentesque in lectus eget massa posuere facilisis. Aliquam eu magna nec mi eleifend sagittis vel sit amet est.',
          link: 'https://example.com/project2'
        },
        {
          title: 'Project 3',
          image: 'https://via.placeholder.com/300x200',
          description: 'Nulla feugiat purus in quam sollicitudin, vel pharetra sapien vehicula. Sed gravida, mauris in lobortis sagittis, nisi felis congue eros, a maximus nisl purus non enim.',
          link: 'https://example.com/project3'
        }
      ]
    return (
        <Container>
            <h2 className = "my-4">Portfolio</h2>
            <Row>
            {projects.map((project, index) => (
                <Col md={4} key={index}>
                    <Card>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">View project</a>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>

    )
}
export default Portfolio