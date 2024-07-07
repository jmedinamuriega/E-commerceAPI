import React from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import errorImage from '../components/assets/error-image.jpg'; // Adjust the path as necessary

const NotFound = () => {
  return (
    <Container className="text-center" style={{ backgroundColor: '#f8f9fa', color: '#343a40', padding: '50px' }}>
      <Row>
        <Col>
          <h1>404 - Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Image src={errorImage} fluid style={{ margin: '20px 0' }} />
          <Nav.Link as={NavLink} to="/">
            <Button variant="primary">Go Home</Button>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
