import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CarritoElements from "./CarritoElements";
import CarritoTotal from "./CarritoTotal";
import NavBarCarrito from "../NavBar/NavBarCarrito";
import styled from "styled-components";
import "./Carrito.css";

function CarritoContent() {
  const { carrito } = useContext(dataContext);

  return carrito.length > 0 ? (
    <>
     <NavBarCarrito></NavBarCarrito>
    <div className="container-carrito">
      <h1>Tu Carrito</h1>
      <hr />
      <CarritoElements></CarritoElements>
      <hr />
      <CarritoTotal></CarritoTotal>
      <div className="container-btn-pagar">
        <button className="btn-pagar">
          Continuar con el pago        
          <box-icon name="money" ></box-icon>
        </button>

      </div>
    </div>
    </>
    
  ) : (
    <>
    <NavBarCarrito></NavBarCarrito>
    <MensajeVacioCarrito>
      <h2>Tu carrito está vacío</h2>
    </MensajeVacioCarrito>
    </>
  );
}

export default CarritoContent;

const MensajeVacioCarrito = styled.div`
  display: flex;
  background-color: white;
  margin: auto;
  justify-content: center;
`;
