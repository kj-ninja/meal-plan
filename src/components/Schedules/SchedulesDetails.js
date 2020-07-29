import React from 'react';
import '../Schedule/DesktopView/DesktopView.scss';
import '../Schedule/MobileView/MobileView.scss';
import './SchedulesDetails.scss';

const mobileStyles = {
    position: 'fixed',
    zIndex: '9999',
    maxWidth: '600px',
    top: '20%',
    left: '50%',
    transition: 'all 0.3s ease-out',
    height: '380px',
    overflow: 'scroll',
    margin: '0 auto',
    transform: 'translateX(-50%)',
    boxSizing: 'border-box'
};

const desktopStyles = {
    position: 'fixed',
    zIndex: '9999',
    width: '880px',
    top: '20%',
    left: '50%',
    transition: 'all 0.3s ease-out',
    margin: '0 auto',
    transform: 'translateX(-50%)',
    boxSizing: 'border-box'
};

const SchedulesDetails = ({scheduleToShow, view}) => {

    if (view === 'mobile') {
        return (
            <section className="plan--mobile" style={mobileStyles}>
                <div className="plan__header--mobile">
                    Twój plan na <span>{scheduleToShow.weekNumber}</span> tydzień roku
                </div>
                <div className="plan__row--mobile plan__days--mobile">
                    <div className="plan__col-8--mobile">Poniedziałek</div>
                    <div className="plan__col-8--mobile">Wtorek</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[0].meals[0]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[1].meals[0]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[0].meals[1]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[1].meals[1]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[0].meals[2]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[1].meals[2]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[0].meals[3]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[1].meals[3]}</div>
                </div>

                <div className="plan__row--mobile plan__days--mobile">
                    <div className="plan__col-8--mobile">Sroda</div>
                    <div className="plan__col-8--mobile">Czwartek</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[2].meals[0]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[3].meals[0]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[2].meals[1]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[3].meals[1]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[2].meals[2]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[3].meals[2]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[2].meals[3]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[3].meals[3]}</div>
                </div>

                <div className="plan__row--mobile plan__days--mobile">
                    <div className="plan__col-8--mobile">Piatek</div>
                    <div className="plan__col-8--mobile">Sobota</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[4].meals[0]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[5].meals[0]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[4].meals[1]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[5].meals[1]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[4].meals[2]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[5].meals[2]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[4].meals[3]}</div>
                    <div className="plan__col-8--mobile">{scheduleToShow.days[5].meals[3]}</div>
                </div>

                <div className="plan__row--mobile plan__days--mobile">
                    <div className="plan__col-4--mobile">Niedziela</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[6].meals[0]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[6].meals[1]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[6].meals[2]}</div>
                </div>
                <div className="plan__row--mobile">
                    <div className="plan__col-8--mobile">{scheduleToShow.days[6].meals[3]}</div>
                </div>
            </section>
        );
    }

    return (
        <section className="plan" style={desktopStyles}>
            <div className="plan__header">
                Twój plan na <span>{scheduleToShow.weekNumber ? scheduleToShow.weekNumber : null}</span> tydzień roku
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
                <div className="col-1 details">{scheduleToShow.days[0].meals[0]}</div>
                <div className="col-1 details">{scheduleToShow.days[1].meals[0]}</div>
                <div className="col-1 details">{scheduleToShow.days[2].meals[0]}</div>
                <div className="col-1 details">{scheduleToShow.days[3].meals[0]}</div>
                <div className="col-1 details">{scheduleToShow.days[4].meals[0]}</div>
                <div className="col-1 details">{scheduleToShow.days[5].meals[0]}</div>
                <div className="col-1 details">{scheduleToShow.days[6].meals[0]}</div>
            </div>
            <div className="row">
                <div className="col-1 details">{scheduleToShow.days[0].meals[1]}</div>
                <div className="col-1 details">{scheduleToShow.days[1].meals[1]}</div>
                <div className="col-1 details">{scheduleToShow.days[2].meals[1]}</div>
                <div className="col-1 details">{scheduleToShow.days[3].meals[1]}</div>
                <div className="col-1 details">{scheduleToShow.days[4].meals[1]}</div>
                <div className="col-1 details">{scheduleToShow.days[5].meals[1]}</div>
                <div className="col-1 details">{scheduleToShow.days[6].meals[1]}</div>
            </div>
            <div className="row">
                <div className="col-1 details">{scheduleToShow.days[0].meals[2]}</div>
                <div className="col-1 details">{scheduleToShow.days[1].meals[2]}</div>
                <div className="col-1 details">{scheduleToShow.days[2].meals[2]}</div>
                <div className="col-1 details">{scheduleToShow.days[3].meals[2]}</div>
                <div className="col-1 details">{scheduleToShow.days[4].meals[2]}</div>
                <div className="col-1 details">{scheduleToShow.days[5].meals[2]}</div>
                <div className="col-1 details">{scheduleToShow.days[6].meals[2]}</div>
            </div>
            <div className="row">
                <div className="col-1 details">{scheduleToShow.days[0].meals[3]}</div>
                <div className="col-1 details">{scheduleToShow.days[1].meals[3]}</div>
                <div className="col-1 details">{scheduleToShow.days[2].meals[3]}</div>
                <div className="col-1 details">{scheduleToShow.days[3].meals[3]}</div>
                <div className="col-1 details">{scheduleToShow.days[4].meals[3]}</div>
                <div className="col-1 details">{scheduleToShow.days[5].meals[3]}</div>
                <div className="col-1 details">{scheduleToShow.days[6].meals[3]}</div>
            </div>
        </section>
    );
};

export default SchedulesDetails;