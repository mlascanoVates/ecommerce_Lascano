import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function ItemCounter({ id }) {
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Puedes realizar alguna acción adicional al enviar el formulario si es necesario
    };
  
    const handleAddCounter = () => {
      if (counter > 0) {
        addItem({ id }, counter);
      }
      setCounter(0);
    };
  
    const handleInputChange = (e) => {
      // Asegúrate de que el valor no sea negativo
      const value = Math.max(0, parseInt(e.target.value, 10) || 0);
      setCounter(value);
    };
  
    const handleDecrement = () => {
      // Decrementar solo si el contador es mayor que 0
      if (counter > 0) {
        setCounter(counter - 1);
      }
    };
  
    return (
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col justify-center">
        
            <input
              type="number"
              min="0"
              value={counter}
              onChange={handleInputChange}
              className=" self-center bg-white text-black border-2 border-solid border-gray-400 rounded-md h-10 w-20 text-center"
            />
            <button type="submit" onClick={handleAddCounter}>
              Añadir al carrito
            </button>
        
          <button>
            <Link to="/cart">Finaliza compra</Link>
          </button>
          </div>
        </form>
      </div>
    );
  }
  

export default ItemCounter;