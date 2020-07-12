import * as actionTypes from "./actionTypes";
import axios from "../../axios-instance";

export const addRecipeStart = () => ({type:actionTypes.ADD_RECIPE_START});

export const addRecipeSuccess = (id, recipe) => {
    return {
        type: actionTypes.ADD_RECIPE_SUCCESS,
        recipeId: id,
        recipe: recipe
    }
};

export const addRecipeFail = (error) => {
    return {
        type: actionTypes.ADD_RECIPE_FAIL,
        error: error
    }
};

export const addRecipe = (token, recipe) => {
    return dispatch => {
        dispatch(addRecipeStart());
        axios.post('/recipes.json?auth=' + token, recipe, {
        })
            .then(function (res) {
                dispatch(addRecipeSuccess(res.data.name, recipe));
            })
            .catch(error => {
                console.log(error);
                dispatch(addRecipeFail(error));
            });
    };
};