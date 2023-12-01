import { useState } from "react";

export function useLocalStorage(key, inicialValue){
    const [value, setValue]= useState(()=>{ 

    try{
        const storedValue=window.localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : inicialValue;
    }
    catch{
        return inicialValue;}
    });

    //funcion para actualizar el valor
    //para agregar o eliminar del storage
    //convertimos el valor en string para poder almacenarlo en local storage
    const updateValue= (newValue)=>{
        try{
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        }
        catch(err){
            console.log(err);
        }
    };

    return[value, updateValue];
};