import './App.css'
import Login from './components/login';

// import { Button } from "@nextui-org/react";
// import NavBar from "./components/navbar";
<<<<<<< HEAD
=======
import Landing from "./pages/landing";
import {  Route, Routes } from 'react-router-dom';
>>>>>>> 1d6448c (implements navigation and login)

import Homepage from './pages/Homepage';
function App() {
  return (
<<<<<<< HEAD
     <Homepage />
    
=======
    <div className="bg-gradient-to-r from-[#99003c] via-[#2d2d66] to-[#2c7fe5]">
    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/login" Component={Login}/>
    </Routes>
    </div>
>>>>>>> 1d6448c (implements navigation and login)
  );
}

export default App;
