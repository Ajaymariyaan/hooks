import React, { useCallback } from "react";

function BtnClick(){


    const handleClickker = useCallback(()=>{

        alert("Button Clicked");
        console.log("Button Click")

    },[]);
    
    return(<>

    <button onClick={handleClickker}> Click me</button>
    
    </>)
}

 export default BtnClick;
