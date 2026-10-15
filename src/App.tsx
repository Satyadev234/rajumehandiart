import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import CelebrationCategories from './sections/CelebrationCategories';
import BridalPackages from './sections/BridalPackages';
import SacredMehndiJourney from './sections/SacredMehndiJourney';
import RecentCreations from './sections/RecentCreations';
import SignatureBridalStyles from './sections/SignatureBridalStyles';
import RajuPromise from './sections/RajuPromise';
import FromConeToCelebration from './sections/FromConeToCelebration';
import WordsFromOurBrides from './sections/WordsFromOurBrides';
import AboutSection from './sections/AboutSection';
import FinalCtaSection from './sections/FinalCtaSection';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const getInitialView = () => {
    if (window.location.hash === '#contact') return 'contact';
    if (window.location.hash === '#gallery') return 'gallery';
    if (window.location.hash === '#about') return 'about';
    if (window.location.hash === '#services') return 'services';
    return 'home';
  };

  const [currentView, setCurrentView] = useState<'home' | 'contact' | 'gallery' | 'about' | 'services'>(getInitialView());

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#gallery') {
        setCurrentView('gallery');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#about') {
        setCurrentView('about');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#services') {
        setCurrentView('services');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash === '#contact') {
      setCurrentView('contact');
    } else if (window.location.hash === '#gallery') {
      setCurrentView('gallery');
    } else if (window.location.hash === '#about') {
      setCurrentView('about');
    } else if (window.location.hash === '#services') {
      setCurrentView('services');
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateToContact = () => {
    window.location.hash = 'contact';
    setCurrentView('contact');
    window.scrollTo(0, 0);
  };

  const navigateToGallery = () => {
    window.location.hash = 'gallery';
    setCurrentView('gallery');
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    window.location.hash = 'about';
    setCurrentView('about');
    window.scrollTo(0, 0);
  };

  const navigateToServices = () => {
    window.location.hash = 'services';
    setCurrentView('services');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.location.hash = 'home';
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#382326] font-sans antialiased selection:bg-[#E9D8B8] selection:text-[#3A1017]">
      <Navbar 
        onNavigateContact={navigateToContact} 
        onNavigateGallery={navigateToGallery}
        onNavigateAbout={navigateToAbout}
        onNavigateServices={navigateToServices}
        onNavigateHome={navigateToHome} 
        currentView={currentView} 
      />
      <main className="flex-1">
        {currentView === 'contact' ? (
          <ContactPage onNavigateHome={navigateToHome} />
        ) : currentView === 'gallery' ? (
          <GalleryPage onNavigateHome={navigateToHome} />
        ) : currentView === 'about' ? (
          <AboutPage onNavigateHome={navigateToHome} onNavigateContact={navigateToContact} />
        ) : currentView === 'services' ? (
          <ServicesPage onNavigateHome={navigateToHome} onNavigateContact={navigateToContact} />
        ) : (
          <>
            <HeroSection />
            <CelebrationCategories />
            <BridalPackages />
            <SacredMehndiJourney />
            <RecentCreations />
            <SignatureBridalStyles />
            <RajuPromise />
            <FromConeToCelebration />
            <WordsFromOurBrides />
            <AboutSection />
            <FinalCtaSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
