import React from "react";

const SearchBar = ({ searchTerm, OnSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="What book do you want to look for?"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
