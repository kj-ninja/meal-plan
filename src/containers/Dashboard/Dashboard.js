import React from 'react';
import {NavLink} from 'react-router-dom';
import './Dashboard.scss';
import Widgets from "./Widgets/Widgets";

const Dashboard = () => {
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
                <Widgets/>
            </div>
        </section>
    );
};

export default Dashboard;