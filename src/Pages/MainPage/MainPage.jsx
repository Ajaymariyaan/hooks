import React from "react";
import UseState from "../../Component/UseState/UseState";
// import UseEffect from "../../Component/UseState/UseEffect/UseEffect";
//  import UseEffectSample from "../../Component/UseState/UseEffect/UseEffect";
import Counter from "../../Component/UseEffect/UseEffect";
import UseMemoSample from "../../Component/UseMemo/UseMemo";
import Parent from "../../Component/ReactMemo/parent";
import CallBackParent from "../../Component/CallBack/CallBackParent";
import UseRefSample from "../../Component/UseRef/UseRefSample";
// import Child from "../../Component/UseContext/UsedUseContext/Child";
// import UserConext from "../../Component/UseContext/CreateUseContext/UserContext";
import Table from "../../Component/Table/Table";
function MainPage(){

    // const userName="Ajaii"
    return(<>
    
    <div className="MainPage">
        {/* <div style={{backgroundColor:'lightblue',border:'2px solid blue'}}> <p> UseState</p><UseState/> </div>

          <div style={{backgroundColor:'lightgreen',border:'2px solid green'}}> <p> UseEffect</p> <Counter/> </div>


          <div style={{backgroundColor:'lightpink',border:'2px solid red'}}> <p> UseMemo</p> <UseMemoSample/> </div>
          

          <div style={{backgroundColor:'lightgray',border:'2px solid grey'}}> <p> ReactMemo</p> <Parent/> </div>


          
          <div style={{backgroundColor:'lightsalmon',border:'2px solid salmon'}}> <p> use CallBack</p> <CallBackParent/> </div> */}


          {/* <div style={{backgroundColor:'lightyellow',border:'2px solid yellow'}}> <p> use Ref</p> <UseRefSample/> </div> */}
   
   
     
    {/* <UserConext.Provider value={userName}>

        <Child/>
    </UserConext.Provider> */}

<Table/>    

</div>

    </>


    )

}

export default MainPage;
