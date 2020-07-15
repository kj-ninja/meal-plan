import React from 'react';
import './DesktopView.scss';

const DesktopView = (props) => {
    return (
        <section className="plan">
            <div className="plan__header">
                Twój plan na <span id="week-number">{props.schedule.weekNumber}</span> tydzień
            </div>
            <div className="row plan__days">
                <div className="col-1 day">Poniedziałek</div>

            </div>
            <div className="row">
                <div className="col-1">{props.schedule.monday[0].label}</div>

            </div>
            <div className="row">
                <div className="col-1">{props.schedule.monday[1].label}</div>

            </div>
            <div className="row">
                <div className="col-1">{props.schedule.monday[2].label}</div>

            </div>
            <div className="row">
                <div className="col-1">{props.schedule.monday[3].label}</div>
            </div>
        </section>
    );
};

export default DesktopView;