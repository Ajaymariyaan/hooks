
import React, { useContext } from "react";
import UserContext from "../CreateUseContext/UserContext"; 

function Child() {
    const userName = useContext(UserContext);

    return(

    <p>Hello {userName}</p>
    
    )
}

export default Child;
