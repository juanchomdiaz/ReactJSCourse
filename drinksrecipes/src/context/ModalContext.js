import React, { createContext, useEffect, useState} from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [ recipeId, setRecipeId ] = useState(null);
    const [ recipeDetails, setRecipe] = useState({});

    useEffect( () => {
        const fetchRecipeDetailsFromAPI = async () => {
            if(!recipeId) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

            const result = await Axios.get(url);

            setRecipe(result.data.drinks[0]);
        }

        fetchRecipeDetailsFromAPI();
    }, [recipeId]);

    return ( 
        <ModalContext.Provider
            value={{
                recipeDetails,
                setRecipeId,
                setRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;