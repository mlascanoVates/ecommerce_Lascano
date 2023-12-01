import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useRef } from "react";

//enviar informacion a Firebase
//producto del carro
//información del usuario
function Cart(){
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
    items: [],
    totalPrice: 0
  }

  addDoc(collectionRef, pedido)
   .then((res)=> alert(`La orden ha sido enviada con éxito. Su Código de orden es: ${res.id}`))
};


    return (

      <div>
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

export default Cart;