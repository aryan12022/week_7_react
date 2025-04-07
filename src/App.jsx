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
// import {   useContext } from "react";
// import { useState } from "react";
// import { CountContext } from "./context";

// function App(){
//   const [count,setCount]=useState(0);
// return (
//   <div>
// <CountContext.Provider value={{count,setCount}} >
// <Count /> 
// </CountContext.Provider>
//   </div>
// )
// }

// function Count(){

//   return <div>
//    <CountRender ></CountRender>
//      <Buttons  />
//   </div>
// }
// function CountRender(){
//   const {count}=useContext(CountContext)
//   return <div> 
//     count:{count}
//   </div>
// }

// function Buttons(){
//   const {count,setCount}=useContext(CountContext)
//   return (<div>
//      <button onClick={()=>{
// setCount(count+1)
//      }}>Increase</button> 
//      <button onClick={()=>{
//       setCount(count-1)
//      }}>decrease</button>
//   </div>);
// }
// export default App;



//////RECOIL///////

import React, { useState } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count.jsx'; // Ensure correct path

function App() {
  return (
 
      <Count />
   
  );
}

function Count() {
  return (
    <div>   
      <RecoilRoot>
      <CountRender />
      <Buttons />
      </RecoilRoot>

    </div>
  );
}

function Input(){
  const [inputValue,setInputValue]=useState("")
  return <div>
    <input onChange={(e)=>{
   setInputValue(e.target.value)
    }} />
  </div>
}

function CountRender() {
  const count = useRecoilValue(countAtom); // Get the current count value
  return <div>{count}</div>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom); // Get the current count and setter
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
