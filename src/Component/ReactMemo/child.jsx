import React from "react";

const Child=React.memo(function Child({name}){

console.log("child page render");

    return <div>
        <h3> react Memo    name: {name}</h3>
    </div>
    
})

export default Child;
