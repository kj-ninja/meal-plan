import React, {useState} from 'react';
import {connect} from 'react-redux';
import {deleteRecipe} from '../../store/actions/recipes';
import {mapRecipeToEdit, clearAddRecipeForm} from '../../store/actions/addRecipeForm';
import './Recipes.scss';
import Spinner from "../../components/UI/Spinner/Spinner";
import useWindowWidth from "../../functions/customHooks/useWindowWidth";
import Backdrop from "../UI/Backdrop/Backdrop";

const Recipes = (props) => {
    const [modal, setModal] = useState(false);
    const [recipeToShow, setRecipeToShow] = useState(null);
    const {token, userId, loading} = props;
    const width = useWindowWidth();

    let modalPopUp = null;
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

    if (loading) {
        return <Spinner/>;
    }

    const handleEditRecipe = (recipe) => {
        props.history.push('/dashboard/add-recipe');
        props.mapRecipeToEdit(recipe);
    };

    const handleAddRecipe = () => {
        props.clearAddRecipeForm();
        props.history.push('/dashboard/add-recipe');
    };

    const handleShowRecipe = (recipeName) => {
        setRecipeToShow(findRecipe(recipeName));
        setModal(true);
        console.log(findRecipe(recipeName));
    };

    return (
        <>
            <div className="recipes">
                <div className="recipes__header">
                    <h3>LISTA PRZEPISÓW</h3>
                    <i className="fas fa-plus-square" onClick={handleAddRecipe}/>
                </div>
                {width < 600 ?
                    <>
                        <Backdrop show={modal} cancel={() => setModal(false)}/>
                        {modalPopUp}
                        <div className="recipes__row recipes__row-header">
                            <div className="recipes__col-4 day">
                                NAZWA
                            </div>
                            <div className="recipes__col-5 day">
                                OPIS
                            </div>
                            <div className="recipes__col-3 day">
                                AKCJE
                            </div>
                        </div>
                        {props.recipes.map((recipe, i) => (
                            <div className="recipes__row" key={i}>
                                <div className="recipes__col-4 day">
                                    {recipe.name}
                                </div>
                                <div className="recipes__col-5 day">
                                    {recipe.description}
                                </div>
                                <div className="recipes__col-3 day">
                                    <i className="fas fa-edit edit" onClick={() => handleEditRecipe(recipe)}/>
                                    <i className="fas fa-trash-alt trash"
                                       onClick={() => props.deleteRecipe(token, recipe.id, userId)}/>
                                </div>
                            </div>
                        ))}
                    </> :
                    <>
                        <div className="recipes__row recipes__row-header">
                            <div className="recipes__col-1 day">
                                LP
                            </div>
                            <div className="recipes__col-3 day">
                                NAZWA
                            </div>
                            <div className="recipes__col-6 day">
                                OPIS
                            </div>
                            <div className="recipes__col-2 day">
                                AKCJE
                            </div>
                        </div>
                        {props.recipes.map((recipe, i) => (
                            <div className="recipes__row" key={i} onClick={()=>console.log(recipe)}>
                                <div className="recipes__col-1 day">
                                    {i + 1}
                                </div>
                                <div className="recipes__col-3 day">
                                    {recipe.name}
                                </div>
                                <div className="recipes__col-6 day">
                                    {recipe.description}
                                </div>
                                <div className="recipes__col-2 day">
                                    <i className="fas fa-edit edit" onClick={() => handleEditRecipe(recipe)}/>
                                    <i className="fas fa-trash-alt trash"
                                       onClick={() => props.deleteRecipe(token, recipe.id, userId)}/>
                                </div>
                            </div>
                        ))}
                    </>}

            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.recipes.loading
    }
};

export default connect(mapStateToProps, {deleteRecipe, mapRecipeToEdit, clearAddRecipeForm})(Recipes);