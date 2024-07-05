import './FutureCard.css'

interface FutureCardProps {
  title: string;
  description: string;
}

const FutureCard: React.FC<FutureCardProps> = ({
  title, description
}) => {
  return (
    <div className='future-card'>
      <div className="future-icons">
        <i className="fa-solid fa-mobile"></i>
        <i className="fa-solid fa-laptop-code"></i>
      </div>
      <div className="future-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FutureCard;