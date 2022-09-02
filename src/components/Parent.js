import React, {useState} from "react";

function Child({setValue}){
    return (
        <>
            <div>CHILD</div>
            <button onClick={()=> setValue("Parent has been updated")}>
                Change parent value
            </button>
        </>
    )
}

export default function Parent(){
    const [value, setValue] = useState("I need to be updated from my child");

    return (
        <>
        <Child setValue={setValue}/>
        <h3>Update parrent state challenge (using callback)</h3>
        <div>{value}</div>
        </>
    )
}