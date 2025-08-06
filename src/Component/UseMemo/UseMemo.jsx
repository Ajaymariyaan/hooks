
import React, { useMemo, useState } from "react";

function UseMemoSample(){

   

    const[number,setnumber]=useState(0)

    const num =useMemo(()=> {
         console.log("the btn1 rendered")
    
   return number*2}
    ,[number]
       
    );

    const[nums,setnums]=useState(15)
    const numss =useMemo(()=> {
        console.log("the btn2 rendered")
        return nums}
        ,[nums]);

    



    return(
        <>
        <div>
            <p> UseMemo</p>
            <button onClick={()=> setnumber(number+1)}>
           ***btn1*** the number is {num}</button>
            <button onClick={()=>setnums(5)}>***btn2*** click me :{numss}</button>
            
        </div>
        
        </>
    )
}
export default UseMemoSample;
