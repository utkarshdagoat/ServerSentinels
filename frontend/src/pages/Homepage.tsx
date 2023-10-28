import Landing from "./landing";
import Carousel from "../components/Carousel";
import Latestupdates from '../components/Latestupdates';
import Mostpopular from '../components/Mostpopular';
import TopRated from '../components/TopRated';
import Footer from '../components/Footer';

function Homepage() {
  return (
     <div className="bg-gradient-to-r  from-purple-950 to-black">
      <Landing />
      <Carousel />
      <Latestupdates />
      <Mostpopular />
      <TopRated />
      <Footer />
    </div> 
    
  );
}

export default Homepage;