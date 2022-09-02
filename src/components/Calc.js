import React, { useState } from 'react';

export default function Calc(){

    const [number1, setNumberOne] = useState();
    const [number2, setNumberTwo] = useState();
    const [total, setTotal] = useState(0);

    function calcToatal(){
        setTotal(parseInt(number1) + parseInt(number2));
    }


    return (
        <>
            <h2>Adding two numbers</h2>
            <input
            placeholder='First num'
            type="number"
            value={number1}
            onChange={(e)=> setNumberOne(e.target.value)}

            />

            <input 
            placeholder="Second number"
            type="number"
            value={number2}
            onChange={(e)=> setNumberTwo(e.target.value)}
            />

            <button onClick={calcToatal}>Add two numbers</button>
            <p>Total: {total || ""}</p>
        </>
    )
}