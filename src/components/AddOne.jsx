import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function ItemCounter({ id }) {
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(1);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const handleAddCounter = () => {
      
        addItem({ id }, counter);
    
    };
  

    return (
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col justify-center">
            <div>
            
              <button  type="submit" onClick={handleAddCounter}  className="p-px m-1  bg-gray-400  border-2 border-solid border-gray-400 transition-transform transform hover:filter hover:brightness-125">
                Añadir al carrito
              </button>

            </div>
          </div>
        </form>
      </div>
    );
  }
  

export default ItemCounter;