import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>About Our Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit eget gravida vestibulum, lorem ipsum
            aliquet leo, sit amet tincidunt nisl dolor sed magna. Suspendisse potenti. Maecenas porttitor sem in ex bibendum
            aliquam. Duis at leo vel turpis convallis suscipit ac eget velit.
          </p>
          <p>
            Sed euismod, velit eget gravida vestibulum, lorem ipsum aliquet leo, sit amet tincidunt nisl dolor sed magna.
            Suspendisse potenti. Maecenas porttitor sem in ex bibendum aliquam. Duis at leo vel turpis convallis suscipit ac
            eget velit.
          </p>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/400x300" roundedCircle />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs