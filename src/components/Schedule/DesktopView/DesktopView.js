import React from 'react';
import './DesktopView.scss';

const DesktopView = (props) => {
    return (
        <section className="plan">
            <div className="plan__header">
                Twój plan na <span>{props.scheduleToShow.weekNumber ? props.scheduleToShow.weekNumber : null}</span> tydzień
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
            <div className="row">
                <div className="col-1 day">{props.scheduleToShow.days[0].meals[0]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[1].meals[0]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[2].meals[0]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[3].meals[0]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[4].meals[0]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[5].meals[0]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[6].meals[0]}</div>
            </div>
            <div className="row">
                <div className="col-1 day">{props.scheduleToShow.days[0].meals[1]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[1].meals[1]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[2].meals[1]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[3].meals[1]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[4].meals[1]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[5].meals[1]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[6].meals[1]}</div>
            </div>
            <div className="row">
                <div className="col-1 day">{props.scheduleToShow.days[0].meals[2]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[1].meals[2]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[2].meals[2]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[3].meals[2]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[4].meals[2]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[5].meals[2]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[6].meals[2]}</div>
            </div>
            <div className="row">
                <div className="col-1 day">{props.scheduleToShow.days[0].meals[3]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[1].meals[3]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[2].meals[3]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[3].meals[3]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[4].meals[3]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[5].meals[3]}</div>
                <div className="col-1 day">{props.scheduleToShow.days[6].meals[3]}</div>
            </div>
            <div className="plan__actions">
                <div className="plan__action-previous">
                    <i className="fas fa-arrow-left"/>
                    <span>poprzedni</span>
                </div>
                <div className="plan__action-next">
                    <span>następny</span>
                    <i className="fas fa-arrow-right"/>
                </div>
            </div>
        </section>
    );
};

export default DesktopView;