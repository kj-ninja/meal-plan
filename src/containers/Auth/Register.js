import React from 'react';
import {connect} from 'react-redux'
import {auth} from "../../store/actions/auth";

import {useForm} from "react-hook-form";
import './Auth.scss';
import Spinner from "../../components/UI/Spinner/Spinner";

const Register = (props) => {
    const {register, handleSubmit, errors, watch} = useForm();

    const handleRegister = data => {
        props.auth(data.email, data.password, 'register');
    };

    return (
        <div className="form__container">
            {props.loading ? <Spinner/> :
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="input__container">
                    <input
                        name="email"
                        placeholder="E-mail"
                        ref={register({
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                <div className="input__container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref={register({
                            required: "Required",
                            minLength: 6
                        })}
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                    {errors.password?.type === "minLength" &&
                    <p className="error-message">Must be at least 6 characters</p>}
                </div>
                <div className="input__container">
                    <input type="password" name="password2" placeholder="Confirm password" ref={register({
                        validate: (value) => {
                            return value === watch('password'); // value is from password2 and watch will return value from password
                        }
                    })}/>
                    {errors.password2 ? <p className="error-message">Both passwords should be the same</p> : null}

                    <p className="error-message">{props.error}</p>

                </div>
                <button type="submit">Submit</button>
            </form>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, {auth})(Register);