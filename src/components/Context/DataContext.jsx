import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const dataContext= createContext();

const DataProvider = ({children}) => {   
    const [productos,setProductos]=useState([]);
    const [carrito,setCarrito]=useState([]);

    useEffect(()=>{        
        axios.get("http://localhost:3000/Productos")
        .then(({data})=> setProductos(data))
    },[]);

    const comprarProducto = (producto) => {
        const productoRepetido = carrito.find((item) => item.id === producto.id);
        if (productoRepetido) {
          setCarrito(
            carrito.map((item) =>
              item.id === producto.id
                ? { ...producto, cantidad: productoRepetido.cantidad + 1 }
                : item
            )
          );
        } else {
          setCarrito([...carrito, producto]);
        }
      };







    return <dataContext.Provider value={{productos, carrito, setCarrito , comprarProducto}}>{children}</dataContext.Provider>

}

export default DataProvider;