import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="What book do you want to look for?"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
