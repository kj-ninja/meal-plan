import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import './NavigationItems.scss';
import useWindowWidth from "../../../functions/customHooks/useWindowWidth";

const NavigationItems = (props) => {
    const width = useWindowWidth();
    let panelItems = null;

    if (props.isAuth && width < 1200) {
        panelItems = (
            <>
                <li className="navigation-item"><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li className="navigation-item"><NavLink to="/recipes">Recipes</NavLink></li>
                <li className="navigation-item"><NavLink to="/plans">Plans</NavLink></li>
                <li className="navigation-item"><NavLink to="/shopping-list">Shopping list</NavLink></li>
            </>
        );
    }

    return (
        <ul className="navigation-items">
            {panelItems}
            <li className="navigation-item">
                {props.isAuth ? <NavLink to="/logout">Logout</NavLink> :
                    <NavLink to="/login">Zaplanuj posiłki!</NavLink>}
            </li>
        </ul>
    );
};

const mapPropsToState = state => {
    return {
        isAuth: state.auth.token !== null
    }
};

export default connect(mapPropsToState)(NavigationItems);