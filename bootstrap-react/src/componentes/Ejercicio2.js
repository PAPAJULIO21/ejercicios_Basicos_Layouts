import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoPrincipal from '../imagenes/image.png';

// Importa imágenes específicas para cada índice
import image1 from '../imagenes/primera.png';
import image2 from '../imagenes/segunda.png';
import image3 from '../imagenes/tercera.png';
import image4 from '../imagenes/cuarta.png';

// Componente que cambia el texto dependiendo del índice
function TextoImagen({ index }) {
    let texto = '';
    
    switch (index) {
        case 1:
            texto = 'Las tecnologías emergentes, como la IA y el blockchain, transformarán industrias, mejorarán la vida cotidiana y presentan desafíos éticos.';
            break;
        case 2:
            texto = 'El 5G ofrece conexiones más rápidas, baja latencia y mayor capacidad, habilitando avances en IoT, vehículos autónomos y ciudades inteligentes.';
            break;
        case 3:
            texto = 'Las máquinas facilitan tareas, mejoran la eficiencia y permiten avances tecnológicos, transformando industrias y mejorando la calidad de vida.';
            break;
        case 4:
            texto = 'Los móviles conectan a las personas, facilitan el acceso a información, mejoran la productividad y han transformado la comunicación.';
            break;
        default:
            texto = 'Texto por defecto para la imagen.';
            break;
    }

    return <p className="ml-3 m-5">{texto}</p>;
}

function Ejercicio2() {
    // Asocia los índices con las imágenes específicas
    const imagenes = {
        1: image1,
        2: image2,
        3: image3,
        4: image4,
    };

    return (
        <Container fluid className="mt-5">
            <Row>
                {/* Primer layout: ocupa la mitad de la pantalla */}
                <Col md={6} className="text-center">
                    <img 
                        src={fotoPrincipal}  // Imagen principal
                        alt="Imagen grande"
                        className="img-fluid"
                        style={{ width: "800px", height: "350px" }}  
                    />
                    <h2 className="mt-5 m-5">Tecnologías Emergentes</h2>
                    <p>
                    Las tecnologías emergentes se refieren a innovaciones tecnológicas que están en una fase temprana de desarrollo o que acaban de salir al mercado, pero que tienen un enorme potencial para transformar sectores y cambiar nuestra forma de vivir, trabajar y comunicarnos. Estas tecnologías a menudo están impulsadas por avances en la ciencia, la ingeniería y el acceso a grandes volúmenes de datos, lo que les permite ofrecer soluciones nuevas a problemas complejos que no se podían abordar anteriormente. En este sentido, las tecnologías emergentes no solo son una tendencia, sino una puerta hacia el futuro, con la capacidad de remodelar la economía global, las industrias y hasta la sociedad misma.
                    </p>
                </Col>

                {/* Segundo layout: imágenes y texto alineados verticalmente con margen izquierdo */}
                <Col md={6} className="ml-4">
                    {[1, 2, 3, 4].map((index) => (
                        <Row key={index} className="mt-1 m-5">
                            <Col className="d-flex align-items-center">
                                {/* Imagen dinámica según el índice */}
                                <img 
                                    src={imagenes[index]} 
                                    alt={`Imagen pequeña ${index}`} 
                                    className="img-fluid" 
                                    style={{ width: "150px", height: "150px" }} 
                                />
                                {/* Texto con margen a la izquierda */}
                                <TextoImagen index={index} />
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default Ejercicio2;