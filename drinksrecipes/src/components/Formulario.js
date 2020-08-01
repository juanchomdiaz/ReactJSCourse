import React, {useContext, useState} from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Formulario = () => {

    const { categories } = useContext(CategoriesContext);

    const { setCurrentSearchObj } = useContext(RecipesContext);

    const [searchObject, setSearchObj] = useState({
        ingredient: '',
        category: ''
    });

    const handleOnChange = ev => {
        setSearchObj({
            ...searchObject,
            [ev.target.name]: ev.target.value
        })
    };

    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                setCurrentSearchObj(searchObject);
            }}
        >
            <fieldset>
                <legend>Search drinks by category or ingredients</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="ingredient"
                        className="form-control"
                        placeholder="Search by ingredient"
                        onChange={handleOnChange}
                    />
                </div>

                <div className="col-md-4">
                    <select
                        name="category"
                        className="form-control"
                        onChange={handleOnChange}
                    >
                        <option value="">-- Choose a category --</option>

                        {categories.map( category => (
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Search recipes"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;