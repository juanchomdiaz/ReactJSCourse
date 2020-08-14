import React, {useContext, Fragment} from 'react';
import { SearchResultsContext } from '../context/SearchResultsContext';
import Product from './Product';
import NoResults from './NoResults';
import SearchStats from './SearchStats';

const SearchResults = () => {

    const {searchResults} = useContext(SearchResultsContext);

    return ( 
        <div className="results-container">
            { (searchResults.length ?
                <Fragment>
                    <SearchStats />
                   
                    <div className="results-product__wrapper">
                        { searchResults.map( product => (
                            <Product  
                                key={product._id} 
                                product={product} 
                            />
                        )) }
                    </div>
                </Fragment>

            : <NoResults message="We're sorry! There are no results matching your search." /> 
            )}
        </div>
    );
}
 
export default SearchResults;