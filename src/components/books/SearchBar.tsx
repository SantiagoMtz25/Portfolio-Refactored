import { ChangeEvent, useEffect, useState } from 'react';
import './SearchBar.css';

type SearchBarProps = {
  onSearch: (category: string, searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [category, setCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    onSearch(category, searchTerm);
  }, [category, searchTerm]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  }

  const handleReset = () => {
    setCategory('all');
    setSearchTerm('');
  }

  return (
    <div className="search-bar-container">
      <div className="filters-container">
        <select className="select" value={category} onChange={handleCategoryChange}>
          <option value="all">Categories</option>
          <option value="Antroposofía">Antroposofía</option>
          <option value="Religión">Religión</option>
          <option value="Filosofía">Filosofía</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Arte">Arte</option>
          <option value="Política">Política</option>
          <option value="Economía">Economía</option>
          <option value="Sociedad">Sociedad</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Amor">Amor</option>
          <option value="Desarrollo Personal">Desarrollo Personal</option>
          <option value="Espiritualidad">Espiritualidad</option>
        </select>
        <input
          type="text"
          placeholder="Search by book title..."
          value={searchTerm}
          onChange={handleInputChange}
          className="input"
        />
        <button className="button" onClick={handleReset}>Reset Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
