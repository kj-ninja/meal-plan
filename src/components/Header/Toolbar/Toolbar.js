import React from 'react';
import {Link} from "react-router-dom";
import './Toolbar.scss';
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => {
    return (
        <header>
            <div className="header__container">
                <Link to="/">
                    <h1><span>Meal</span> Plan</h1>
                </Link>
                <NavigationItems/>
            </div>
        </header>
    );
};

export default Toolbar;