import React from 'react';
import './Widgets.scss';
import useWindowWidth from "../../../functions/customHooks/useWindowWidth";

const Widgets = (props) => {
    const width = useWindowWidth();

    return (
        <>
            <div className="dashboard__buttons">
                <div className="dashboard__buttons-item" onClick={props.handleAddRecipe}>
                    <i className="far fa-calendar-plus"/>
                    <span>przepis</span>
                </div>
                <div className="dashboard__buttons-item" onClick={props.handleAddSchedule}>
                    <i className="far fa-calendar-plus"/>
                    <span>plan</span>
                </div>
                <div className="dashboard__buttons-item"  style={{cursor: 'not-allowed'}}>
                    <i className={width > 600 ? "far fa-calendar-plus tooltip" : "far fa-calendar-plus"}>
                        {width < 601 ? null : <span className="tooltip-text">Feature in progress...</span>}
                    </i>
                    <span>zakupy</span>
                </div>
            </div>
            <div className="dashboard__info">
                <i className="fas fa-info-circle"/>
                <span>Ilość przepisów: {props.recipesCount}</span>
            </div>
        </>
    );
};

export default Widgets;