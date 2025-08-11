
import React from "react";
import UserContext from "./UserContext"; 
import Child from "../UsedUseContext/Child";

function UserContextProvider() {
    const name = "Ajai";

    return (
        <UserContext.Provider value={name}>
            <Child />
        </UserContext.Provider>
    );
}

export default UserContextProvider;
