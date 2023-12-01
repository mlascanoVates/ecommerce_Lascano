import NavBar from './components/NavBar'
import Home from './screens/Home'
import Cart from './screens/Cart'
import Category from './screens/Category'
import Detail from './screens/Detail'
import Contact from './screens/Contact'
import NotFound from './screens/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { CartProvider } from "./context/CartContext";
import './App.css';
import {useCounter} from './hooks/useCounter';
import { usePokemon } from './hooks/usePokemon';
import Footer from './components/Footer'


function App() {

  //llaves porque así se exportó
  const {counter, increment, decrement}= useCounter(1 );

  const{pokemon}=usePokemon(counter);

  return (
    <>

    <BrowserRouter>
      <CartProvider>
      <NavBar/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/categoria/:idCategoria' element={<Category/>}/>
          <Route path='/detalle/:idProduct' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes> 
   
    {/* 
           <div className='flex flex-col justify-center'>
           <p className='flex text-orange-800 justify-center'>{counter} </p>
           <div className='flex justify-center'>
             <button onClick={increment} className='text-orange-800 justify-self-center'>+</button> 
            <button onClick={decrement} className='text-orange-80 justify-self-center'>-</button>
            </div>
             <p className='text-orange-80 justify-items-center'>{pokemon?.name}</p>
             <img className='text-orange-80 justify-items-center'src={pokemon?.sprites.front_default} width={100} />
   
          </div> */}
          <Footer/>
        

      </CartProvider>
        
    </BrowserRouter> 

    </>
    
   
          
  )
}

export default App
