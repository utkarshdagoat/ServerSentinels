import './App.css'

// import { Button } from "@nextui-org/react";
// import NavBar from "./components/navbar";

import Homepage from './pages/Homepage';
import MangaDetails from './components/MangaDetails';
import Scroller from './pages/Scroller';
import NavBar from './components/navbar';
function App() {
  return (
    <div className="bg-gradient-to-r  from-purple-950 to-black">
      <Scroller/>
    </div>
     
    
  );
}

export default App;
