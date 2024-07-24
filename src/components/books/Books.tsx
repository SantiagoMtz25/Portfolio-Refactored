import './Books.css';
import NavBar from "../navbar/NavBar";
import SearchBar from './SearchBar';
import Footer from '../footer/Footer';
import BookCard from './BookCard';
import { useState } from 'react';

type Book = {
  title: string;
  author: string;
  description: string;
  shortReview: string;
  image: string;
  categories: string[];
};

const Books = () => {
  const [books] = useState<Book[]>([
    {
      title: 'El Monje que Vendió su Ferrari',
      author: 'Robin Sharma',
      description: 'Un libro que te enseña a vivir una vida con propósito y significado.',
      shortReview: 'Here will go a short review of the book.',
      image: 'src/assets/monje.jpg',
      categories: ['Desarrollo Personal', 'Espiritualidad']
    },
    {
      title: 'Las enseñanzas de Don Juan',
      author: 'Carlos Casteñeda',
      description: 'Un libro que te enseña a ver el mundo desde una perspectiva diferente.',
      shortReview: 'Here will go a short review of the book.',
      image: 'src/assets/okiwave.jpg',
      categories: ['Antroposofía', 'Espiritualidad']
    },
    {
      title: 'Mis Amigos los Sentidos',
      author: 'Carlos G. Vallés',
      description: 'Un libro que te enseña a conocer y a cuidar tus sentidos.',
      shortReview: 'Here will go a short review of the book.',
      image: 'src/assets/sentidos.jpg',
      categories: ['Filosofía', 'Antroposofía', 'Desarrollo Personal']
    }
  ]);

  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  const handleSearch = (category: string, searchTerm: string) => {
    let newFilteredBooks = books;

    if (category !== 'all') {
      newFilteredBooks = newFilteredBooks.filter(book => book.categories.includes(category));
    }

    if (searchTerm) {
      newFilteredBooks = newFilteredBooks.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredBooks(newFilteredBooks);
  };

  return (
    <div className='books'>
      <NavBar />
      <div className="books-header">
        <div className="books-image">
          <img src='src/assets/thumb-1920-1014821.png' alt='books' />
          <div className="gradient gradient1"></div>
          <div className="gradient gradient2"></div>
        </div>
        <div className="books-header-text">
          <h1>Los libros no te enseñan nada nuevo, solo te ayudan a ver lo que
            ya esta dentro de ti</h1>
          <h2>- El Monje que Vendió su Ferrari</h2>
        </div>
      </div>
      <img className='wave9' src='src/assets/wave (9).svg' alt='wave' />
      <SearchBar onSearch={handleSearch} />
      <div className="cards-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              description={book.description}
              shortReview={book.shortReview}
              image={book.image}
              categories={book.categories}
            />
          ))
        ) : (
          <div className="no-results">No books found.</div>
        )}
      </div>
      <img className='wave3' src='src/assets/wave (5).svg' alt='wave' />
      <Footer />
    </div>
  );
}

export default Books;
