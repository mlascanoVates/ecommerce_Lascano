import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import Form from "./Form";

//enviar informacion a Firebase
//producto del carro
//información del usuario
function Cart(){


    return (

      <div  className='min-h-screen'>
        <Form/>
      </div>

    )
}

export default Cart;