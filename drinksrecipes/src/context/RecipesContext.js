import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);

    const [currentSearchObj, setCurrentSearchObj] = useState({
        ingredient: '',
        category: ''
    });

    useEffect( () => {
        const fetchRecipesFromAPI = async () => {

            if(currentSearchObj.ingredient.trim() !== '' && currentSearchObj.category.trim() !== '') {
                let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${currentSearchObj.ingredient}&${currentSearchObj.category}`;

                let result = await Axios.get(url);
    
                setRecipes(result.data.drinks);
            }
  
        };

        fetchRecipesFromAPI();
    }, [currentSearchObj]);

    return ( 
        <RecipesContext.Provider
            value={{
                recipes,
                setCurrentSearchObj
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}
 
export default RecipesProvider;