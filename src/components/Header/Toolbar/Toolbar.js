import React from 'react';
import {Link} from "react-router-dom";
import './Toolbar.scss';
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
    console.log('Toolbar rendered');

    return (
        <header>
            <div className="header__container">
                <Link to="/">
                    <h1><span>Meal</span> Plan</h1>
                </Link>
                <i className="fas fa-bars hamburger" onClick={props.showDrawer}/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </header>
    );
};

export default Toolbar;