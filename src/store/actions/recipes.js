import * as actionTypes from "./actionTypes";
import axios from "../../axios-instance";

export const fetchRecipeStart = () => ({type: actionTypes.FETCH_RECIPE_START});

export const fetchRecipesSuccess = (recipes) => {
    return {
        type: actionTypes.FETCH_RECIPES_SUCCESS,
        recipes: recipes
    }
};

export const fetchRecipeFail = (error) => {
    return {
        type: actionTypes.FETCH_RECIPE_FAIL,
        error: error
    }
};

export const fetchRecipes = (token, userId) => {
    return dispatch => {
        dispatch(fetchRecipeStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/recipes.json' + queryParams)
            .then(res => {
                const fetchedRecipes = [];
                for (let key in res.data) {
                    fetchedRecipes.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchRecipesSuccess(fetchedRecipes));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchRecipeFail(error));
            });
    };
};

export const addRecipeSuccess = (id, recipe) => {
    return {
        type: actionTypes.ADD_RECIPE_SUCCESS,
        recipeId: id,
        recipe: recipe
    }
};

export const addRecipe = (token, recipe) => {
    return dispatch => {
        dispatch(fetchRecipeStart());
        axios.post('/recipes.json?auth=' + token, recipe, {})
            .then(function (res) {
                dispatch(addRecipeSuccess(res.data.name, recipe));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchRecipeFail(error));
            });
    };
};

export const deleteRecipe = (token, recipeId, userId) => {
    return dispatch => {
        dispatch(fetchRecipeStart());
        axios.delete('/recipes/' + recipeId + '.json?auth=' + token)
            .then(function (res) {
                dispatch(fetchRecipes(token, userId));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchRecipeFail(error));
            });
    };
};

export const editRecipe = (token, recipeId, userId, recipe) => {
    return dispatch => {
        dispatch(fetchRecipeStart());
        axios.patch('/recipes/' + recipeId + '.json?auth=' + token, recipe)
            .then(function (res) {
                dispatch(fetchRecipes(token, userId));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchRecipeFail(error));
            });
    };
};