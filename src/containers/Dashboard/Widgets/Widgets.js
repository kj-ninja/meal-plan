import React from 'react';
import './Widgets.scss';

const Widgets = (props) => {
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
                <div className="dashboard__buttons-item">
                    <i className="far fa-calendar-plus"/>
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