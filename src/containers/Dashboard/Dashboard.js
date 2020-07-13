import React from 'react';
import {connect} from 'react-redux';
import {Route, NavLink, Switch} from 'react-router-dom';
import './Dashboard.scss';
import Widgets from "./Widgets/Widgets";
import Plan from "../../components/Plan/Plan";
import AddRecipe from "../../components/AddRecipe/AddRecipe";
import AddSchedule from "../../components/AddSchedule/AddSchedule";
import Recipes from "../Recipes/Recipes";
import Plans from "../Plans/Plans";
import {clearAddRecipeForm} from "../../store/actions/addRecipe";

const Dashboard = (props) => {
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
                    <li><NavLink to="/dashboard/plans">Plans</NavLink></li>
                    <li><NavLink to="/dashboard/shopping-list">Shopping list</NavLink></li>
                </ul>
            </aside>
            <div className="dashboard__container">
                <Route exact path="/dashboard"
                       render={() => <Widgets addRecipe={handleAddRecipe} addSchedule={handleAddSchedule}/>}/>
                <Route exact path="/dashboard" component={Plan}/>
                <Route path="/dashboard/recipes" component={Recipes}/>
                <Route path="/dashboard/plans" component={Plans}/>
                <Route path="/dashboard/add-recipe" component={AddRecipe}/>
                <Route path="/dashboard/add-schedule" component={AddSchedule}/>
            </div>
        </section>
    );
};

export default connect(null, {clearAddRecipeForm})(Dashboard);