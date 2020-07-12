import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../../store/actions/recipes';
import './Recipes.scss';

const Recipes = (props) => {

    useEffect(()=> {
        props.fetchRecipes(props.token, props.userId);
    }, []);

    return (
        <>
            <div className="recipes">
                <div className="recipes__header">
                    <h3>LISTA PRZEPISÓW</h3>
                    <i className="fas fa-plus-square"/>
                </div>
                <div className="recipes__row recipes__row-header">
                    <div className="recipes__col-1 day">
                        ID
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

                <div className="recipes__row">
                    <div className="recipes__col-1 day">
                        22
                    </div>
                    <div className="recipes__col-3 day">
                        Zapiekanka z ziemniakami
                    </div>
                    <div className="recipes__col-6 day">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aperiam culpa
                        dignissimos dolorum enim facere illum laborum, nam quos!
                    </div>
                    <div className="recipes__col-2 day">
                        <i className="fas fa-edit edit"/> <i className="fas fa-trash-alt trash"/>
                    </div>
                </div>
            </div>

        </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
};

export default connect(mapStateToProps, {fetchRecipes})(Recipes);