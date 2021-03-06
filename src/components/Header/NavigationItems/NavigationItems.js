import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import './NavigationItems.scss';
import useWindowWidth from "../../../functions/customHooks/useWindowWidth";
import {authClearError} from "../../../store/actions/auth";

const NavigationItems = (props) => {
    const width = useWindowWidth();
    let panelItems = null;

    if (props.isAuth && width < 1200) {
        panelItems = (
            <>
                <li className="navigation-item"><NavLink to="/dashboard">Pulpit</NavLink></li>
                <li className="navigation-item"><NavLink to="/dashboard/recipes">Przepisy</NavLink></li>
                <li className="navigation-item"><NavLink to="/dashboard/schedules">Plany</NavLink></li>
                {/*<li className="navigation-item"><NavLink to="/dashboard/shopping-list">Lista zakupów</NavLink></li>*/}
            </>
        );
    }

    return (
        <ul className="navigation-items">
            {panelItems}
            <li className="navigation-item">
                {props.isAuth ? <NavLink to="/logout">Wyloguj</NavLink> :
                    <NavLink to="/login" onClick={props.authClearError}>Zaplanuj posiłki!</NavLink>}
            </li>
        </ul>
    );
};

const mapPropsToState = state => {
    return {
        isAuth: state.auth.token !== null
    }
};

export default connect(mapPropsToState, {authClearError})(NavigationItems);