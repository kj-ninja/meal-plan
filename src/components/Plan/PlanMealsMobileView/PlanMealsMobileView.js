import React from 'react';
import './PlanMealsMobileView.scss';

const PlanMealsMobileView = () => {
    return (
        <>
            <div className="row--mobile plan__days--mobile">
                <div className="col-8--mobile day">Poniedziałek</div>
                <div className="col-8--mobile day">Wtorek</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">jajecznica na boczku</div>
                <div className="col-8--mobile">jaja gotowane z kanapkami</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">szejk z owocami i mlekiem</div>
                <div className="col-8--mobile">owoce</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">schabowy z ziemniakami i mizerią</div>
                <div className="col-8--mobile">kebab na ostro</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">tosty</div>
                <div className="col-8--mobile">ser biały z rodzkiewka i szczypiorkiem</div>
            </div>

            <div className="row--mobile plan__days--mobile">
                <div className="col-8--mobile day">Sroda</div>
                <div className="col-8--mobile day">Czwartek</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">owsianka z bakaliami i suszonymi owocami</div>
                <div className="col-8--mobile">omlet z platkami owsianymi i bakaliami</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">owoce</div>
                <div className="col-8--mobile">zupa jarzynowa</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">makaron z pesto i kurczakiem</div>
                <div className="col-8--mobile">pierogi z miesem i podwojna okrasa</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">miasto</div>
                <div className="col-8--mobile">miasto</div>
            </div>

            <div className="row--mobile plan__days--mobile">
                <div className="col-8--mobile day">Piatek</div>
                <div className="col-8--mobile day">Sobota</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">jajecznica ze szczypiorkiem i pomidorami</div>
                <div className="col-8--mobile">kasza jaglana z zurawina i orzechami</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">placki ziemniaczane</div>
                <div className="col-8--mobile">nalesniki z serem</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">makaron bolognese</div>
                <div className="col-8--mobile">kurczak z frytkami i surowka</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-8--mobile">miasto</div>
                <div className="col-8--mobile">wedozny losos z pieczywem</div>
            </div>

            <div className="row--mobile plan__days--mobile">
                <div className="col-4--mobile day">Niedziela</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-4--mobile">nalesniki z owocami</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-4--mobile">brak</div>
            </div>
            <div className="row--mobile plan__meals">
                <div className="col-4--mobile">miasto</div>
            </div>
            <div className="row--mobile plan__meals last-row--mobile">
                <div className="col-4--mobile">miasto</div>
            </div>
        </>
    );
};

export default PlanMealsMobileView;