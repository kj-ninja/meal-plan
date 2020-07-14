import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipe: {
        name: '',
        description: '',
        instructions: [],
        ingredients: []
    },
    isListEdit: false,
    isRecipeEdit: false
}

const addRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INSTRUCTION:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    instructions: state.recipe.instructions.concat(action.instruction)
                }
            }
        case actionTypes.DELETE_INSTRUCTION:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    instructions: state.recipe.instructions.filter((instruction, i) => i !== action.payload)
                }
            }
        case actionTypes.EDIT_INSTRUCTION:
            const newInstructions = action.instructions.map((item, index) => {
                if (index !== action.index) {
                    // This isn't the item we care about - keep it as-is
                    return item
                }

                // Otherwise, this is the one we want - return an updated value
                return action.instruction

            });
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    instructions: newInstructions
                }
            }
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    ingredients: state.recipe.ingredients.concat(action.ingredient)
                }
            }
        case actionTypes.DELETE_INGREDIENT:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    ingredients: state.recipe.ingredients.filter((ingredient, i) => i !== action.payload)
                }
            }
        case actionTypes.EDIT_INGREDIENT:
            const newIngredients = action.ingredients.map((item, index) => {
                if (index !== action.index) {
                    // This isn't the item we care about - keep it as-is
                    return item
                }

                // Otherwise, this is the one we want - return an updated value
                return action.ingredient

            });
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    ingredients: newIngredients
                }
            }
        case actionTypes.MAP_RECIPE_TO_EDIT:
            return {
                ...state,
                recipe: action.recipe,
                isRecipeEdit: true
            }
        case actionTypes.LIST_EDIT:
            return {
                ...state,
                isListEdit: action.payload
            }
        case actionTypes.CLEAR_ADD_RECIPE_FORM:
            return {
                ...state,
                recipe: initialState.recipe
            }
        default:
            return state;
    }
};

export default addRecipeReducer;