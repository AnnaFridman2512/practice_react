import React, {useState} from "react";

export default function DataBinding(){
    const [value, setValue] = useState("");

    return (
        <>
            <input
                type="text"
                placeholder="Enter text"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
            />
            <p>{value}</p>
        </>
    )
}