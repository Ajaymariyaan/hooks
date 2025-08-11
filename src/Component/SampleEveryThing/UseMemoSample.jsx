import React, { useMemo, useRef, useState, useEffect } from "react";


function UseMemoSample() {
    const [number, setNumber] = useState("")


  
    const UserRef = useRef();



    const isEven = useMemo(() => {
        console.log("page render")
        return (
            number % 2 === 0
        )

    }, [number]
    )

    useEffect(() => {

        UserRef.current.focus();


    });
      const handler = (e) => {
        setNumber(Number(e.target.value));
    };


    return (<>

        <input type="text" placeholder="Enter the number" onChange={handler} ref={UserRef} />
        <p>the number is {number} it is {isEven ? "even" : "old"}</p>

    </>)
}

export default UseMemoSample;
