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



import { BrowserRouter, Routes, Route ,useNavigate} from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

// Appbar with correct useNavigate hook usage
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
