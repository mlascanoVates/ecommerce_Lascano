
import { createContext, useEffect, useState } from "react";

//Creamos el contexto
export const CartContext = createContext();

//Creamos el provider para poder proveer el contexto a la aplicación
export function CartProvider({ children }) {

  //Recuperamos datos del local storage
    const storedItems= JSON.parse(localStorage.getItem('cartItems'));    
    //valor inicial del carrito
    const initialItems= storedItems? storedItems : 0;

    const [items, setItems] = useState(initialItems);

    //guardar cantidad de items en local storages
    useEffect(()=>{
        const parseItems = JSON.stringify(items);
        localStorage.setItem('cartItems', parseItems);
    },[items])

  return (
    <CartContext.Provider
      value={{
        items,
        setItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}