import React, { useEffect, useState } from "react";

export default function HideOrShow(){

    const [show, setShow] = useState(true);


    return (
        <>

        <button onClick={()=> setShow(!show)}>
            {show ? "Hide element Below" : "Show Element Below"}
        </button>
        {show ? <div>Toggle Challenge</div> : ""}
        </>
    );
}

