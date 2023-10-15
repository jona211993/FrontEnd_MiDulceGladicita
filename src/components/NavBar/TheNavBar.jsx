import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import Totalitems from "./Totalitems";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import estilos from "../../styles/header.module.css";

function TheNavBar() {
  const { carrito } = useContext(dataContext);

  return (
    <div className={estilos.MiHeader}>
      <Logo>
        <img
          src="data:image/png;base64,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"
          alt="mi icono"
        />
      </Logo>
      <Marca>
        <h3>Mi Dulce Gladicita</h3>
      </Marca>
      <MiNavbar>
        <ul>
          <li>
            <HashLink smooth to="#inicio">
              INICIO
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#nosotros">
              NOSOTROS
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#servicios">
              SERVICIOS
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contacto">
              CONTACTO
            </HashLink>
          </li>
          <li>
            <Link to={"/productos"}>PRODUCTOS</Link>
          </li>
        </ul>
      </MiNavbar>
      <Carrito>
        <Link to={"/carrito"}>
          <box-icon name="cart" color="white"></box-icon>
          {carrito.length >= 1 && <Totalitems></Totalitems>}
        </Link>
      </Carrito>
    </div>
  );
}

export default TheNavBar;
const Logo = styled.div`
  img {
    height: 4.5em;
    width: 4em;
  }
`;

const Marca = styled.div`
  h3 {
    color: white;
    font-size: x-large;
    font-family: "Lobster";
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
`;
const MiNavbar = styled.div`
  display: grid;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    list-style: none;
  }
  ul > li {
    display: flex;
    justify-content: flex-end;
  }

  ul > li > a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin: 5px;
  }
  ul > li > a:hover {
    color: #b68813;
    font-size: small;
  }

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const Carrito = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: brown;
  border-radius: 65%;
  height: 50%;
  width: 40%;
  margin: 0px auto;
`;
