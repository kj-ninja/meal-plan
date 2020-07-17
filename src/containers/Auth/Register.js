import React from 'react';
import {connect} from 'react-redux'
import {auth} from "../../store/actions/auth";
import {useForm} from "react-hook-form";
import './Auth.scss';
import Spinner from "../../components/UI/Spinner/Spinner";
import {Redirect} from "react-router-dom";

const Register = (props) => {
    const {register, handleSubmit, errors, watch} = useForm();

    const handleRegister = data => {
        props.auth(data.email, data.password, 'register');
    };

    if (props.isAuth) {
        return <Redirect to="/dashboard"/>;
    }

    return (
        <div className="form__container">
            {props.loading ? <Spinner/> :
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="input__container">
                    <input
                        name="email"
                        placeholder="E-mail"
                        ref={register({
                            required: "Wymagane",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Podano niepoprawny e-mail"
                            }
                        })}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                <div className="input__container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Hasło"
                        ref={register({
                            required: "Wymagane",
                            minLength: 6
                        })}
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                    {errors.password?.type === "minLength" &&
                    <p className="error-message">Hasło musi mieć co najmniej 6 znaków</p>}
                </div>
                <div className="input__container">
                    <input type="password" name="password2" placeholder="Powtórz hasło" ref={register({
                        validate: (value) => {
                            return value === watch('password');
                        }
                    })}/>
                    {errors.password2 ? <p className="error-message">Obydwa hasła muszą być takie same</p> : null}

                    <p className="error-message">{props.error}</p>

                </div>
                <button type="submit">Zatwierdź</button>
            </form>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        loading: state.auth.loading,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, {auth})(Register);