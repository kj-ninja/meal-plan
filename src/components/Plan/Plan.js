import React from 'react';
import './Plan.scss';
import useWindowWidth from '../../functions/customHooks/useWindowWidth';
import PlanMealsMobileView from "./PlanMealsMobileView/PlanMealsMobileView";
import PlanMealsDesktopView from "./PlanMealsDesktopView/PlanMealsDesktopView";

const Plan = () => {
    const width = useWindowWidth();

    return (
        <>
            {width < 900 ? <PlanMealsMobileView/> : <PlanMealsDesktopView/>}
            {/*<a className="previousPlan"><i className="fas fa-angle-double-left"/><span*/}
            {/*    id="previousPlanSpan">poprzedni</span></a>*/}
            {/*<a href="#" id="actualPlan">aktualny</a>*/}
            {/*<a className="nextPlan"><span id="nextPlanSpan">następny</span><i className="fas fa-angle-double-right"/></a>*/}
        </>
    );
};

export default Plan;