import React from 'react';
import './Plan.scss';
import PlanMealsMobileView from "./PlanMealsMobileView/PlanMealsMobileView";
import PlanMealsDesktopView from "./PlanMealsDesktopView/PlanMealsDesktopView";

const Plan = () => {
    return (
        <section className="plan">
            <div className="plan__container">
                <div className="row">
                    <div className="col-7 plan__header">Twój plan na <span id="week-number">1</span> tydzień</div>
                </div>

                {/*<PlanMealsMobileView/>*/}
                <PlanMealsDesktopView/>

            </div>
            {/*<a className="previousPlan"><i className="fas fa-angle-double-left"/><span*/}
            {/*    id="previousPlanSpan">poprzedni</span></a>*/}
            {/*<a href="#" id="actualPlan">aktualny</a>*/}
            {/*<a className="nextPlan"><span id="nextPlanSpan">następny</span><i className="fas fa-angle-double-right"/></a>*/}
        </section>
    );
};

export default Plan;