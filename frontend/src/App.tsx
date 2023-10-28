import './App.css'

// import { Button } from "@nextui-org/react";
// import NavBar from "./components/navbar";
import Landing from "./pages/landing";
import Carousel from "./components/Carousel"
import Latestupdates from './components/Latestupdates';
import Mostpopular from './components/Mostpopular';
import TopRated from './components/TopRated';
import Footer from './components/Footer';

function App() {
  return (
     <div className="bg-gradient-to-r from-[#99003c] via-[#2d2d66] to-[#2c7fe5]">
      <Landing />
      <Carousel />
      <Latestupdates />
      <Mostpopular />
      <TopRated />
      <Footer />
    </div> 
    
  );
}

export default App;
