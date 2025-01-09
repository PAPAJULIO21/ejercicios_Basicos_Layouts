import React from 'react';
import { Col } from 'react-bootstrap';

function Ejercicio1({ image, title }) {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <div
        className="section-content"
        style={{
            backgroundImage: `url(${image})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '100vh',
        }}
      >
        <h2>{title}</h2>
      </div>
    </Col>
  );
}

export default Ejercicio1;