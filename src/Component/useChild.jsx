import React, { useContext } from "react";
import usercontext from "./UseContextsample";



function Usechild(){
const userName =useContext(usercontext);


    return(
        <>
        <p> name={userName}</p>

        </>
    )
}

export default Usechild;