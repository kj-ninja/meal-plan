import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchRecipes, deleteRecipe} from '../../store/actions/recipes';
import {mapRecipeToEdit} from '../../store/actions/addRecipe';
import './Recipes.scss';
import Spinner from "../../components/UI/Spinner/Spinner";

const Recipes = (props) => {

    useEffect(() => {
        props.fetchRecipes(props.token, props.userId);
    }, []);

    if (props.loading) {
        return <Spinner/>;
    }

    const handleEditRecipe = (recipe) => {
        props.history.push('/dashboard/add-recipe');
        props.mapRecipeToEdit(recipe);
    };

    return (
        <>
            <div className="recipes">
                <div className="recipes__header">
                    <h3>LISTA PRZEPISÓW</h3>
                    <i className="fas fa-plus-square"/>
                </div>
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
                    <div className="recipes__row" key={i}>
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
                            <i className="fas fa-edit edit" onClick={()=>handleEditRecipe(recipe)}/>
                            <i className="fas fa-trash-alt trash" onClick={()=>props.deleteRecipe(props.token, recipe.id, props.userId)}/>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.recipes.loading,
        recipes: state.recipes.recipes
    }
};

export default connect(mapStateToProps, {fetchRecipes, deleteRecipe, mapRecipeToEdit})(Recipes);