import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: '',
    description: '',
    instructions: [],
    ingredients: []
}

const addRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INSTRUCTION:
            return {
                ...state,
                instructions: state.instructions.concat(action.instruction)
            }
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.concat(action.ingredient)
            }
        default:
            return state;
    }
};

export default addRecipeReducer;