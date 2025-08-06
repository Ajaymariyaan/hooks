import React, { useState } from "react";


function UseState(){
    const[count,setCount]=useState(0)
    console.log("usestate Rendered")

    function handleClick(){

        setCount(count+1);
    }

    return(<>

    <button onClick={handleClick}>The count is {count}now</button>

    
    
    </>)
    
}

export default UseState;
