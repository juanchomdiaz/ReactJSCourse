import React, { useContext } from 'react';
import { SearchResultsContext } from '../context/SearchResultsContext';

const NoResults = ({message}) => {

    const {search} = useContext(SearchResultsContext);

    return(
        search.trim() !== '' && <div className="results-empty">{message}</div>
    );
};
   
 
export default NoResults;