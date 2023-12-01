import { useContext } from 'react';
import bag from '../../src/assets/shopping-bag.svg'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartComponent(){

    const {itemsInCart} = useContext(CartContext);

    return <div className='d-flex justify-content-end w-25'>
                
                <div className='mw-100'  >                  
                <img src={bag} className="logo react" alt="React logo" />
                </div>

                <span className="badge badge-sm indicator-item bg-rose-600 text-neutral-50	">{itemsInCart} </span>
        

                
            </div>
   
}

export default CartComponent;