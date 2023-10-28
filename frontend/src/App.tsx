import './App.css'
import Login from './components/login';

// import { Button } from "@nextui-org/react";
// import NavBar from "./components/navbar";
import Landing from "./pages/landing";
import {  Route, Routes } from 'react-router-dom';
function App() {
  return (

    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/login" Component={Login}/>
    </Routes>
  );
}

export default App;
