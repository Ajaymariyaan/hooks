// import React from "react";
// import UseState from "../../Component/UseState/UseState";
// import Counter from "../../Component/UseEffect/UseEffect";
// import UseMemoSample from "../../Component/UseMemo/UseMemo";
// import Parent from "../../Component/ReactMemo/parent";
// import CallBackParent from "../../Component/CallBack/CallBackParent";
// import UseRefSample from "../../Component/UseRef/UseRefSample";
// import UserContextProvider from "../../Component/UseContext/ProvideUseContext.jsx/ProdiveUseContext";
// import Counter from "../../Component/UseReducer/UseReducer";

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
{/* <Counter/> */}

{/* <UserContextProvider/> */}
</div>

    </>


    )

}

export default MainPage;
