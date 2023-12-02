import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Logo from '../assets/logo_laRose.jpeg'
import CartComponent from '../components/CartComponent'

function NavBar(){

    const {itemsInCart, totalPrice} = useContext(CartContext);
  /*   const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        setShowMenu(!showMenu);
    
    },[showMenu])
 */
    return( 
    <div className="navbar bg-black flex  justify-between text-white">
       
            <div className="basis-1/4 justify-center mb-2">
            <NavLink to='/'><img src={Logo} alt="" width={190}/> </NavLink>
            </div>
            <div className='basis-1/2 justify-center'>
                {/* propiedad hidden cuando alcanza cierto tamaño  */}
                <div className=" navbar-center  lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to='/' className={({isActive })=>(isActive ? " underline decoration-[3px]" : "")}>Home</NavLink></li>
                            <li >
                                <details className='details'>
                                <summary  >Make Up</summary>
                                <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 " >
                                    <li><NavLink to='categoria/labiales' >Labios</NavLink></li>
                                    <li><NavLink to='categoria/ojos'>Ojos</NavLink></li>
                                    <li><NavLink to='categoria/rostro'>Rostro</NavLink></li>
                                </ul>
                                </details>
                            </li>
                            <li><NavLink to='/categoria/skin' className={({isActive })=>(isActive ? " underline decoration-[3px]" : "")}>Skin Care    </NavLink></li>
                            <li><NavLink to='/categoria/tool' className={({isActive })=>(isActive ? " underline decoration-[3px]" : "")}>Tools    </NavLink></li>
                            <li><NavLink  to='/contact' className={({isActive })=>(isActive ? " underline decoration-[3px]" : "")}>Contacto    </NavLink></li> 
                        </ul>
                </div>

            </div>

            <div className="basis-1/4 justify-center">
           
             <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
            
                
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                <div className="indicator">
            
                   <Link to='/cart'> <CartComponent/> </Link> 
                </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{itemsInCart} Items</span>
                    <span className="text-info text-rose-500">Subtotal: ${totalPrice}</span>
                    <div className="card-actions">
                    <button className="btn btn-block bg-red-200"><Link to='/cart'>Finalizar la compra </Link> </button>
                    </div>
                </div>
                </div>
            </div>


        </div>


      
    </div>
    )
}

export default NavBar;