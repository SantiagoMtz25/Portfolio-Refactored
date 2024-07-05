import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import FutureCard from './FutureCard';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <NavBar />
      <div className="main-projects">
        <h1>Taking ideas and requirements into real products and solutions.</h1>
        <p>
          Projects are the way to put into action all the knowledge and skills acquired,
          facing challenges and solving problems in the best possible way. Here are some
          of the projects that I have developed, from web applications to mobile applications,
          and digitalization.
        </p>
      </div>
      <div className="grid-projects">
        <ProjectCard
          title='1. Chatbot Application'
          description='Web app to manage assistance and support to Neoris users, page is controlled by admin users, integrated 
with a fine-tuned chatbot to answer questions, functionalities to manage account, and response notifications.'
          date='Feb 2024 - Jun 2024'
          imageLocation='src\assets\chatbot.png'
        />
         <ProjectCard
          title='2. Blog Application'
          description='App where users can register, and post blog cards with real time updates, account management 
functionalities and multiple API integrations'
          date='Oct 2023 - Jan 2024'
          imageLocation='src\assets\blogapp.png'
        />
        <ProjectCard
          title='4. University Survey Webpage'
          description="Interactive web page for my university's student annual survey seeking to increase student participation. 
The survey forms were integrated in an interactive Unity game, which was embedded in a web page served 
in PHP"
          date='Mar 2023 - Jun 2023'
          imageLocation='src\assets\paginaphp.png'
        />
        <ProjectCard
          title='3. Arduino Connected to Cloud'
          description='Sensor connected to cloud with Firebase, could be activated or deactivated remotely through a webpage 
and assistant Alexa. Sensor’s activity was stored in MySQL'
          date='Sep 2022 - Dec 2022'
          imageLocation='src\assets\Pruebas_arduino.jpeg'
        />
      </div>
      <div className="future-projects">
        <h1>Future and current projects.</h1>
        <p>
          These are the projects that I am currently working on or that are in the planning stage.
        </p>
        <FutureCard title='Traveling Mobile App' description='Scrape the best traveling offers, plan your next travel, share with others, discover lookout spots, hidden gems and more all in one.' />
        <FutureCard title='Mobile Sports App' description='Track your progress across multiple sports, as you progress your character will develop with you, all with my personal and unique touch to it. ' />
      </div>
      <img className='wave3' src='src\assets\wave (5).svg' alt='wave' />
      <Footer />
    </div>
  );
};

export default Projects;