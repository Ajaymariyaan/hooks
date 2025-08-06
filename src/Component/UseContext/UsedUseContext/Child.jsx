import React, { useContext } from "react";
import UserConext from "../CreateUseContext/UserContext";

function Child(){

    const name=useContext(UserConext)

    return(<>

<h1>
    Hello,{name}
</h1>

    
    </>

    )
}

export default Child;
