import './Workout.css';
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import Gallery from './Gallery';

const Workout = () => {
  return (
    <div className="workout">
      <NavBar />
      <div className="workout-container">
        <div className="first-image">
          <img src='src\assets\swimming.jpg' alt='workout1' />
          <div className="gradient gradient1"></div>
          <div className="gradient gradient2"></div>
          <div className="quote">
            <h1>“If my mind can conceive it and my heart can believe it, then I can achieve it.”</h1>
            <h2>- Muhammad Ali</h2>
          </div>
        </div>
      </div>
      <div className="timeline">

      </div>
      <div className="image-gallery">
        <Gallery />
      </div>
      <div className="video-container">

      </div>
      <div className="last-image">
        <img src='src\assets\workout.jpg' alt='workout2' />
        <img className='wave3' src='src\assets\wave (5).svg' alt='wave' />
      </div>
      <Footer />
    </div>
  );
}

export default Workout; 