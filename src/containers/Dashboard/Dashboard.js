import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, NavLink} from 'react-router-dom';
import {fetchRecipes} from "../../store/actions/recipes";
import {clearAddRecipeForm} from "../../store/actions/addRecipe";
import {fetchSchedules} from "../../store/actions/schedules";
import './Dashboard.scss';
import Widgets from "./Widgets/Widgets";
import Schedule from "../../components/Schedule/Schedule";
import AddRecipe from "../AddRecipe/AddRecipe";
import AddSchedule from "../AddSchedule/AddSchedule";
import Recipes from "../../components/Recipes/Recipes";
import Schedules from "../../components/Schedules/Schedules";

const Dashboard = (props) => {
    const {fetchRecipes, fetchSchedules, token, userId} = props;

    useEffect(() => {
        fetchRecipes(token, userId);
        fetchSchedules(token, userId);
    }, [fetchRecipes, fetchSchedules, token, userId]);

    const handleAddRecipe = () => {
        props.clearAddRecipeForm();
        props.history.push('dashboard/add-recipe');
    };

    const handleAddSchedule = () => {
        props.history.push('dashboard/add-schedule');
    };

    return (
        <section className="dashboard">
            <aside className="dashboard__panel">
                <ul className="dashboard__list">
                    <li><NavLink exact to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/dashboard/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/dashboard/schedules">Plans</NavLink></li>
                    <li><NavLink to="/dashboard/shopping-list">Shopping list</NavLink></li>
                </ul>
            </aside>
            <div className="dashboard__container">
                <Route exact path="/dashboard"
                       render={() => <Widgets addRecipe={handleAddRecipe} addSchedule={handleAddSchedule}/>}/>
                <Route exact path="/dashboard" component={Schedule}/>
                <Route path="/dashboard/recipes"
                       render={()=><Recipes recipes={props.recipes}/>}/>
                <Route path="/dashboard/schedules"
                       render={()=><Schedules schedules={props.schedules}/>}/>
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
        schedules: state.schedules.schedules
    }
};

export default connect(mapStateToProps, {fetchRecipes, fetchSchedules, clearAddRecipeForm})(Dashboard);