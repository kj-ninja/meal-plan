import {combineReducers} from "redux";
import authReducer from './auth';
import recipesReducer from './recipes';
import addRecipeReducer from "./addRecipeForm";
import schedulesReducer from "./schedules";
import addScheduleReducer from './addScheduleForm';

export default combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
    addRecipeForm: addRecipeReducer,
    schedules: schedulesReducer,
    addScheduleForm: addScheduleReducer
});