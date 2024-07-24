import './Experience.css';
import NavBar from '../navbar/NavBar';
import ProgressLine from './ProgressLine';
import TitleHeader from './TitleHeader';
import ExperienceCard from './ExperienceCard';
import Dropdown from './Dropdown';
import Footer from '../footer/Footer';
import { useState } from 'react';

type DropdownState = number | null;

const Experience = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownState>(null);

  const handleDropdown = (id: DropdownState) => {
    setIsDropdownOpen(prevId => (prevId === id ? null : id));
  };

  return (
    <div className='experience'>
      <NavBar />
      <TitleHeader title='Experience' bgTitle='Experience' />
      <div className="skills-description">
        <div className="skills-text">
          <h2>All my skills in the field of technology and software.</h2>
          <p>
            I have a wide range of skills in the field of technology and software.
            Including programming languages, frameworks, libraries, databases, tools,
            such as Python, JavaScript, TypeScript, React, Node.js, Express, Django,
            MongoDB, Git, Kotlin, Flutter, Power Automate, Power Apps, and Power BI.
          </p>
        </div>
        <div className="skills-list">
          <ProgressLine label="JavaScript" visualParts={[{ percentage: "90%", color: '#19747E' }]} />
          <ProgressLine label="CSS" visualParts={[{ percentage: "85%", color: '#19747E' }]} />
          <ProgressLine label="Python" visualParts={[{ percentage: "80%", color: '#19747E' }]} />
          <ProgressLine label="TypeScript" visualParts={[{ percentage: "75%", color: '#19747E' }]} />
          <ProgressLine label="React" visualParts={[{ percentage: "70%", color: '#19747E' }]} />
          <ProgressLine label="Node.js" visualParts={[{ percentage: "65%", color: '#19747E' }]} />
          <ProgressLine label="Kotlin" visualParts={[{ percentage: "50%", color: '#19747E' }]} />
          <ProgressLine label="Flutter" visualParts={[{ percentage: "15%", color: '#19747E' }]} />
          <ProgressLine label="Django" visualParts={[{ percentage: "10%", color: '#19747E' }]} />
        </div>
      </div>
      <TitleHeader title='Work' bgTitle='Work' />
      <div className="work">
        <ExperienceCard company='British American Tobacco' role='IDT Operations Intern' date='Jan 2024 - Jun 2024' />
        <ExperienceCard company='Schneider Electric' role='IT Data Domain Intern' date='Jun 2023 - Nov 2023' />
      </div>
      <TitleHeader title='Education' bgTitle='Education' />
      <div className="work">
        <ExperienceCard company='Tecnologico de Monterrey' role='B.S. Computer Science and Technology' date='Aug 2021 - Jun 2025' />
        <ExperienceCard company='Tecnologico de Monterrey' role='Diplomat Information Technology Project Management (APTI)' date='Jul 2024 - Present' />
      </div>
      <div className="values">
        <div className="values-description">
          <h3>Job Satisfaction</h3>
          <h1>Work & Learning Values</h1>
          <p>
            These are the values that I have learned and acquired throughout my career and studies.
            These values have helped me to be a better professional and person.
          </p>
        </div>
        <div className="dropdown-values">
          <Dropdown
            title='Continuous Learning'
            description='Learning is a continuous path of constant improvement, never stop learning.'
            isOpen={isDropdownOpen === 0}
            openDropdown={() => handleDropdown(0)}
          />
          <Dropdown
            title='Teamwork'
            description='You can only get thus far on your own, accept what others have to share and teach with you.'
            isOpen={isDropdownOpen === 1}
            openDropdown={() => handleDropdown(1)}
          />
          <Dropdown
            title='Problem Solving'
            description='You will come across problems you do not know how to solve, here its where your creativity comes along.'
            isOpen={isDropdownOpen === 2}
            openDropdown={() => handleDropdown(2)}
          />
          <Dropdown
            title='Desire'
            description='Learning and studying the things you have to in order to become the person you wish to be.'
            isOpen={isDropdownOpen === 3}
            openDropdown={() => handleDropdown(3)}
          />
          <Dropdown
            title='Modesty'
            description='Accept that there is always new things to learn, from anyone or anything.'
            isOpen={isDropdownOpen === 4}
            openDropdown={() => handleDropdown(4)}
          />
        </div>
      </div>
      <img className='wave3' src='src\assets\wave (5).svg' alt='wave' />
      <Footer />
    </div>
  );
};

export default Experience;
