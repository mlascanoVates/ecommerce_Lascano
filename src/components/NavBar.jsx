import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/logo_laRose.jpeg'
import CartComponent from '../components/CartComponent'
import { useEffect, useState } from 'react'

function NavBar(){
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
            <img src={Logo} alt="" width={190}/>
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
                    <span className="font-bold text-lg">6 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
                </div>
            </div>



            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
                </ul>
            </div>
           


        </div>


      
    </div>
    )
}

export default NavBar;