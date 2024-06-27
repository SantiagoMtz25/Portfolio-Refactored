import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const AboutMe = lazy(() => import('../aboutme/AboutMe'));
const NavBar = lazy(() => import('../navbar/NavBar'));
const Introduction = lazy(() => import('../introduction/Introduction'));
const Footer = lazy(() => import('../footer/Footer'));
const ContactMe = lazy(() => import('../contact/ContactMe'));
import './LandingPage.css';

const LandingPage = () => {
  const [onDevelopmentNotification, setOnDevelopmentNotification] = useState<boolean>(() => {
    return localStorage.getItem('onDevelopmentNotification') === 'true';
  });

  useEffect(() => {
    if (!onDevelopmentNotification) {
      toast.error('This site is under development. Some features may not work as expected.');
      localStorage.setItem('onDevelopmentNotification', 'true');
      setOnDevelopmentNotification(true);
    }
  }, []);

  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="landing-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
          }}
          gutter={8}
        />
        <NavBar contactRef={contactRef} />
        <AboutMe />
        <Introduction />
        <div ref={contactRef}>
          <ContactMe />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LandingPage;