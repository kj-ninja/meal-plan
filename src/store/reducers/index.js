import {combineReducers} from "redux";
import authReducer from './auth';
import recipesReducer from './recipes';
import addRecipeReducer from "./addRecipe";
import schedulesReducer from "./schedules";
// import addScheduleReducer from './addSchedule';

export default combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
    addRecipe: addRecipeReducer,
    schedules: schedulesReducer
});