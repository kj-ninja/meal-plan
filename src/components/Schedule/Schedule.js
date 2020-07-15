import React from 'react';
import './Schedule.scss';
import useWindowWidth from '../../functions/customHooks/useWindowWidth';
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";
import Spinner from "../UI/Spinner/Spinner";

const Schedule = (props) => {
    const width = useWindowWidth();

    let schedule = (
        <Spinner/>
    );

    if (props.scheduleToShow === false) {
        schedule = (
            <p className="schedule__warning-msg">Brak planów żywieniowych na najbliższy czas, zacznij od przepisów a
                następnie dodaj plan!</p>
        );
    } else if (props.scheduleToShow !== null) {
        schedule = (
            width < 900 ? <MobileView schedule={props.schedule}/> : <DesktopView schedule={props.schedule}/>
        );
    }

    return (
        <>
            {schedule}
            {/*<a className="previousPlan"><i className="fas fa-angle-double-left"/><span*/}
            {/*    id="previousPlanSpan">poprzedni</span></a>*/}
            {/*<a href="#" id="actualPlan">aktualny</a>*/}
            {/*<a className="nextPlan"><span id="nextPlanSpan">następny</span><i className="fas fa-angle-double-right"/></a>*/}
        </>
    );
};

export default Schedule;