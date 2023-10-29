import './App.css'
import Login from './components/login';

// import { Button } from "@nextui-org/react";
// import NavBar from "./components/navbar";
import { Routes , Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Scroller from './pages/Scroller';
import NavBar from './components/navbar';
import MangaDetails from './components/MangaDetails';
function App() {
  return (
    
    <>
    <NavBar />
    <Routes>
      <Route path="/" Component={Homepage}/>
      <Route path="/login" Component={Login}/>
      <Route path="/manga/:manga_uid/chapter/:chapter_cid" Component={Scroller}/>
      <Route path="/manga/:manga_uid" Component={MangaDetails}/>

    </Routes>
    </>
  );
}

export default App;
