import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, NavLink} from 'react-router-dom';
import {fetchRecipes} from "../../store/actions/recipes";
import {clearAddRecipeForm} from "../../store/actions/addRecipeForm";
import {fetchSchedules, setScheduleToShow} from "../../store/actions/schedules";
import {clearAddScheduleForm} from '../../store/actions/addScheduleForm';
import './Dashboard.scss';
import Widgets from "./Widgets/Widgets";
import Schedule from "../../components/Schedule/Schedule";
import AddRecipe from "../AddRecipe/AddRecipe";
import AddSchedule from "../AddSchedule/AddSchedule";
import Recipes from "../../components/Recipes/Recipes";
import Schedules from "../../components/Schedules/Schedules";

const Dashboard = (props) => {
    const {fetchRecipes, fetchSchedules, token, userId, scheduleToShow} = props;

    useEffect(() => {
        fetchRecipes(token, userId);
        fetchSchedules(token, userId);
    }, [fetchRecipes, fetchSchedules, token, userId]);

    const handleAddRecipe = () => {
        props.clearAddRecipeForm();
        props.history.push('/dashboard/add-recipe');
    };

    const handleAddSchedule = () => {
        props.clearAddScheduleForm();
        props.history.push('/dashboard/add-schedule');
    };

    const findRecipeByName = (recipeName) => {
        return props.recipes.find(recipe => recipe.name === recipeName);
    };

    const findScheduleById = (scheduleId) => {
        return props.schedules.find(schedule => schedule.id === scheduleId);
    };

    return (
        <section className="dashboard">
            <aside className="dashboard__panel">
                <ul className="dashboard__list">
                    <li><NavLink exact to="/dashboard">Pulpit</NavLink></li>
                    <li><NavLink to="/dashboard/recipes">Przepisy</NavLink></li>
                    <li><NavLink to="/dashboard/schedules">Plany</NavLink></li>
                    {/*<li><NavLink to="/dashboard/shopping-list">Shopping list</NavLink></li>*/}
                </ul>
            </aside>
            <div className="dashboard__container">
                <Route exact path="/dashboard" render={() =>
                    <Widgets handleAddRecipe={handleAddRecipe}
                             handleAddSchedule={handleAddSchedule}
                             recipesCount={props.recipes.length}/>}
                />
                <Route exact path="/dashboard" render={() => (
                    <Schedule scheduleToShow={scheduleToShow}
                              schedules={props.schedules}
                              setSchedule={props.setScheduleToShow}
                              recipes={props.recipes}
                              findRecipe={findRecipeByName}/>
                )}/>

                <Route path="/dashboard/recipes"
                       render={() => <Recipes {...props} recipes={props.recipes} findRecipe={findRecipeByName}/>}/>
                <Route path="/dashboard/schedules"
                       render={() => <Schedules {...props} schedules={props.schedules} findSchedule={findScheduleById}/>}/>
                <Route path="/dashboard/add-recipe" component={AddRecipe}/>
                <Route path="/dashboard/add-schedule" component={AddSchedule}/>
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        recipes: state.recipes.recipes,
        schedules: state.schedules.schedules,
        scheduleToShow: state.schedules.scheduleToShow
    }
};

export default connect(mapStateToProps, {
    fetchRecipes,
    fetchSchedules,
    clearAddRecipeForm,
    clearAddScheduleForm,
    setScheduleToShow
})(Dashboard);