import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Totalitems from "./Totalitems";
import styled from "styled-components";
import "./NavBarProductos.css";

function NavBarCarrito() {
    const { carrito } = useContext(dataContext);
    return (
      <>
        <div className="NavBar_P">
          <div className="retroceso">
            <box-icon name="arrow-back" color="white"></box-icon>
            <Link to={"/productos"}>Productos</Link>
          </div>
          <Marca>
            <h3>Mi Dulce Gladicita</h3>
          </Marca>
  
          <Carrito>
            <Link to={"/carrito"}>
              <box-icon name="cart" color="white"></box-icon>
              {carrito.length >= 1 && <Totalitems></Totalitems>}
            </Link>
          </Carrito>
        </div>
      </>
    );
}

export default NavBarCarrito

const Marca = styled.div`
  h3 {
    color: white;
    font-size: x-large;
    font-family: "Lobster";
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
`;
const Carrito = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: brown;
  border-radius: 65%;
  height: 55px;
  width: 55px;
  margin: 0px auto;
`;
