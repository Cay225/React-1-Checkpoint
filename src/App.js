// src/App.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Fournir un prénom ici, sinon laissez-le vide
const firstName = "John"; // Changez ceci à "" si vous n'avez pas encore fourni votre prénom

const App = () => {
  return (
    <Container className="my-4">
      <Card className="text-center">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3">
        <h3>{firstName ? `Bonjour, ${firstName}!` : "Bonjour !"}</h3>
        {firstName && <img src="https://example.com/your-image.jpg" alt="Personal" style={{ width: '100px', borderRadius: '50%' }} />}
      </div>
    </Container>
  );
};

export default App;
