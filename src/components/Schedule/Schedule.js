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
            width < 900 ? <MobileView scheduleToShow={props.scheduleToShow}/> : <DesktopView scheduleToShow={props.scheduleToShow}/>
        );
    }

    return (
        <>
            {schedule}
        </>
    );
};

export default Schedule;