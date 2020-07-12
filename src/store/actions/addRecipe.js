import * as actionTypes from './actionTypes';

export const addInstruction = (instruction) => {
    return {
        type: actionTypes.ADD_INSTRUCTION,
        instruction: instruction
    }
};

export const addIngredient = (ingredient) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: ingredient
    }
};


