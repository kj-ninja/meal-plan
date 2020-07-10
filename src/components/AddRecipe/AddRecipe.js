import React from 'react';
import {useForm} from "react-hook-form";
import './AddRecipe.scss';

const AddRecipe = () => {
    const {register, handleSubmit, errors} = useForm();

    const handleAddRecipe = (data) => {
        console.log(data);
    };

    return (
        <div className="add-recipe">
            <div className="add-recipe__header">
                <h3>Nowy przepis</h3>
                <button>Zapisz i zamknij</button>
            </div>
            <form onSubmit={handleSubmit(handleAddRecipe)} className="add-recipe__form">
                <div className="add-recipe__input-container">
                    <label htmlFor="recipeName">Nazwa przepisu</label>
                    <input name="recipeName"
                           ref={register({required: true})}
                           id="recipeName"
                    />
                    {errors.recipeName ? <p className="error-message">{errors.recipeName.message}</p> : null}
                </div>

                <div className="add-recipe__input-container">
                    <label htmlFor="recipeDescription">Opis przepisu</label>
                    <textarea name="recipeDescription"
                              ref={register}
                              id="recipeDescription"
                              rows={3}
                    />
                    {errors.recipeDescription ?
                        <p className="error-message">{errors.recipeDescription.message}</p> : null}
                </div>


                <div className="add-recipe__lists-container">
                    <div className="add-recipe__input-container">
                        <label htmlFor="recipeInstructions">Instrukcje <i className="fas fa-plus-square"/></label>
                        <textarea name="recipeInstructions"
                                  ref={register({required: true})}
                                  id="recipeInstructions"
                                  rows={3}
                        />
                        {errors.recipeInstructions ?
                            <p className="error-message">{errors.recipeInstructions.message}</p> : null}
                        <ol>
                            <li>Obierz pyry <i className="fas fa-edit edit"/> <i className="fas fa-trash-alt trash"/></li>
                            <li>Umyj warzywa</li>
                            <li>Wrzuc do gara</li>
                            <li>Smaz 30 min</li>
                            <li>Opedzluj ze smakiem</li>
                        </ol>
                    </div>

                    <div className="add-recipe__input-container">
                        <label htmlFor="recipeIngredients">Składniki <i className="fas fa-plus-square"/></label>
                        <input name="recipeIngredients"
                               ref={register({required: true})}
                               id="recipeIngredients"
                        />
                        {errors.recipeIngredients ?
                            <p className="error-message">{errors.recipeIngredients.message}</p> : null}
                        <ul>
                            <li>100g maki <i className="fas fa-edit edit"/> <i className="fas fa-trash-alt trash"/></li>
                            <li>100g cukru</li>
                            <li>2kg ziemniakow</li>
                            <li>2kg ziemniakow</li>
                            <li>2 szt. cebuli</li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddRecipe;