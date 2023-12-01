//retorna valores JavaScript

import { useState } from "react";

export function useCounter(inicialValue=0){
    const [counter, setCounter] =useState(inicialValue)

    //creamos una funcion que implemente, cada vez que la llamamos subimos 1
    const increment = ()=>{
        //le usa 1 al pvalor verio
        //no deberia incrementar mas de lo que hay en el stock
        setCounter(prev =>  prev + 1 )
    }
    const decrement = ()=>{
        //le usa 1 al pvalor verio
        if(counter>0)
        setCounter(prev => prev - 1 )
    } 

    //retorna un objeto del coutom hook
    //nos llevamos la funcion
    return{counter, increment, decrement}
}

//la funcion con solo llamarla incrementa el contador