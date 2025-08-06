
import React from "react";


function CallBackChild({OnButtonClick}){

console.log("CallBack function called ")

    return(<>
    <button onClick={OnButtonClick}> click me </button>

    </>)
}

export default CallBackChild;