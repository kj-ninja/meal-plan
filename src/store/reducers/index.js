import {combineReducers} from "redux";
import authReducer from './auth';
import recipesReducer from './recipes';
import addRecipeReducer from "./addRecipe";

export default combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
    addRecipe: addRecipeReducer
});