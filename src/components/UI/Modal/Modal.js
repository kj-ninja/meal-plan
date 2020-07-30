import React from 'react';
import './Modal.scss';

const Modal = ({modal, recipe, view}) => {

    if (recipe === null && view === 'mobile') {
        return (
            <div className="modal--mobile" style={{
                transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: modal ? '1' : '0',
                width: '300px',
                height: '80px',
                textAlign: 'center',
                left: 'calc(50% - 150px)'
            }}>
                <h2>Brak przepisu na dany posiłek, dodaj przepis w opcji edytowania planu.</h2>
            </div>
        );
    }

    if (recipe === null && view === 'desktop') {
        return (
            <div className="modal" style={{
                transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: modal ? '1' : '0',
                textAlign: 'center',
                left: 'calc(50% - 400px)'
            }}>
                <h2>Brak przepisu na dany posiłek, dodaj przepis w opcji edytowania planu.</h2>
            </div>
        );
    }

    if (recipe && view === 'mobile') {
        return (
            <div className="modal--mobile" style={{
                transform: modal ? 'translate(-50%, 0)' : 'translate(-50%, -100vh)',
                opacity: modal ? '1' : '0'
            }}>
                <h2 className="modal__title--mobile">{recipe.name}</h2>
                <p className="modal__description--mobile"><span>Opis:</span>{recipe.description}</p>
                <div className="modal__lists-container--mobile">
                    <ol className="modal__instructions-list--mobile">
                        <p className="modal__lists-title--mobile">Instrukcje:</p>
                        {recipe.instructions.map(instruction => (
                            <li key={instruction}>{instruction}</li>
                        ))}
                    </ol>
                    <ul className="modal__ingredients-list--mobile">
                        <p className="modal__lists-title--mobile">Składniki:</p>
                        {recipe.ingredients.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className="modal" style={{
            transform: modal ? 'translate(-50%, 0)' : 'translate(-50%,-100vh)',
            opacity: modal ? '1' : '0',
        }}>
            <h2 className="modal__title">{recipe.name}</h2>
            <p className="modal__description"><span>Opis:</span>{recipe.description}</p>
            <div className="modal__lists-container">
                <ol className="modal__instructions-list">
                    <p className="modal__lists-title">Instrukcje:</p>
                    {recipe.instructions.map(instruction => (
                        <li key={instruction}>{instruction}</li>
                    ))}
                </ol>
                <ul className="modal__ingredients-list">
                    <p className="modal__lists-title">Składniki:</p>
                    {recipe.ingredients.map(ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;