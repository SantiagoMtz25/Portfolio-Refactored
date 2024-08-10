import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='landing-container'>
      <main className="about-me">
        <aside className="description">
          <h1>I'm Santiago Martinez</h1>
          <h2>Fullstack Developer</h2>
          <p>
            Welcome to my portfolio! With a passion for coding and a
            knack for problem-solving, I specialize in creating
            user-friendly applications from front to back
          </p>
          <p>
            I possess a strong foundation in the following technologies
          </p>
          <div className="social_icons">
            <div className="icon"><i className="fab fa-git"></i></div>
            <div className="icon"><i className="fab fa-react"></i></div>
            <div className="icon"><i className="fab fa-python"></i></div>
            <div className="icon"><i className="fab fa-js"></i></div>
            <div className="icon"><i className="devicon-typescript-plain"></i></div>
            <div className="icon"><i className="fab fa-node"></i></div>
            <div className="icon"><i className="fab fa-css3"></i></div>
          </div>
        </aside>
        <div className='pp-container'>
          <section className="profile-picture">
            <div className='image-border1'></div>
            <div className='image-border2'></div>
            <img src='/src/assets/yoyo2.jpeg' alt='profile picture' />
          </section>
        </div>
      </main>
      <img className='wave' src='/src/assets/wave (1).svg' alt='wave' />
    </div>
  );
}

export default AboutMe;