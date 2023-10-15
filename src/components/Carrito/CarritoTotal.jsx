import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

export const CarritoTotal = () => {
   const{carrito} =useContext(dataContext);
   const total = carrito.reduce(
    (acc,elemento)=>
    acc+ elemento.precio*elemento.cantidad,
    0);
    return (
    <div className='content-carrito-total'>
      <div className='valor-total'>
        <h3>Total a pagar: S/. {total}</h3> 
      </div>        
    </div>
  )
}


export default CarritoTotal;