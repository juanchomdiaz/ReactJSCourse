import React from "react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

const SearchContainer = ({toggleSearch}) => {
  return (
    <div className="search-container">
      <SearchBox toggleSearch={toggleSearch} />
      <SearchResults />
    </div>
  );
};

export default SearchContainer;
