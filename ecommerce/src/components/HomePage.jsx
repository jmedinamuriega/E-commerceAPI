import React from 'react';
import { Button, Card, Image, Container } from 'react-bootstrap';
import welcomeImage from '../components/assets/welcome-image.jpg';

const HomePage = () => {
  return (
    <Container className="homepage" style={{ backgroundColor: '#f8f9fa', color: '#343a40', padding: '20px', border: '1px solid #dee2e6', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Image src={welcomeImage} fluid style={{ marginBottom: '20px' }} />
      <Button variant="primary" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Shop Now</Button>
      <Card style={{ marginTop: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
            Discover our featured product of the month!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomePage;