import React from 'react';
import {NavLink} from "react-router-dom";
import './NavigationItems.scss';

const NavigationItems = () => {
    return (
        <ul className="navigation-items">
           <li className="navigation-item">
                <NavLink to="/">Zaplanuj posiłki!</NavLink>
           </li>
            <li className="navigation-item">
                <NavLink to="/">Dlaczego warto?</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink to="/">Kontakt</NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;