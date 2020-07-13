import * as actionTypes from './actionTypes';

export const addInstruction = (instruction) => {
    return {
        type: actionTypes.ADD_INSTRUCTION,
        instruction: instruction
    }
};

export const deleteInstruction = (index) => {
    return {
        type: actionTypes.DELETE_INSTRUCTION,
        payload: index
    }
};

export const editInstruction = (instructions, instruction, index) => {
    return {
        type: actionTypes.EDIT_INSTRUCTION,
        instructions: instructions,
        instruction: instruction,
        index: index
    }
};

export const addIngredient = (ingredient) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: ingredient
    }
};

export const deleteIngredient = (index) => {
    return {
        type: actionTypes.DELETE_INGREDIENT,
        payload: index
    }
};

export const editIngredient = (ingredients, ingredient, index) => {
    return {
        type: actionTypes.EDIT_INGREDIENT,
        ingredients: ingredients,
        ingredient: ingredient,
        index: index
    }
};

export const isEdit = (bool) => ({type: actionTypes.IS_EDIT, payload: bool});
export const clearAddRecipeForm = () => ({type: actionTypes.CLEAR_ADD_RECIPE_FORM});

