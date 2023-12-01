import React, { useContext, useEffect, useRef } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import Form from "../components/Form";

function Cart() {
  const {cart, cartItems, fetchCartItems, emptyCart  } = useContext(CartContext);

  console.log(cart);

  useEffect(()=> {
    if(cart.length > 0) {
      fetchCartItems()
    }
  }, [cart]) 

  return (
    <div>
  {/*     {cartItems?.map(item => (
        <div className="flex items-center justify-center">
        <p>{item.name}</p>
{/*         <img src={item.url} alt="" />
         {/* <button onClick={()=> removeItem(item.id)}>🗑️</button> 
        </div>
      ))} */}

      {cartItems?.map(item => <p>{item.name}</p>)}
      <button onClick={emptyCart}>Vaciar carrito</button>
      <Form />
    </div>
  );
}

export default Cart;