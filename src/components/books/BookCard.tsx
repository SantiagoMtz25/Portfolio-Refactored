import './BookCard.css';

type BookCardProps = {
  title: string;
  author: string;
  description: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, description }) => {
  return (
    <div className="article-wrapper">
      <figure>
        <img src="https://picsum.photos/id/1011/800/450" alt="" />
      </figure>
      <div className="article-body">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{description}</p>
        <a href="#" className="read-more">
          Read full review<span className="sr-only"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BookCard;