import React, {useState} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import './DesktopView.scss';

const DesktopView = ({scheduleToShow, nextSchedule, findRecipe, previousSchedule}) => {
    const [modal, setModal] = useState(false);
    const [recipeToShow, setRecipeToShow] = useState(null);
    console.log('Schedule rendered');

    let modalPopUp = null;
    if (recipeToShow === undefined) {
        modalPopUp = (
            <div className="modal" style={{
                transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: modal ? '1' : '0'
            }}>
                <h2>Brak przepisu na dany posiłek, dodaj przepis w opcji edytowania planu.</h2>
            </div>
        );
    }
    if (recipeToShow) {
        modalPopUp = (
            <div className="modal" style={{
                transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: modal ? '1' : '0'
            }}>
                <h2 className="modal__title">{recipeToShow.name}</h2>
                <p className="modal__description"><span>Opis:</span>{recipeToShow.description}</p>
                <div className="modal__lists-container">
                        <ol className="modal__instructions-list">
                            <p className="modal__lists-title">Instrukcje:</p>
                            {recipeToShow.instructions.map(instruction => (
                                <li key={instruction}>{instruction}</li>
                            ))}
                        </ol>
                        <ul className="modal__ingredients-list">
                            <p className="modal__lists-title">Składniki:</p>
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
        <section className="plan">
            <Backdrop show={modal} cancel={() => setModal(false)}/>
            {modalPopUp}
            <div className="plan__header">
                Twój plan na <span>{scheduleToShow.weekNumber ? scheduleToShow.weekNumber : null}</span> tydzień
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
                <div className="col-1 day" onClick={()=>handleShowRecipe(scheduleToShow.days[0].meals[0])}>{scheduleToShow.days[0].meals[0]}</div>
                <div className="col-1 day">{scheduleToShow.days[1].meals[0]}</div>
                <div className="col-1 day">{scheduleToShow.days[2].meals[0]}</div>
                <div className="col-1 day">{scheduleToShow.days[3].meals[0]}</div>
                <div className="col-1 day">{scheduleToShow.days[4].meals[0]}</div>
                <div className="col-1 day">{scheduleToShow.days[5].meals[0]}</div>
                <div className="col-1 day">{scheduleToShow.days[6].meals[0]}</div>
            </div>
            <div className="row">
                <div className="col-1 day" onClick={()=>handleShowRecipe(scheduleToShow.days[0].meals[1])}>{scheduleToShow.days[0].meals[1]}</div>
                <div className="col-1 day">{scheduleToShow.days[1].meals[1]}</div>
                <div className="col-1 day">{scheduleToShow.days[2].meals[1]}</div>
                <div className="col-1 day">{scheduleToShow.days[3].meals[1]}</div>
                <div className="col-1 day">{scheduleToShow.days[4].meals[1]}</div>
                <div className="col-1 day">{scheduleToShow.days[5].meals[1]}</div>
                <div className="col-1 day">{scheduleToShow.days[6].meals[1]}</div>
            </div>
            <div className="row">
                <div className="col-1 day" onClick={()=>handleShowRecipe(scheduleToShow.days[0].meals[2])}>{scheduleToShow.days[0].meals[2]}</div>
                <div className="col-1 day">{scheduleToShow.days[1].meals[2]}</div>
                <div className="col-1 day">{scheduleToShow.days[2].meals[2]}</div>
                <div className="col-1 day">{scheduleToShow.days[3].meals[2]}</div>
                <div className="col-1 day">{scheduleToShow.days[4].meals[2]}</div>
                <div className="col-1 day">{scheduleToShow.days[5].meals[2]}</div>
                <div className="col-1 day">{scheduleToShow.days[6].meals[2]}</div>
            </div>
            <div className="row">
                <div className="col-1 day" onClick={()=>handleShowRecipe(scheduleToShow.days[0].meals[3])}>{scheduleToShow.days[0].meals[3]}</div>
                <div className="col-1 day">{scheduleToShow.days[1].meals[3]}</div>
                <div className="col-1 day">{scheduleToShow.days[2].meals[3]}</div>
                <div className="col-1 day">{scheduleToShow.days[3].meals[3]}</div>
                <div className="col-1 day">{scheduleToShow.days[4].meals[3]}</div>
                <div className="col-1 day">{scheduleToShow.days[5].meals[3]}</div>
                <div className="col-1 day">{scheduleToShow.days[6].meals[3]}</div>
            </div>
            <div className="plan__actions">
                <div className="plan__action-previous" onClick={previousSchedule}>
                    <i className="fas fa-arrow-left"/>
                    <span>poprzedni</span>
                </div>
                <div className="plan__action-next" onClick={nextSchedule}>
                    <span>następny</span>
                    <i className="fas fa-arrow-right"/>
                </div>
            </div>
        </section>
    );
};

export default DesktopView;