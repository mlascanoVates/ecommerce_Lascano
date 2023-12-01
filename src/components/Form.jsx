/* import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";

//enviar informacion a Firebase
//producto del carro
//información del usuario
function Form(){
const {cartItem, totalPrice}= useContext(CartContext);
//campo nombre, email

const userNameRef = useRef(null);
const userEmailRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();

  const db = getFirestore();

  //si existe va acceder a la coleccion, sino la crea Fire
  const collectionRef = collection(db, "pedido");

  const pedido = {
    userName: userNameRef.current.value,
    userEmail: userEmailRef.current.value,
    items: cartItem,
    totalPrice: totalPrice
  }

  addDoc(collectionRef, pedido)
   .then((res)=> alert(`La orden ha sido enviada con éxito. Su Código de orden es: ${res.id}`))
};


    return (

      <div  className='min-h-screen'>
        <form onSubmit={handleSubmit }> 
          <label className="form-control w-full max-w-xs  ">
            <div className="label">
              <span className="label-text">Nombre</span>
            </div>
            <input ref={userNameRef} type="text" placeholder="Ingrese su nombre" className="input input-bordered w-full max-w-xs bg-white" required  />
          </label>

          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input ref={userEmailRef}  type="email" placeholder="Ingrese su email" className="input input-bordered w-full max-w-xs bg-white"  required  />
          </label>
          <input type="submit" value="Enviar" className="btn" />


        </form>
      </div>

    )
}
 
export default Form;*/


import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Form() {
  const { cartItems, totalPrice, emptyCart } = useContext(CartContext);

  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userName = userNameRef.current.value;
    const userEmail = userEmailRef.current.value;

    if (!userName || !userEmail) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const db = getFirestore();
    const ordersCollectionRef = collection(db, "orders");

    const order = {
      userName: userName,
      userEmail: userEmail,
      items: cartItems,
      totalPrice: totalPrice,
      timestamp: new Date(),
    };

    try {
      const docRef = await addDoc(ordersCollectionRef, order);
      alert(`La orden ha sido enviada con éxito. Su Código de orden es: ${docRef.id}`);

      // Puedes realizar acciones adicionales después de enviar los datos a Firestore si es necesario
      emptyCart(); // Vaciar el carrito después de enviar la orden

    } catch (error) {
      console.error("Error al enviar la orden a Firestore:", error);
    }
  };

  return (
    <div className='min-h-screen'>
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Nombre</span>
          </div>
          <input
            ref={userNameRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="input input-bordered w-full max-w-xs bg-white"
            required
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            ref={userEmailRef}
            type="email"
            placeholder="Ingrese su email"
            className="input input-bordered w-full max-w-xs bg-white"
            required
          />
        </label>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
}

export default Form;
