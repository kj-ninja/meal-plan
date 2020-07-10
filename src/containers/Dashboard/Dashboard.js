import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './Dashboard.scss';
import Widgets from "./Widgets/Widgets";
import Plan from "../../components/Plan/Plan";
import AddRecipe from "../../components/AddRecipe/AddRecipe";
import AddSchedule from "../../components/AddSchedule/AddSchedule";
import Recipes from "../Recipes/Recipes";
import Plans from "../Plans/Plans";

const Dashboard = (props) => {
    const handleAddRecipe = () => {
        props.history.push('dashboard/add-recipe');
    };
    const handleAddSchedule = () => {
        props.history.push('dashboard/add-schedule');
    };

    return (
        <section className="dashboard">
            <aside className="dashboard__panel">
                <ul className="dashboard__list">
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/plans">Plans</NavLink></li>
                    <li><NavLink to="/shopping-list">Shopping list</NavLink></li>
                </ul>
            </aside>
            <div className="dashboard__container">
                <Route exact path="/dashboard"
                       render={() => <Widgets addRecipe={handleAddRecipe} addSchedule={handleAddSchedule}/>}/>
                <Route exact path="/dashboard" component={Plan}/>
                <Route exact path="/recipes" component={Recipes}/>
                <Route exact path="/plans" component={Plans}/>
                <Route path="/dashboard/add-recipe" component={AddRecipe}/>
                <Route path="/dashboard/add-schedule" component={AddSchedule}/>
            </div>
        </section>
    );
};

export default Dashboard;