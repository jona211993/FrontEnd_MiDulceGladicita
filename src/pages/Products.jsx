import Productos from "../components/Productos/Productos";
import NavBarProductos from "../components/NavBar/NavBarProductos";
import styled from "styled-components";
import "../styles/productsEstilos.css";

function Products() {
  return (
    <>
      <NavBarProductos></NavBarProductos>
      <div className="Seccionproductos">
        <TitlePage>Mis Productos</TitlePage>
        <hr />
        <br />
        <div className="container-productos">
          <Productos></Productos>
        </div>
      </div>
    </>
  );
}

export default Products;

const TitlePage = styled.h1`
  color: #3c1f1f;
  padding-top: 1em;
  
`;
