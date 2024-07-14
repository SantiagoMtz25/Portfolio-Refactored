import './WritingCard.css';

interface WritingCardProps {
  title: string;
  description: string;
  image: string;
  date?: string;
  readTime?: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

const WritingCard: React.FC<WritingCardProps> = ({ title, description, image, date, readTime, isExpanded, onClick }) => {
  const previewText = description.length > 50 ? `${description.substring(0, 50)}...` : description;

  return (
    <div className={`ind-writing-card ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
      <div className="writing-card-image">
        <img src={image} alt='writing' />
      </div>
      <div className={`writing-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="writing-card-title">
          <h2>{title}</h2>
        </div>
        <div className="writing-card-description">
          <p>{isExpanded ? description : previewText}</p>
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
