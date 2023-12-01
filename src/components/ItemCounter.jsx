import { useState } from "react";

function ItemCounter(){
    const [counter, setCounter] =useState(0);

    const handleAddCounter =()=>setCounter(prev=>prev+1);

    const handleLessCounter =()=>setCounter(prev=>prev-1);

    return <div className="flex flex-wrap gap-6">
            <button onClick={handleAddCounter}>+</button>
            <p>{counter}</p>
            <button onClick={handleLessCounter}>-</button>
        </div>
}

export default ItemCounter;