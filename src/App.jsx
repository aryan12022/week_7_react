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

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// Lazy-loaded components//lazy loading for optimisation//always suspense is added
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (
    <div>
      <div style={{ background: 'black', color: 'white' }}>
        Hi this is topbar
      </div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

// Appbar with UK spelling, keeping navigation inside Router
function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing Page</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default App;
