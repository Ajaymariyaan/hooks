
import './App.css'
// import UseEffectSample from './Component/SampleEveryThing/UseEffectSample'

// import MainPage from './Pages/MainPage/MainPage'
import UseEffectSample from './Component/SampleEveryThing/UseEffectSample'
import UseMemoSample from './Component/SampleEveryThing/UseMemoSample'
import ProviderContext1 from './Component/SampleEveryThing/ProviderContext'
import BtnClick from './Component/SampleEveryThing/UseCallBackSample'
import UseRefSample from './Component/SampleEveryThing/UseRefSample'

function App() {
  
  return (
    <>
    {/* <MainPage/> */}
  <UseEffectSample/>
  <UseMemoSample/>
  <ProviderContext1/>
  <BtnClick/>
  <UseRefSample/>
    </>
  )
}

export default App
