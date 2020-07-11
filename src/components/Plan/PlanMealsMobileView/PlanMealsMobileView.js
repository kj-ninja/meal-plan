import React from 'react';
import './PlanMealsMobileView.scss';

const PlanMealsMobileView = () => {
    return (
        <section className="plan--mobile">
            <div className="plan__header--mobile">
                Twój plan na <span id="week-number">1</span> tydzień
            </div>
            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Poniedziałek</div>
                <div className="plan__col-8--mobile">Wtorek</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">jajecznica na boczku</div>
                <div className="plan__col-8--mobile">jaja gotowane z kanapkami</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">szejk z owocami i mlekiem</div>
                <div className="plan__col-8--mobile">owoce</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">schabowy z ziemniakami i mizerią</div>
                <div className="plan__col-8--mobile">kebab na ostro</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">tosty</div>
                <div className="plan__col-8--mobile">ser biały z rodzkiewka i szczypiorkiem</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Sroda</div>
                <div className="plan__col-8--mobile">Czwartek</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">owsianka z bakaliami i suszonymi owocami</div>
                <div className="plan__col-8--mobile">omlet z platkami owsianymi i bakaliami</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">owoce</div>
                <div className="plan__col-8--mobile">zupa jarzynowa</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">makaron z pesto i kurczakiem</div>
                <div className="plan__col-8--mobile">pierogi z miesem i podwojna okrasa</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">miasto</div>
                <div className="plan__col-8--mobile">miasto</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Piatek</div>
                <div className="plan__col-8--mobile">Sobota</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">jajecznica ze szczypiorkiem i pomidorami</div>
                <div className="plan__col-8--mobile">kasza jaglana z zurawina i orzechami</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">placki ziemniaczane</div>
                <div className="plan__col-8--mobile">nalesniki z serem</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">makaron bolognese</div>
                <div className="plan__col-8--mobile">kurczak z frytkami i surowka</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">miasto</div>
                <div className="plan__col-8--mobile">wedozny losos z pieczywem</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-4--mobile">Niedziela</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">nalesniki z owocami</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">brak</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">miasto</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">miasto</div>
            </div>
        </section>
    );
};

export default PlanMealsMobileView;