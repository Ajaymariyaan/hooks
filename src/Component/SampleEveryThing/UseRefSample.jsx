import React, { useEffect, useRef, useState } from "react";

function UseRefSample(){
    const[value, setValue]=useState("1");

    const PreValue = useRef();


    useEffect(()=>{

        PreValue.current=value;
    },[value])




    return(<>
<p>{PreValue.current}</p>
<button onClick={()=>{setValue(value*2)}}>clickme {value }</button>
    
    </>)
}

export default UseRefSample;
