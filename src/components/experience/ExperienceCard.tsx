import './ExperienceCard.css';

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  date,
}) => {
  return (
    <div className="experience-card">
      <div className="top-card">
        <h3>{company}</h3>
        <h1>{role}</h1>
        <p>{date}</p>
      </div>
      <div className="bottom-card">
        <p>View Achievements</p>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default ExperienceCard;