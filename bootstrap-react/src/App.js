import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoMujer from './imagenes/mujer.jpg';
import fotoHombre from './imagenes/hombre.jpg';
import fotoNiño from './imagenes/niño.jpg';
import Ejercicio1 from './componentes/Ejercicio1.js';
import Ejercicio2 from './componentes/Ejercicio2.js';

function App() {
  return (
    /*

    <Container fluid className="p-0">
      <Row className="h-100 text-center">
        <Ejercicio1 
          image={fotoMujer} 
          title="Mujer" 
        />

        <Ejercicio1 
          image={fotoHombre} 
          title="Hombre" 
        />

        <Ejercicio1 
          image={fotoNiño} 
          title="Niños" 
        />
      </Row>
    </Container>*/
    <div>
      <Ejercicio2 />
    </div>
  );
}

export default App;