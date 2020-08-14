import React, {useContext} from "react";
import { SearchResultsContext } from "../context/SearchResultsContext";

const SearchStats = () => {

  const {searchResults, totalResults } = useContext(SearchResultsContext);

  return (
    <div className="results-stats">
      <p>
        {`Displaying ${searchResults.length} of ${totalResults} results. `}
        <a href="#">See all results</a>
      </p>
    </div>
  );
};

export default SearchStats;
