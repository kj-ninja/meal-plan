import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: [],
    loading: false,
    error: null
}

const recipesReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_RECIPE_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.recipes,
                loading: false,
                error: null
            }
        case actionTypes.FETCH_RECIPE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.ADD_RECIPE_SUCCESS:
            const newRecipe = {
                ...action.recipe,
                recipeId: action.recipeId
            }
            return {
                ...state,
                loading: false,
                recipes: state.recipes.concat(newRecipe),
                error: null
            };
        default:
            return state;
    }
};

export default recipesReducer;