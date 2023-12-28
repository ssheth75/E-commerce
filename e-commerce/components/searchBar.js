import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue); // Callback to pass the query to the parent component
  }

  return (
    <div className="text-gray-600 w-1/5 drop-shadow-md">
      <input
        type="search"
        placeholder="Search..."
        className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-10 text-sm focus:outline-none font-Alliance"
        onChange={handleChange}
        value={query}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mr-2"
      ></button>
    </div>
  );
};

export default SearchBar;
