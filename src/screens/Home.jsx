import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import {getFirestore, getDocs, collection, doc, getDoc, query, where, limit} from 'firebase/firestore'
import { Link } from "react-router-dom";
import ImagenRostro from '../assets/rostro3.jpg'
import ImagenLabios from '../assets/labiales2.jpg'
import ImagenOjos from '../assets/ojos.jpg'
import ImagenSkin from '../assets/skin2.jpg'
import Product from '../components/Product'


function Home(){
    const[items,setItems] =useState([]);
    const[item,setItem] =useState(null);
    const[loading,setLoading]= useState(true);

   /*  useEffect(()=>{

        const db= getFirestore();
        //segundo parametro nombre de coleccion
        const itemsRef= collection(db,'items');

        //devulve una promesa
        //le agregamos campo id en la app
        getDocs(itemsRef)
        .then(res=>{if(res.size==0){console.log('no results');}
                setItems(res.docs.map(doc=>({id: doc.id, ...doc.data()})))
            })
        


    },[])
 */
    //accedemos a UN documento
 /*    useEffect(()=>{

        const db= getFirestore();
        //segundo parametro nombre de coleccion
        const itemRef= doc(db,'items', 'YQ3dvEDEn2ugUfm7yx0B');

        //devulve una promesa
        //le agregamos campo id en la app
        getDoc(itemRef)
        .then(res=>{
            if(res.exists){
                setItem( {id: res.id, ...res.data()})
            }
            })
        


    },[])
 */



    //FILTRO
  /*   useEffect(()=>{

        const db= getFirestore()
        //segundo parametro nombre de coleccion
        const queryFilter = query(collection(db,'items'),where('categoria', '==', 'labiales'))
        
            
        //devulve una promesa
        //le agregamos campo id en la app
        getDocs(queryFilter)
        .then(res=>{
            if(res.size===0){
                console.log('no results');
            }
                setItems(res.docs.map(doc=>({id: doc.id, ...doc.data()})))
            })
        


    },[]) */

    //traer documento si existe



    useEffect(()=>{

        const db= getFirestore()
        //segundo parametro nombre de coleccion
        const queryFilter = query(collection(db,'items'),where('destacado', '==', true))
        
            
        //devulve una promesa
        //le agregamos campo id en la app
        getDocs(queryFilter)
        .then(res=>{
            if(res.size===0){
                console.log('no results');
            }
                setItems(res.docs.map(doc=>({id: doc.id, ...doc.data()})))
            })
        .catch((err)=>console.error(err))
        .finally(()=>setLoading(false))


    },[])

 /*    const {items, setItems}= useContext(CartContext);
 */
    return <div >
     

           <div className="grid grid-cols-2 gap-0 bg-black min-h-min">
            <Link to='/categoria/labiales'><img src={ImagenLabios} alt="labiales"  className="w-full h-full object-cover transition-transform transform hover:filter hover:brightness-125"/></Link>
            <Link to='/categoria/rostro'><img src={ImagenRostro} alt="rostro" className="w-full h-full object-cover transition-transform transform hover:filter hover:brightness-125" /></Link>
            <Link to='/categoria/ojos'><img src={ImagenOjos} alt="ojos"  className="w-full h-full object-cover transition-transform transform hover:filter hover:brightness-125"/></Link>
            <Link to='/categoria/skin'><img src={ImagenSkin} alt="skincare" className="w-full h-full object-cover transition-transform transform hover:filter hover:brightness-125"/></Link>
           </div>

           <div > 
           <h3 className="flex justify-center ">Los más vendidos</h3>
           {loading?(
            <span className="loading loading-ring loading-lg"></span>
            
           ):(
                <Product items={items} />
           )}

           </div>
           
         </div> 

    
}

export default Home;