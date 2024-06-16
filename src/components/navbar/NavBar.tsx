import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  const handleNavContact = () => {
    const navigate = useNavigate();
    navigate('/contact');
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">YOYO</Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/projects">Music</Link>
          </li>
          <li>
            <Link to="/projects">Workout</Link>
          </li>
          <li>
            <Link to="/projects">Movies & Series</Link>
          </li>
          <li>
            <Link to="/projects">Books</Link>
          </li>
          <li>
            <Link to="/projects">Writing</Link>
          </li>
        </ul>
      </div>
      <div className="contact">
        <button onClick={handleNavContact}>Contact</button>
      </div>
    </nav>
  );
}

export default NavBar;