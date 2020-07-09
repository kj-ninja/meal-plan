import React from 'react';
import './Widgets.scss';

const Widgets = () => {
    return (
        <>
            <div className="dashboard__buttons">
                <div className="dashboard__buttons-item">
                    <i className="far fa-calendar-plus"/>
                    <span>przepis</span>
                </div>
                <div className="dashboard__buttons-item">
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
                <span>Masz już 99 przepisów!</span>
            </div>
        </>
    );
};

export default Widgets;