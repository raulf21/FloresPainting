import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const cities = [
  'San Francisco',
  'San Mateo',
  'Redwood City',
  'Palo Alto',
  'Mountain View',
  'San Jose',
  'Santa Clara',
  'Sunnyvale',
  'Cupertino',
  'Los Gatos',
  'San Bruno',
  'San Carlos',
  'Menlo Park',
  'Belmont',
  'Burlingame'
];

function ServiceArea() {
  return (
    <div style={{ background: '#f8f9fa' }}>
      <Container>
        <h2 style={{ textAlign: 'center', margin: '3rem 0' }}>Our Service Areas</h2>
        <Row>
          <Col md={6}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {cities.slice(0, 6).map(city => (
                <div key={city} style={{ width: '50%', padding: '0.5rem' }}>
                  <p style={{ margin: '0' }}>{city}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {cities.slice(6,15).map(city => (
                <div key={city} style={{ width: '33.33%', padding: '0.5rem' }}>
                  <p style={{ margin: '0' }}>{city}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceArea;



