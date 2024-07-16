import { ChangeEvent, useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [category, setCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    throw new Error('Function not implemented.');
  }

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>): void => {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="search-bar-container">
      <div className="filters-container">
        <select className="select" value={category} onChange={handleCategoryChange}>
          <option value="all">Categories</option>
          <option value="category1">Antroposofía</option>
          <option value="category2">Religión</option>
          <option value="category3">Filosofía</option>
          <option value="category4">Ciencia</option>
          <option value="category5">Arte</option>
          <option value="category6">Política</option>
          <option value="category7">Economía</option>
          <option value="category8">Sociedad</option>
          <option value="category10">Tecnología</option>
          <option value="category11">Amor</option>
        </select>
        <input
          type="text"
          placeholder="Search by books title..."
          value={searchTerm}
          onChange={handleInputChange}
          className="input"
        />
        <button className="button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
