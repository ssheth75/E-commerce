import React from 'react';

const SearchBar = () => {
  return (
    <div className="text-gray-600 w-1/5 drop-shadow-md">
      <input
        type="search"
        placeholder="Search..."
        className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-10 text-sm focus:outline-none font-Alliance"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
      </button>
    </div>
  );
};

export default SearchBar;
