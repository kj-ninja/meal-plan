import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: []
}

const recipesReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_RECIPE_SUCCESS:
            const newRecipe = {
                ...action.recipe,
                id: action.id
            }
            return {
                ...state,
                recipes: state.recipes.concat(newRecipe)
            };
        default:
            return state;
    }
};

export default recipesReducer;