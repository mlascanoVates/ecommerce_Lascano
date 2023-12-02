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
 

    return <div className=' min-h-screen '>
         
                    <div className="flex flex-row  bg-red-100 shadow-xl">
                        <div className='basis-2/3 m-10'>
                            <img src={item.url} alt={item.name} width={600}/>
                        </div>
                        <div className="card-body  basis-1/3 m-10 " >
                            <h2 className="card-title">{item.name}</h2>
                            <p className='h-10'>{item.description}</p>
                            <div className="card-actions justify-start">
                            <ItemCounter id={item.id}/>
                            </div>
                        </div>
                    </div>
                </div>
         

    
}

export default Detail;