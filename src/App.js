import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Acef"; // Leave "" to test fallback

function App() {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '22rem', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h3>Hello, {firstName ? firstName : "there!"}</h3>
        {firstName && (
          <img
            src="https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif"
            alt="Welcome"
            style={{ width: "150px", marginTop: "10px" }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;