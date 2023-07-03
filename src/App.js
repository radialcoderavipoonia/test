import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav.jsx';
import MyHero from './components/MyHero';
import EkosLive from './components/EkosLive';
import EkosAbout from './components/EkosAbout';
import Plateform from './components/Plateform';
import Integrations from './components/Integrations';
import Features from './components/Features';
// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import MyFooter from './components/MyFooter';
import Observatory from './components/Observatory';
import Preloader from './components/Preloader';
import ComminutyFeatures from './components/ComminutyFeatures';
import StellerMate from './components/StellerMate';
import BackToTop from './components/BackToTop';
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

function App() {
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <Preloader />
        <BackToTop/>
        <MyHero />
        <EkosLive />
        <EkosAbout />
        <Features/>
        <Plateform />
        <Integrations />
        <Observatory />
        <ComminutyFeatures />
        <StellerMate/>
        <MyFooter/>
      </div>
    </>
  );
}

export default App;
