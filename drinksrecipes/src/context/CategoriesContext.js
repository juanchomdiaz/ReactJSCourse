import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategoriesFromAPI = async () => {
            let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            let result = await Axios.get(url);

            setCategories(result.data.drinks);
        }

        fetchCategoriesFromAPI();
    },[]);

    return (
        <CategoriesContext.Provider
            value={{
                categories,
                setCategories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;