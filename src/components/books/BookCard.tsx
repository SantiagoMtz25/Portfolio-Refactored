import { useState } from 'react';
import './BookCard.css';

type BookCardProps = {
  title: string;
  author: string;
  description: string;
  shortReview: string;
  image: string;
  categories: string[];
}

const BookCard: React.FC<BookCardProps> = ({ title, author, description, shortReview, image, categories }) => {
  const [showBack, setShowBack] = useState(false);

  const handleShowBack = () => {
    setShowBack(!showBack);
  }

  return (
    showBack ? (
      <div className="article-wrapper">
        <div className="article-body">
          <div className="body-review">
            <h2>More about the book</h2>
            <p>{shortReview}</p>
          </div>
          <div className="read-more">
            <p>Go back</p>
            <i className="fa-solid fa-arrow-left" onClick={handleShowBack}></i>
          </div>
        </div>
      </div>
    ) : (
      <div className="article-wrapper">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="article-body">
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{description}</p>
          <div className="read-more">
            <p>Read more</p>
            <i className="fa-solid fa-arrow-right" onClick={handleShowBack}></i>
          </div>
        </div>
      </div>
    )
  );
}

export default BookCard;
