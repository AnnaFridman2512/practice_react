import React, { useState } from "react";

export default function DisableBTN(){

    const [val, setVal] = useState("");
    
    return (
        <>
            <h3>Disable BTN</h3>
            <input type="text" onChange={(e)=> setVal(e.target.val)}/>
            <button disabled={val===""}>Submit</button>
        </>
    )
}
