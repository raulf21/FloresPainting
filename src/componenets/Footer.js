import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light">
      <Container className="py-3">
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ipsum quis ante varius, nec finibus purus auctor. </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href to="/">Home</a></li>
              <li><a href to="/services">Services</a></li>
              <li><a href to="/projects">Projects</a></li>
              <li><a href to="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>123 Main Street, City<br/>State, ZIP Code<br/>Phone: (123) 456-7890<br/>Email: info@company.com</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <ul className="list-inline text-md-right">
              <li className="list-inline-item"><a href to="/">Terms of Use</a></li>
              <li className="list-inline-item"><a href to="/">Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
