import React from "react";

function RefCounter(){
    const textRefext = useref()



    useEffect(() => {

        textRefext.current.focus()

    },[])


return(<>

<input type="text" ref={textRefext} />


</>)
}
export default RefCounter ;
