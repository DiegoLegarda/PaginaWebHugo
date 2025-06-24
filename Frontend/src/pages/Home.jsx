// src/pages/Home.jsx
import Navbar from '../components/Navbar';
//import Hero from '../components/Hero';
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

function Home() {
  return (
    <>
      <Navbar />
      <BannerCarrusel />
      <Countdown />
      <About />
      <SponsorsCarousel />
      <Categories />
      <RegistrationForm />
      <Gallery />
      <RouteMap />
      <NewsSection />
      <Contact />
      <SocialMediaFloating />
      <Footer />
    </>
  );
}

export default Home;
