import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vehiculos.css'

function Vehiculos() {
  return (
    <>

      <h2 className="titleGaleria" id='Unidades'>
        Nuestras unidades de traslado
      </h2>

      <div className='carusel'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block img-fluid fixed-height-image"
              src={require("../../assets/v1.JPEG")}
              alt="Primera imagen"
            />
            <Carousel.Caption>
              <h3>Combi</h3>
              <p>Con capaicdad de 10 asientos</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 fixed-height-image"
              src={require("../../assets/v2.JPEG")}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Mini Bus</h3>
              <p>Con cApicidad de 20 asientos</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 fixed-height-image"
              src={require("../../assets/v3.JPEG")}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Unidad privada</h3>
              <p>Autos último modelo para mayor confort</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 fixed-height-image"
              src={require("../../assets/v4.JPEG")}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Combi</h3>
              <p>Con capacidad de 10 asientos</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 fixed-height-image"
              src={require("../../assets/v5.JPEG")}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Flota Mini bus</h3>
              <p>La capacidad no es un impedimento</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 fixed-height-image"
              src={require("../../assets/v6.JPEG")}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Bus</h3>
              <p>Con capacidad de 40 asientos</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 fixed-height-image"
              src={require("../../assets/v7.JPEG")}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Bus Larga distancia</h3>
              <p>Con capacidad de 50 asientos</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 fixed-height-image"
              src={require("../../assets/v8.JPEG")}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Combi ejecutiva</h3>
              <p>Con capacidad de 20 asientos con gran confort</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Agrega más elementos Carousel.Item según sea necesario */}
        </Carousel>

      </div>

    </>
  );
}

export default Vehiculos;