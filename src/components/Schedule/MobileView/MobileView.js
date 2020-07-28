import React, {useState} from 'react';
import './MobileView.scss';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Modal from "../../UI/Modal/Modal";

const MobileView = ({scheduleToShow, nextSchedule, findRecipe, previousSchedule}) => {
    const [modal, setModal] = useState(false);
    const [recipeToShow, setRecipeToShow] = useState(null);

    let modalPopUp = <Modal modal={modal} recipe={null} view="mobile"/>;
    if (recipeToShow) {
        modalPopUp = <Modal modal={modal} recipe={recipeToShow} view="mobile"/>;
    }

    const handleShowRecipe = (recipeName) => {
        setRecipeToShow(findRecipe(recipeName));
        setModal(true);
    };

    return (
        <section className="plan--mobile">
            <Backdrop show={modal} cancel={() => setModal(false)}/>
            {modalPopUp}
            <div className="plan__header--mobile">
                Twój plan na <span>{scheduleToShow.weekNumber}</span> tydzień
            </div>
            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Poniedziałek</div>
                <div className="plan__col-8--mobile">Wtorek</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[0].meals[0])}>{scheduleToShow.days[0].meals[0]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[1].meals[0])}>{scheduleToShow.days[1].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[0].meals[1])}>{scheduleToShow.days[0].meals[1]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[1].meals[1])}>{scheduleToShow.days[1].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[0].meals[2])}>{scheduleToShow.days[0].meals[2]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[1].meals[2])}>{scheduleToShow.days[1].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[0].meals[3])}>{scheduleToShow.days[0].meals[3]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[1].meals[3])}>{scheduleToShow.days[1].meals[3]}</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Środa</div>
                <div className="plan__col-8--mobile">Czwartek</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[2].meals[0])}>{scheduleToShow.days[2].meals[0]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[3].meals[0])}>{scheduleToShow.days[3].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[2].meals[1])}>{scheduleToShow.days[2].meals[1]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[3].meals[1])}>{scheduleToShow.days[3].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[2].meals[2])}>{scheduleToShow.days[2].meals[2]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[3].meals[2])}>{scheduleToShow.days[3].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[2].meals[3])}>{scheduleToShow.days[2].meals[3]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[3].meals[3])}>{scheduleToShow.days[3].meals[3]}</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-8--mobile">Piątek</div>
                <div className="plan__col-8--mobile">Sobota</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[4].meals[0])}>{scheduleToShow.days[4].meals[0]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[5].meals[0])}>{scheduleToShow.days[5].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[4].meals[1])}>{scheduleToShow.days[4].meals[1]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[5].meals[1])}>{scheduleToShow.days[5].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[4].meals[2])}>{scheduleToShow.days[4].meals[2]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[5].meals[2])}>{scheduleToShow.days[5].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[4].meals[3])}>{scheduleToShow.days[4].meals[3]}</div>
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[5].meals[3])}>{scheduleToShow.days[5].meals[3]}</div>
            </div>

            <div className="plan__row--mobile plan__days--mobile">
                <div className="plan__col-4--mobile">Niedziela</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[6].meals[0])}>{scheduleToShow.days[6].meals[0]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[6].meals[1])}>{scheduleToShow.days[6].meals[1]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[6].meals[2])}>{scheduleToShow.days[6].meals[2]}</div>
            </div>
            <div className="plan__row--mobile">
                <div className="plan__col-8--mobile"
                     onClick={() => handleShowRecipe(scheduleToShow.days[6].meals[3])}>{scheduleToShow.days[6].meals[3]}</div>
            </div>
            <div className="plan__actions--mobile">
                <div className="plan__action-previous--mobile" onClick={previousSchedule}>
                    <i className="fas fa-arrow-left"/>
                    <span>poprzedni</span>
                </div>
                <div className="plan__action-next--mobile" onClick={nextSchedule}>
                    <span>następny</span>
                    <i className="fas fa-arrow-right"/>
                </div>
            </div>
        </section>
    );
};

export default MobileView;