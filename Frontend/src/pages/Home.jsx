// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import BannerCarrusel from '../components/Banner';
import Countdown from '../components/Countdown';
import About from '../components/About';
import SponsorsCarousel from '../components/SponsorsCarousel';
import Categories from '../components/Categories';
import RegistrationForm from '../components/RegistrationForm';
import Gallery from '../components/Gallery';
import RouteMap from '../components/RouteMap';
import NewsSection from '../components/NewsSection';
import Contact from '../components/Contact';
import SocialMediaFloating from '../components/SocialMediaFloating';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Navbar />
      
      {/* Contenedor principal con padding-top para compensar el navbar fijo */}
      <main style={{ paddingTop: '1px' }}>
        <Hero/>     
        <Countdown />
        <About />        
        <Categories />      
        <RouteMap />
        <SponsorsCarousel />
        <Contact />
      </main>
      
      <SocialMediaFloating />
      <Footer />
    </>
  );
}

export default Home;