import React from 'react';
import './DesktopView.scss';

const DesktopView = (props) => {
    return (
        <section className="plan">
            <div className="plan__header">
                Twój plan na <span id="week-number">{props.weekNumber}</span> tydzień
            </div>
            <div className="row plan__days">
                <div className="col-1 day">Poniedziałek</div>

            </div>
            <div className="row">
                <div className="col-1">jajecznica na boczku</div>

            </div>
            <div className="row">
                <div className="col-1">szejk z owocami i mlekiem</div>

            </div>
            <div className="row">
                <div className="col-1">schabowy z ziemniakami i mizerią</div>

            </div>
            <div className="row">
                <div className="col-1">tosty</div>
            </div>
        </section>
    );
};

export default DesktopView;