import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    addInstruction,
    addIngredient,
    deleteInstruction,
    deleteIngredient,
    listEdit,
    editInstruction,
    editIngredient
} from "../../store/actions/addRecipe";
import {addRecipe, editRecipe} from '../../store/actions/recipes';
import {useForm} from "react-hook-form";
import './AddRecipe.scss';

const AddRecipe = (props) => {
    const {register, handleSubmit, errors, getValues, setValue} = useForm();
    const [indexToEdit, setIndexToEdit] = useState(null);

    const handleAddInstruction = () => {
        if (props.isListEdit) {
            const instruction = getValues('recipeInstructions');
            props.editInstruction(props.instructions, instruction, indexToEdit);
            setValue('recipeInstructions', '');
            props.isListEdit(false);
            setIndexToEdit(null);
        } else {
            const instruction = getValues('recipeInstructions');
            props.addInstruction(instruction);
            setValue('recipeInstructions', '');
        }
    };

    const handleAddIngredients = () => {
        if (props.isListEdit) {
            const ingredient = getValues('recipeIngredients');
            props.editIngredient(props.ingredients, ingredient, indexToEdit);
            setValue('recipeIngredients', '');
            props.isListEdit(false);
            setIndexToEdit(null);
        } else {
            const ingredient = getValues('recipeIngredients');
            props.addIngredient(ingredient);
            setValue('recipeIngredients', '');
        }
    };

    const handleAddRecipe = () => {
        if (props.isRecipeEdit) {
            const recipe = {
                name: getValues('recipeName'),
                description: getValues('recipeDescription'),
                instructions: props.instructions,
                ingredients: props.ingredients,
                userId: props.userId
            }
            props.editRecipe(props.token, props.recipeId, props.userId, recipe);
            props.history.push('/dashboard');
        } else {
            const recipe = {
                name: getValues('recipeName'),
                description: getValues('recipeDescription'),
                instructions: props.instructions,
                ingredients: props.ingredients,
                userId: props.userId
            }
            props.addRecipe(props.token, recipe);
            props.history.push('/dashboard');
        }
    };

    const handleEditList = (index, place) => {
        props.isListEdit(true);
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
                           defaultValue={props.name}
                    />
                </div>

                <div className="add-recipe__input-container">
                    <label htmlFor="recipeDescription">Opis przepisu</label>
                    <textarea name="recipeDescription"
                              ref={register({required: true})}
                              id="recipeDescription"
                              rows={3}
                              defaultValue={props.description}
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
                                    <i className="fas fa-edit edit" onClick={() => handleEditList(i, 'instructions')}/>
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
                                    <i className="fas fa-edit edit" onClick={() => handleEditList(i, 'ingredients')}/>
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
        name: state.addRecipe.recipe.name,
        description: state.addRecipe.recipe.description,
        instructions: state.addRecipe.recipe.instructions,
        ingredients: state.addRecipe.recipe.ingredients,
        isRecipeEdit: state.addRecipe.isRecipeEdit,
        isListEdit: state.addRecipe.isListEdit,
        recipeId: state.addRecipe.recipe.id
    }
};

export default connect(mapStateToProps, {
    addInstruction,
    addIngredient,
    deleteInstruction,
    deleteIngredient,
    addRecipe,
    listEdit,
    editInstruction,
    editIngredient,
    editRecipe
})(AddRecipe);