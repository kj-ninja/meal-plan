import React from 'react';
import './MobileView.scss';

const MobileView = (props) => {
    return (
        <section className="plan--mobile">
            <div className="plan__header--mobile">
                Twój plan na <span>{props.scheduleToShow.weekNumber}</span> tydzień
            </div>
            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Poniedziałek</div>
                <div className="plan__col-8--mobile">Wtorek</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[0].meals[0]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[1].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[0].meals[1]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[1].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[0].meals[2]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[1].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[0].meals[3]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[1].meals[3]}</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Sroda</div>
                <div className="plan__col-8--mobile">Czwartek</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[2].meals[0]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[3].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[2].meals[1]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[3].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[2].meals[2]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[3].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[2].meals[3]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[3].meals[3]}</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Piatek</div>
                <div className="plan__col-8--mobile">Sobota</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[4].meals[0]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[5].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[4].meals[1]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[5].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[4].meals[2]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[5].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[4].meals[3]}</div>
                <div className="plan__col-8--mobile">{props.scheduleToShow.days[5].meals[3]}</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-4--mobile">Niedziela</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">{props.scheduleToShow.days[6].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">{props.scheduleToShow.days[6].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">{props.scheduleToShow.days[6].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-4--mobile">{props.scheduleToShow.days[6].meals[3]}</div>
            </div>
            <div className="plan__actions--mobile">
                <div className="plan__action-previous--mobile">
                    <i className="fas fa-arrow-left"/>
                    <span>poprzedni</span>
                </div>
                <div className="plan__action-next--mobile">
                    <span>następny</span>
                    <i className="fas fa-arrow-right"/>
                </div>
            </div>
        </section>
    );
};

export default MobileView;