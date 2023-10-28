import './App.css'
import Login from './components/login';

// import { Button } from "@nextui-org/react";
// import NavBar from "./components/navbar";
import { Routes , Route } from 'react-router-dom';
import { useEffect } from 'react';

import Homepage from './pages/Homepage';
import { useAppSelector } from './hooks/redux';
import { userApi } from './services/user';

function App() {

 
  return (
    <div className="bg-gradient-to-r from-[#99003c] via-[#2d2d66] to-[#2c7fe5]">
    <Routes>
      <Route path="/" Component={Homepage}/>
      <Route path="/login" Component={Login}/>
    </Routes>
    </div>
  );
}

export default App;
