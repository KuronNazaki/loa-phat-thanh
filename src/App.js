import { useEffect, useState } from 'react';
import Hero from './components/Hero.js';
import NavBar from './components/NavBar.js';
import Player from './components/Player.js';
import Slider from './components/Slider.js';
import Footer from './components/Footer.js';
import Loading from './components/Loading.js';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoaded(true);
    });
  });

  return (
    <>
      <div className={`loading-container ${isLoaded ? 'hidden' : 'visible'}`}>
        <Loading />
      </div>

      <div className={`main ${isLoaded ? 'visible' : 'hidden'}`}>
        <NavBar />
        <Slider />
        <Hero />
        <Player />
        <Footer />
      </div>
    </>
  );
}

export default App;
