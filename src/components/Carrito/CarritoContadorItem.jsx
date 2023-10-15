import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Carrito.css";

function CarritoContadorItem({ elProducto }) {
  const { carrito, setCarrito, comprarProducto } = useContext(dataContext);

  const decrementarProducto = () => {
    const productoRepetido = carrito.find((item) => item.id === elProducto.id);
    productoRepetido.cantidad !== 1 &&
      setCarrito(
        carrito.map((item) =>
          item.id === elProducto.id
            ? { ...elProducto, cantidad: productoRepetido.cantidad - 1 }
            : item
        )
      );
  };

  return (
    <div className="container-cantidad">
      <div className="envuelve-boton">
        <p className="counter-button" onClick={() => decrementarProducto()}>
          -
        </p>
      </div>
      <p className="valor-cantidad">{elProducto.cantidad}</p>
      <div className="envuelve-boton">
        <p
          className="counter-button"
          onClick={() => comprarProducto(elProducto)}
        >
          +
        </p>
      </div>
    </div>
  );
}

export default CarritoContadorItem;
