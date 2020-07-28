import React from 'react';
import './Modal.scss';

const Modal = ({modal, recipe}) => {

    if (recipe === null) {
        return (
            <div className="modal" style={{
                transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: modal ? '1' : '0'
            }}>
                <h2>Brak przepisu na dany posiłek, dodaj przepis w opcji edytowania planu.</h2>
            </div>
        );
    }

    return (
        <div className="modal" style={{
            transform: modal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: modal ? '1' : '0'
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