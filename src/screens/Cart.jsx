import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../context/CartContext";

import Form from "./Form";

//enviar informacion a Firebase
//producto del carro
//información del usuario
function Cart(){

  const {cart, cartItems, fetchCartItems, emptyCart, removeItem } = useContext(CartContext);


  useEffect(()=> {
    if(cart.length > 0) {
      fetchCartItems()
    }
  }, [])

  return (
    <div>
      {cartItems?.map(item => (
        <div className="flex items-center justify-center">
        <p>{item.name}</p>
        <button onClick={()=> removeItem(item.id)}>🗑️</button>
        </div>
      ))}
      <button onClick={emptyCart}>Vaciar carrito</button>
      <Form />
    </div>
  );
  }
export default Cart;