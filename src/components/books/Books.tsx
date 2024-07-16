import './Books.css';
import NavBar from "../navbar/NavBar";
import SearchBar from './SearchBar';
import Footer from '../footer/Footer';

const Books = () => {
  return (
    <div className='books'>
      <NavBar />
      <div className="books-header">
        <div className="books-image">
          <img src='src\assets\thumb-1920-1014821.png' alt='books' />
          <div className="gradient gradient1"></div>
          <div className="gradient gradient2"></div>
        </div>
        <div className="books-header-text">
          <h1>Los libros no te enseñan nada nuevo, solo te ayudan a ver lo que
            ya esta dentro de ti</h1>
          <h2>- El Monje que Vendió su Ferrari</h2>
        </div>
      </div>
      <img className='wave9' src='src\assets\wave (9).svg' alt='wave' />
      <SearchBar />
      <div className="cards-container">

      </div>
      <img className='wave3' src='src\assets\wave (5).svg' alt='wave' />
      <Footer />
    </div>
  );
}

export default Books;