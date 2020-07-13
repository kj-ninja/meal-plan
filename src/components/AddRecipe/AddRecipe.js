import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    addInstruction,
    addIngredient,
    deleteInstruction,
    deleteIngredient,
    isEdit,
    editInstruction,
    editIngredient
} from "../../store/actions/addRecipe";
import {addRecipe} from '../../store/actions/recipes';
import {useForm} from "react-hook-form";
import './AddRecipe.scss';

const AddRecipe = (props) => {
    const {register, handleSubmit, errors, getValues, setValue} = useForm();
    const [indexToEdit, setIndexToEdit] = useState(null);

    const handleAddInstruction = () => {
        if (props.edit) {
            const instruction = getValues('recipeInstructions');
            props.editInstruction(props.instructions, instruction, indexToEdit);
            setValue('recipeInstructions', '');
            props.isEdit(false);
            setIndexToEdit(null);
        } else {
            const instruction = getValues('recipeInstructions');
            props.addInstruction(instruction);
            setValue('recipeInstructions', '');
        }
    };

    const handleAddIngredients = () => {
        if (props.edit) {
            const ingredient = getValues('recipeIngredients');
            props.editIngredient(props.ingredients, ingredient, indexToEdit);
            setValue('recipeIngredients', '');
            props.isEdit(false);
            setIndexToEdit(null);
        } else {
            const ingredient = getValues('recipeIngredients');
            props.addIngredient(ingredient);
            setValue('recipeIngredients', '');
        }
    };

    const handleAddRecipe = () => {
        const recipe = {
            name: getValues('recipeName'),
            description: getValues('recipeDescription'),
            instructions: props.instructions,
            ingredients: props.ingredients,
            userId: props.userId
        }
        props.addRecipe(props.token, recipe);
    };

    const handleEdit = (index, place) => {
        props.isEdit(true);
        setIndexToEdit(index);
        if (place === 'instructions') {
            setValue('recipeInstructions', props.instructions[index]);
        } else {
            setValue('recipeIngredients', props.ingredients[index]);
        }
    };

    return (
        <div className="add-recipe">
            <form onSubmit={handleSubmit(handleAddRecipe)} className="add-recipe__form">
                <div className="add-recipe__header">
                    <h3>Nowy przepis</h3>
                    <button type="submit">Zapisz i zamknij</button>
                </div>

                <div className="add-recipe__input-container">
                    <label htmlFor="recipeName">Nazwa przepisu</label>
                    <input name="recipeName"
                           ref={register({required: true})}
                           id="recipeName"
                           className={errors.recipeName ? 'input-error' : ''}
                    />
                </div>

                <div className="add-recipe__input-container">
                    <label htmlFor="recipeDescription">Opis przepisu</label>
                    <textarea name="recipeDescription"
                              ref={register({required: true})}
                              id="recipeDescription"
                              rows={3}
                    />
                </div>

                <div className="add-recipe__lists-container">
                    <div className="add-recipe__input-container">
                        <label htmlFor="recipeInstructions">
                            Instrukcje <i className="fas fa-plus-square" onClick={handleAddInstruction}/>
                        </label>
                        <textarea name="recipeInstructions"
                                  ref={register}
                                  id="recipeInstructions"
                                  rows={3}
                                  className={errors.recipeInstructions ? 'input-error' : ''}
                        />
                        <ol>
                            {props.instructions.map((instruction, i) => (
                                <li key={instruction}>
                                    {instruction}
                                    <i className="fas fa-edit edit" onClick={() => handleEdit(i, 'instructions')}/>
                                    <i className="fas fa-trash-alt trash" onClick={() => props.deleteInstruction(i)}/>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="add-recipe__input-container">
                        <label htmlFor="recipeIngredients">
                            Składniki <i className="fas fa-plus-square" onClick={handleAddIngredients}/>
                        </label>
                        <input name="recipeIngredients"
                               ref={register}
                               id="recipeIngredients"
                               className={errors.recipeIngredients ? 'input-error' : ''}
                        />
                        <ul>
                            {props.ingredients.map((ingredient, i) => (
                                <li key={ingredient}>
                                    {ingredient}
                                    <i className="fas fa-edit edit" onClick={() => handleEdit(i, 'ingredients')}/>
                                    <i className="fas fa-trash-alt trash" onClick={() => props.deleteIngredient(i)}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        instructions: state.addRecipe.recipe.instructions,
        ingredients: state.addRecipe.recipe.ingredients,
        edit: state.addRecipe.isEdit
    }
};

export default connect(mapStateToProps, {
    addInstruction,
    addIngredient,
    deleteInstruction,
    deleteIngredient,
    addRecipe,
    isEdit,
    editInstruction,
    editIngredient
})(AddRecipe);