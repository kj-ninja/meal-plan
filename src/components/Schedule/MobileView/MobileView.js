import React, {useState} from 'react';
import './MobileView.scss';
import Backdrop from "../../UI/Backdrop/Backdrop";

const MobileView = ({scheduleToShow, nextSchedule, findRecipe, previousSchedule}) => {
    const [modal, setModal] = useState(false);
    const [recipeToShow, setRecipeToShow] = useState(null);

    let modalPopUp = null;
    if (recipeToShow === undefined) {
        modalPopUp = (
            <div className="modal--mobile" style={{
                transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: modal ? '1' : '0',
                height: '70px',
                textAlign: 'center'
            }}>
                <h2>Brak przepisu na dany posiłek, dodaj przepis w opcji edytowania.</h2>
            </div>
        );
    }
    if (recipeToShow) {
        modalPopUp = (
            <div className="modal--mobile" style={{
                transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: modal ? '1' : '0'
            }}>
                <h2 className="modal__title--mobile">{recipeToShow.name}</h2>
                <p className="modal__description--mobile"><span>Opis:</span>{recipeToShow.description}</p>
                <div className="modal__lists-container--mobile">
                    <ol className="modal__instructions-list--mobile">
                        <p className="modal__lists-title--mobile">Instrukcje:</p>
                        {recipeToShow.instructions.map(instruction => (
                            <li key={instruction}>{instruction}</li>
                        ))}
                    </ol>
                    <ul className="modal__ingredients-list--mobile">
                        <p className="modal__lists-title--mobile">Składniki:</p>
                        {recipeToShow.ingredients.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    const handleShowRecipe = (recipeName) => {
        setRecipeToShow(findRecipe(recipeName));
        setModal(true);
        console.log(findRecipe(recipeName));
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
                <div className="plan__col-8--mobile">Sroda</div>
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
                <div className="plan__col-8--mobile">Piatek</div>
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