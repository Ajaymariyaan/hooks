import React from "react";
import UserConext from "../CreateUseContext/UserContext";
import Child from "../UsedUseContext/Child";

function UserContextProvider(){

const name="Ajai"
return(
    <UserConext.Provider value={name}>
        <Child/>
    </UserConext.Provider>
)

}
export default UserContextProvider;
