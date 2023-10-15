import { useContext} from "react";
import { dataContext } from "../Context/DataContext";
import "./Productos.css";

function Productos() {
  const { productos,comprarProducto } = useContext(dataContext);
  

  return productos.map((producto) => {
    return (
      <div className="card" key={producto.id}>
        <img src={producto.imagen} alt="imagen" />
        <h3>{producto.nombre}</h3>
        <h5>Sabor: {producto.sabor} </h5>
        <h4>S/.{producto.precio}</h4>
        {producto.elegido===0?
         <button className="btn-comprar" onClick={() => { comprarProducto(producto); producto.elegido=true}}>Comprar</button>
         :<h4 className="msj-elegido">Producto en carrito</h4>
        }
      </div>
    );
  });
}

export default Productos;
