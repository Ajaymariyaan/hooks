import React, { useEffect, useState } from "react";

function UseEffectSample(){
    const[count,setCount]=useState("100");

    useEffect(()=>{
        console.log(` The Page Render ${count+5}` )

    },[count]
    )

const handleClick=()=>{

    setCount(count-1);
}

    return(<>
    
    <button onClick={handleClick}>Clickme{count}</button>

    
    </>)
}

export default UseEffectSample;