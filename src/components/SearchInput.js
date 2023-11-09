import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {
    onSearch(searchQuery);
  }

  return (
    <form className="d-flex p-2" style={{ background: '#007bff', borderRadius: '10px' }}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={handleInputChange}
        style={{ background: 'transparent', border: '2px solid white', color: '#fff' }}
      />
      <button
        className="btn btn-outline-light"
        onClick={handleSearch}
        style={{ borderRadius: '0 10px 10px 0' }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchInput;
