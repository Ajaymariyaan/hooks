import React, { useCallback, useState } from "react";
import CallBackChild from "./CallBackChild";

function CallBackParent(){
    const[countt,setCountt]=useState(10)


    const handleClick=useCallback(()=>{

        setCountt(countt=countt+2);

},[]);



    return(<>
    <p>{countt}</p>
    <CallBackChild OnButtonClick={handleClick}/>
    
    </>)
}

export default CallBackParent;
