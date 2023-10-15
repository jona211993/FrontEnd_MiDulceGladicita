import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

function Totalitems() {
    const {carrito}=useContext(dataContext);
    const numItems= carrito.reduce((acc,el)=> acc+el.cantidad,0 );

  return (
    <span className="cart-items-total">{numItems}</span>
  )
}

export default Totalitems