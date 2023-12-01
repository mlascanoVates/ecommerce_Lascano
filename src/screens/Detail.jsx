import {getFirestore, getDocs, collection, doc, getDoc, query, where, limit} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCounter from '../components/ItemCounter';

function Detail(){
    const[item,setItem] =useState([]);
    const {idProduct}= useParams();

    //accedemos a UN documento
     useEffect(()=>{

        const db= getFirestore();
        //segundo parametro nombre de coleccion
        const itemRef= doc(db,'items',idProduct);

        //devulve una promesa
        //le agregamos campo id en la app
        getDoc(itemRef)
        .then(res=>{
            if(res.exists){
                setItem( {id: res.id, ...res.data()})
            }
            })
        


    },[])
 


    return <div className='grid grid-cols-2 min-h-screen '>
                <div >
                   
                    <img src={item.url} alt={item.name} width={400}/>
                </div>
              
                <div>
                    <h3 >{item.name}</h3>
                    <p>{item.description}</p>
                    <ItemCounter id={item.id}/>
                </div>
            </div>

    
}

export default Detail;