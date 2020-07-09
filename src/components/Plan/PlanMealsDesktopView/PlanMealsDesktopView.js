import React from 'react';
import './PlanMealsDesktopView.scss';

const PlanMealsDesktopView = () => {
    return (
        <>
            <div className="row plan__days">
                <div className="col-1 day">Poniedziałek</div>
                <div className="col-1 day">Wtorek</div>
                <div className="col-1 day">Sroda</div>
                <div className="col-1 day">Czwartek</div>
                <div className="col-1 day">Piatek</div>
                <div className="col-1 day">Sobote</div>
                <div className="col-1 day">Niedziela</div>
            </div>
            <div className="row plan__meals">
                <div className="col-1">jajecznica na boczku</div>
                <div className="col-1">jaja gotowane z kanapkami</div>
                <div className="col-1">owsianka z bakaliami i suszonymi owocami</div>
                <div className="col-1">omlet z platkami owsianymi i bakaliami</div>
                <div className="col-1">jajecznica ze szczypiorkiem i pomidorami</div>
                <div className="col-1">kasza jaglana z zurawina i orzechami</div>
                <div className="col-1">nalesniki z owocami</div>
            </div>
            <div className="row plan__meals">
                <div className="col-1">szejk z owocami i mlekiem</div>
                <div className="col-1">owoce</div>
                <div className="col-1">owoce</div>
                <div className="col-1">zupa jarzynowa</div>
                <div className="col-1">placki ziemniaczane</div>
                <div className="col-1">nalesniki z serem</div>
                <div className="col-1">brak</div>
            </div>
            <div className="row plan__meals">
                <div className="col-1">schabowy z ziemniakami i mizerią</div>
                <div className="col-1">kebab na ostro</div>
                <div className="col-1">makaron z pesto i kurczakiem</div>
                <div className="col-1">pierogi z miesem i podwojna okrasa</div>
                <div className="col-1">makaron bolognese</div>
                <div className="col-1">kurczak z frytkami i surowka</div>
                <div className="col-1">miasto</div>
            </div>
            <div className="row plan__meals">
                <div className="col-1">tosty</div>
                <div className="col-1">ser biały z rodzkiewka i szczypiorkiem</div>
                <div className="col-1">miasto</div>
                <div className="col-1">miasto</div>
                <div className="col-1">miasto</div>
                <div className="col-1">wedozny losos z pieczywem</div>
                <div className="col-1">miasto</div>
            </div>
        </>
    );
};

export default PlanMealsDesktopView;