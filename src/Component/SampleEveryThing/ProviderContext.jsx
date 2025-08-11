import React from "react";
import UserContext1 from "./CreateContext";
import Child1 from "./UseContext1";

function ProviderContext1(){

const name ="Ajaii"

    return(<>
    <UserContext1.Provider value={name}>

        <Child1></Child1>
    </UserContext1.Provider>

    
    </>)
}


export default ProviderContext1;
