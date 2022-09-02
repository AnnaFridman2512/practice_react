import React, {useState} from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);

    function add(){
        setCounter(counter+1);
    }

    function minus(){
        setCounter(counter-1);
    }

return (
    
    <>
        <h2>Counter: {counter}</h2>
        <button onClick={add}>Increment</button>
        <button onClick={minus}>Decrement</button>
    </>
)    
}