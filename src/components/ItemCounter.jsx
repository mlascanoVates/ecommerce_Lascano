import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ItemCounter({id}){
   /*  const [counter, setCounter] =useState(0); */
    const{addItem}= useContext(CartContext)
    const [counter, setCounter] =useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


     const handleAddCounter =()=>{
        //nodificar
        if(counter>0){addItem({id},counter);}
        setCounter(0)

    } 
    const  handleInputChange=()=>{
        setCounter(prev=>prev+1)
    }
  /*   addItem({id},quantity) */

  /*   const handleLessCounter =()=> counter > 0 &&setCounter(prev=>prev-1);

    const addCantidad=()=>setCantidad(cantidad);
 */
    return <div className="flex flex-col gap-6 justify-center">
       
            <form onSubmit={handleSubmit } action="">
                <input type="number" min='0' value={counter} onChange={handleInputChange}   className="bg-white text-black border-2 border-solid border-gray-400 rounded-md h-10 w-20 text-center" />
                <button type="submit" onClick={handleAddCounter} >Añadir al carrito</button>
                <button ><Link to='/cart'> Finaliza compra</Link> </button>
            </form>
           
        </div>
}

export default ItemCounter;