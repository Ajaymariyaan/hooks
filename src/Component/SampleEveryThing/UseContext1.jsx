import React, { useContext } from "react";
import UserContext1 from "./CreateContext";

function Child1(){
    const UserName=useContext(UserContext1);


    return(<>
    <p> name is{UserName}</p>
    
    </>)
}

export default Child1;
