import React from "react";
import usercontext from "./UseContextsample";
import Usechild from "./useChild";
 


function SampleProvider(){
    const userName="Ajai";

    return(<>
<usercontext.Provider value={userName}>

    <Usechild/>
</usercontext.Provider>
    
    
    </>)
}
export default SampleProvider;
