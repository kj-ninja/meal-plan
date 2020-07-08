import React from 'react';
import {NavLink} from "react-router-dom";
import './NavigationItems.scss';

const NavigationItems = () => {
    return (
        <ul className="navigation-items">
            <li className="navigation-item">
                <NavLink exact to="/">Dlaczego warto?</NavLink>
            </li>
           <li className="navigation-item">
                <NavLink to="/login">Zaplanuj posiłki!</NavLink>
           </li>
        </ul>
    );
};

export default NavigationItems;