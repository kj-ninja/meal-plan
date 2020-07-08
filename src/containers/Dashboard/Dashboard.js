import React from 'react';
import {NavLink} from 'react-router-dom';
import './Dashboard.scss';

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
                <div className="dashboard__buttons">
                    <i className="far fa-calendar-plus">przepis</i>
                    <i className="far fa-calendar-plus">plan</i>
                    <i className="far fa-calendar-plus">zakupy</i>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;