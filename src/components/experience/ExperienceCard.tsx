import { useState } from "react";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  achievements?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  date,
  achievements,
}) => {
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  const handleCardFlip = () => {
    setIsCardFlipped((prev) => !prev);
  };

  return (
    <div
      className={`experience-card ${isCardFlipped ? "flipped" : ""}`}
      onClick={handleCardFlip}
    >
      <div className="card-inner">
        <div className="card-front">
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

        <div className="card-back">
          <div className="back-content">
            <h3>Achievements</h3>
            <ul>
              {achievements?.length === 0 ? (
                <li>No achievements to show yet.</li>
              ) : (
                achievements?.map((achievement: string, index: number) => (
                  <li key={index}>{achievement}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
