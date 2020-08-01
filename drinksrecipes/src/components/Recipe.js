import React, { useState, useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ recipe }) => {
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const { recipeDetails, setRecipeId, setRecipe } = useContext(ModalContext);

    const displayIngredients = details => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (details[`strIngredient${i}`]) {
                ingredients.push(
                    <li> {details[`strIngredient${i}`]}  {details[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients;
    }


    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>

                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`${recipe.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => {
                            setRecipeId(recipe.idDrink);
                            handleOpen();
                        }}
                    >View recipe</button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setRecipeId(null);
                            setRecipe({})
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeDetails.strDrink}</h2>
                            <h3 className="mt-4">Directions</h3>
                            <p>
                                {recipeDetails.strInstructions}
                            </p>

                            <img className="img-fluid my-4" src={recipeDetails.strDrinkThumb} alt={`${recipeDetails.strDrink}`}/>

                            <h3>Ingredients and amounts</h3>
                            <ul>
                                {displayIngredients(recipeDetails)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;