import { useParams } from "react-router-dom";
import { collection,getFirestore, query,where,limit, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category(){
    //se almacena lo que hay en el parámetro
    const {idCategoria} = useParams();
    const[items,setItems] =useState([]);
    const[loading,setLoading]= useState(true);

    //FILTRO
    useEffect(()=>{

        const db= getFirestore()
        //segundo parametro nombre de coleccion
        const queryFilter = query(collection(db,'items'),where('categoria', '==', idCategoria))
        
            
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


    },[idCategoria]) 


    return <div>
        <p>Category</p>
        <p>{idCategoria}</p>
        {loading?(
            <span className="loading loading-ring loading-lg"></span>
            
           ):(
            <ul className="flex flex-wrap gap-6">
                {items.map(item=>(
                    <li key={item.id}>
                        <Link to={`/detalle/${item.id}`}>
                        <h3>{item.name}</h3>
                        <img src={item.url} alt={item.name} width={400}/>
                        </Link>
                   
                    </li>
                ))}
            </ul>
           )}

    </div>

    
}

export default Category;