import React, {useContext, useEffect, useRef } from 'react';
import { SearchResultsContext } from '../context/SearchResultsContext';

const SearchBox = ({toggleSearch}) => {

    const {setSearch} = useContext(SearchResultsContext);
    const inputRef = useRef(null);

    useEffect(() => {
      if (toggleSearch) {
        inputRef.current.focus();
      }
    }, [toggleSearch]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return ( 
        <div className="search-box">
            <input ref={inputRef} type="text" onChange={handleChange}/>

            <a href="#"onClick={toggleSearch}>
                <i className="material-icons close">close</i>
            </a>
        </div>
    );
}
 
export default SearchBox;