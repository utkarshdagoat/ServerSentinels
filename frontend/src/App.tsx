import './App.css'
import Login from './components/login';

// import { Button } from "@nextui-org/react";
// import NavBar from "./components/navbar";
import Landing from "./pages/landing";
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gradient-to-r from-[#99003c] via-[#2d2d66] to-[#2c7fe5]" id="main">
    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/login" Component={Login}/>
    </Routes>
    </div>
  );
}

export default App;
