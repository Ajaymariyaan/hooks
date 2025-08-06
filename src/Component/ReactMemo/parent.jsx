import React, { useState } from "react";
import Child from "./child";

function Parent(){

    const[count,setCount]=useState(0)



    return(
        <div>
            <h3>The Count is {count}</h3>
            <button onClick={()=>setCount(count+1)}>click me</button>

            <Child name="Ajay"/>


        </div>
    )
}

export default Parent;
