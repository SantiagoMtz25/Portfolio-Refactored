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
                <li>Gymrat, Runner & Swimmer</li>
                <li>Movies & Books Lover</li>
              </ul>
            </div>
          </h4>
          <p className="introduction-paragraph">
            I'm a Fullstack Developer, I bring a vibrant 
            mix of technical skills and creativity to the world 
            of software. My journey includes internships and a 
            range of projects that display my passion for 
            techonology and my commitment to creating solutions 
            that address real and important necessities.
          </p>
          <p className="introduction-paragraph">
            I love listening to music, watching movies, 
            reading books, playing chess, working out, boxing 
            and playing the guitar. I'm a big fan of the 49ers 
            and Real Madrid. I invite you to take a further look 
            into my world and get to know me better by exploring 
            my website and all its content. Thank you for visiting!
          </p>
        </div>
      </div>
    </>
  );
}

export default Introduction;