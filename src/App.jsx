// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import './App.css'
// import {Dashboard} from './components/Dashboard'
// import {Landing} from './components/Landing'

// // dashboard and landing page 
// function App() {
//   return (
//   <div> 
//      <div>
//   <button onClick={()=>{
//     window.location.href= "/";
//   }}>Landing page</button>

//   <button  onClick={()=>{
//     window.location.href="/dashboard";
//   }}>Dashboard</button>
// </div>

// <BrowserRouter>
//  <Routes>
//   <Route path="/dashboard" element={<Dashboard/>}/>
//   <Route path="/" element ={<Landing/>}/>
//  </Routes>
 
//  </BrowserRouter>
//  </div>
// )
  
// }

// export default App



////


// import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
// import './App.css'
// import {Dashboard} from './components/Dashboard'
// import {Landing} from './components/Landing'

// // dashboard and landing page 
// function App() {
//   const navigate=useNavigate();
//   return (
//   <div> 
//      <div>
//   <button onClick={()=>{
//    navigate("/");
//   }}>Landing page</button>

//   <button  onClick={()=>{
//     navigate("/dashboard");
//   }}>Dashboard</button>
// </div>

// <BrowserRouter>
  
//  <Routes>
//   <Route path="/dashboard" element={<Dashboard/>}/>
//   <Route path="/" element ={<Landing/>}/>
//  </Routes>
 
//  </BrowserRouter>
//  </div>
// )
      
// }
import { lazy } from "react";
import { useState } from "react";

function App(){
  const [count,setCount]=useState(0);
return (
  <div>
    <Count count={count} setCount={setCount}/>

  </div>
)
}

function Count({count,setCount}){
  return <div>
   <CountRender Count={count}></CountRender>
     <Buttons count={count} setCount={setCount}/>
  </div>
}
function CountRender({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count,setCount}){
  return <div>
     <button onClick={()=>{
setCount(count+1)
     }}>Increase</button> 
     <button onClick={()=>{
      setCount(count-1)
     }}>decrease</button>
  </div>
}
export default App;
