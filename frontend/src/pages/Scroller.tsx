import MangaScroller from './MangaScroller';
import Homepage from './Homepage';
import Footer from '../components/Footer';
import NavBar from '../components/navbar';
function Scroller() {
  return (
    <div className="bg-gradient-to-r  from-purple-950 to-black">
      <NavBar />
      <MangaScroller />
      <Footer />
    </div>
     
    
  );
}

export default Scroller;