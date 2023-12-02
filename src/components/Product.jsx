import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddOne from "./AddOne";

function Product({items}){
    return  (<ul className="flex flex-wrap gap-6">
            {items.map(item=>(
                <li key={item.id} className="transition-transform transform hover:filter hover:brightness-75">
                    <h3 >{item.name}</h3>
                    <Link to={`/detalle/${item.id}`}>
                        <img src={item.url} alt={item.name} width={400} />
                    </Link>
                    <p>$ {item.precio}</p>
                 {/*    <button onClick={handleCarrito}>Agregar al carrito</button> */}
                    <AddOne id={item.id}/>
                </li>
                ))}
            </ul>)
}

export default Product;