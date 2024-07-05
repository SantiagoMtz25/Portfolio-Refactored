import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href={import.meta.env.VITE_GITHUB_URL} target='_blank'><i className="fab fa-github"></i></a>
          <a href={import.meta.env.VITE_LINKEDIN_URL} target='_blank'><i className="fab fa-linkedin"></i></a>
          <a href={import.meta.env.VITE_SPOTIFY_URL} target='_blank'><i className="fab fa-spotify"></i></a>
          <a href={import.meta.env.VITE_CHESS_URL} target='_blank'><i className="fa fa-chess"></i></a>
        </div>

        <div className="row">
          <ul>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/workout">Workout</Link></li>
            <li><Link to="/movies-series">Movies & Series</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/writing">Writing</Link></li>
          </ul>
        </div>

        <div className="row">
          Copyright © 2024 Santiago Martinez Vallejo - All rights reserved <br />
          Thanks for visiting!
        </div>
      </div>
    </footer>
  );
};

export default Footer;