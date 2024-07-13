import './WritingCard.css';

interface WritingCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  date?: string;
  readTime?: string;
}

const WritingCard: React.FC<WritingCardProps> = ({ title, description, image, date, readTime }) => {
  return (
    <div className="writing-card">
      <div className="writing-card-image">
        <img src={image} alt='writing' />
      </div>
      <div className="writing-content">
        <div className="writing-card-title">
          <h2>{title}</h2>
        </div>
        <div className="writing-card-description">
          <p>{description}</p>
        </div>
        <div className="writing-card-bottom">
          <p>{date}</p>
          <p>{readTime}</p>
        </div>
      </div>
    </div>
  );
}

export default WritingCard;