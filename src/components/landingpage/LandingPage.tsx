import { Suspense, lazy } from 'react';
const AboutMe = lazy(() => import('../aboutme/AboutMe'));
const NavBar = lazy(() => import('../navbar/NavBar'));
const Introduction = lazy(() => import('../Introduction/Introduction'));
const Footer = lazy(() => import('../footer/Footer'));
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <AboutMe />
        <Introduction />
        <Footer />
      </Suspense>
    </div>
  );
};

export default LandingPage;