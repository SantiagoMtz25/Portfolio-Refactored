import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useScreenSize from '../../hooks/screen/ScreenSize';
import useScrollToSection from '../../hooks/screen/ScrollToSection';

type NavBarProps = {
  contactRef?: React.RefObject<HTMLDivElement>;
};

const NavBar: React.FC<NavBarProps> = ({ contactRef }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState<boolean>(false);
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [allowDownload] = useState<boolean>(
    location.pathname !== '/' && location.pathname !== '/fallback'
  );

  const toggleNav = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const handleNavContact = () => {
    setToggleDropdown(false);
    useScrollToSection(contactRef as React.RefObject<HTMLDivElement>);
  };

  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 1122) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [screenSize.width]);

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">YOYO</Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/workout">Workout</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/writing">Writing</Link>
            </li>
            <li>
              <Link to="/movies-series">Gift</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          {!showNav ? (
            <>
              {allowDownload ? (
                <>
                  <a href="/resume.pdf" download>
                    <button>Download CV</button>
                  </a>
                </>
              ) : (
                <>
                  <button onClick={handleNavContact}>Contact</button>
                </>
              )}
            </>) : (
            <>
              <button onClick={toggleNav}>Menu</button>
              {toggleDropdown && (
                <div className="dropdown">
                  <ul>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/workout">Workout</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/writing">Writing</Link></li>
                    <li><Link to="/movies-series">Gift</Link></li>
                    {allowDownload ? (
                      <>
                      <li><a href='/src/assets/Resume Santiago Martinez Vallejo.pdf' download>Download CV</a></li>
                      </>
                    ) : (
                      <>
                      <li><a onClick={handleNavContact}>Contact</a></li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
