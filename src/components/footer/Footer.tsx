import './Footer.css';

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
            <li><a href="#">Experience</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Workout</a></li>
            <li><a href="#">Movies & Series</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Writing</a></li>
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