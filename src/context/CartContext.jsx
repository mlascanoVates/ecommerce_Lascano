
import { createContext, useEffect, useState } from "react";

//Creamos el contexto
export const CartContext = createContext();

//Creamos el provider para poder proveer el contexto a la aplicación
export function CartProvider({ children }) {

  //Recuperamos datos del local storage
    const storedItems= JSON.parse(localStorage.getItem('cartItems'));    
    //valor inicial del carrito
    const initialItems= storedItems? storedItems : [];

    const [cartItems, setCartItems] = useState(initialItems);

    //guardar cantidad de items en local storages
    useEffect(()=>{
        const parseItems = JSON.stringify(cartItems);
        localStorage.setItem('cartItems', parseItems);
    },[cartItems])
    
    //setea el carrito
    const addItem = (idProduct, quantity)=>{
      setCartItems([...cartItems, {id: idProduct, cantidad: quantity}]);
    }


  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}