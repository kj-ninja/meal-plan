import React from 'react';
import './Schedule.scss';
import useWindowWidth from '../../functions/customHooks/useWindowWidth';
import MobileView from "./MobileView/MobileView";
import DesktopView from "./DesktopView/DesktopView";

const Schedule = () => {
    const width = useWindowWidth();

    return (
        <>
            {width < 900 ? <MobileView/> : <DesktopView/>}
            {/*<a className="previousPlan"><i className="fas fa-angle-double-left"/><span*/}
            {/*    id="previousPlanSpan">poprzedni</span></a>*/}
            {/*<a href="#" id="actualPlan">aktualny</a>*/}
            {/*<a className="nextPlan"><span id="nextPlanSpan">następny</span><i className="fas fa-angle-double-right"/></a>*/}
        </>
    );
};

export default Schedule;