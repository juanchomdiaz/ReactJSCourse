import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

export const SearchResultsContext = createContext();

const SearchResultsProvider = (props) => {
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState('');
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        if(search.trim() !== '') {
            const fetchSearchResultsFromAPI = async () => {
                let url = `http://localhost:3035/products?q=${search}&limit=4`;

                let result = await Axios.get(url);

                setSearchResults(result.data.data);
                setTotalResults(result.data.total_results);
            }

            fetchSearchResultsFromAPI();
        } else {
            setSearchResults([]);
            setTotalResults(0);
        }
    },[search]);

    return (
        <SearchResultsContext.Provider
            value={{
                searchResults,
                totalResults,
                setSearch,
                search
            }}
        >
            {props.children}
        </SearchResultsContext.Provider>
    )
}

export default SearchResultsProvider;