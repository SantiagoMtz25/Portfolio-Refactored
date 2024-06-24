import './Introduction.css'
import './Intro.scss'

const Introduction = () => {
  return (
    <>
      <div className="introduction">
        <div className="icon-grid">
          <div className="first-image"></div>
          <div className="second-image"></div>
          <div className="react-icon"><i className="fa-solid fa-code"></i></div>
          <div className="creativity-icon"><i className="fa-regular fa-lightbulb"></i></div>
          <div className="music-icon"><i className="fa-solid fa-music"></i></div>
          <div className="gym-icon"><i className="fa-solid fa-dumbbell"></i></div>
        </div>
        <div className="introduction-text">
          <h4 className="wordCarousel">
            <span>Hi, I'm Santiago,</span>
            <div>
              <ul className="flip5">
                <li>Fullstack Developer</li>
                <li>Musician</li>
                <li>Athlete</li>
                <li>Movies & Books Lover</li>
              </ul>
            </div>
          </h4>
          <p className="introduction-paragraph">
            I'm a Fullstack Developer, I bring a vibrant <br></br>
            mix of technical skills and creativity to the world <br></br>
            of software. My journey includes internships and a <br></br>
            range of projects that display my passion for <br></br>
            techonology and my commitment to creating solutions <br></br>
            that address real and important necessities
          </p>
          <p className="introduction-paragraph">
            I love listening to music, watching movies, <br></br>
            reading books, playing chess, working out, boxing <br></br>
            and playing the guitar. I'm a big fan of the 49ers <br></br>
            and Real Madrid. I invite you to take a further look <br></br>
            into my world and get to know me better by exploring <br></br>
            my website and all its content. Thank you for visiting!
          </p>
        </div>
      </div>
    </>
  );
}

export default Introduction;