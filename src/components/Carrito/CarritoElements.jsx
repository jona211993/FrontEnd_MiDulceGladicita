import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CarritoContadorItem from "./CarritoContadorItem";
import "./Carrito.css";

function CarritoElements() {
  const { productos, carrito, setCarrito } = useContext(dataContext);

  const EliminarProducto = (id) => {
    const idEncontrado = carrito.find((element) => element.id === id);
    console.log(idEncontrado);
    productos.map((producto) => {
      if ((producto.id===idEncontrado.id)) {
        console.log("borrando")
        producto.elegido=0;
      }
    });

    const nuevoCarrito = carrito.filter((element) => {
      return element !== idEncontrado;
    });

    setCarrito(nuevoCarrito);
  };

  return carrito.map((producto) => {
    return (
      <div className="carrito-content" key={producto.id}>
        <img src={producto.imagen} alt="imagen-producto" />
        <h3 className="nombre-sabor">{producto.nombre}</h3>
        <h5 className="nombre-sabor">{producto.sabor}</h5>
        <CarritoContadorItem elProducto={producto}></CarritoContadorItem>
        <h4 className="price">S/.{producto.precio * producto.cantidad}</h4>
        <div
          className="icono-delete"
          onClick={() => EliminarProducto(producto.id)}
        >
          <box-icon
            name="trash"
            type="solid"
            color="red"
            size="30px"
          ></box-icon>
        </div>
      </div>
    );
  });
}

export default CarritoElements;
