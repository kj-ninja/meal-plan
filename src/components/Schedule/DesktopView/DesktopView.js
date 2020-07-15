import React from 'react';
import './DesktopView.scss';

const DesktopView = (props) => {
    return (
        <section className="plan">
            <div className="plan__header">
                Twój plan na <span id="week-number">{props.schedule.weekNumber ? props.schedule.weekNumber : null}</span> tydzień
            </div>

            <div className="row plan__days">
                <div className="col-1 day">Poniedziałek</div>
                <div className="col-1 day">Wtorek</div>
                <div className="col-1 day">Środa</div>
                <div className="col-1 day">Czwartek</div>
                <div className="col-1 day">Piątek</div>
                <div className="col-1 day">Sobota</div>
                <div className="col-1 day">Niedziela</div>
            </div>
            {props.schedule.monday.map((scheduleDay, i)=> (
                <div className="row" key={i}>
                    <div className="col-1">{scheduleDay.label}</div>
                </div>
            ))}
        </section>
    );
};

export default DesktopView;