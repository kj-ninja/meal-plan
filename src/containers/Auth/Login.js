import React from 'react';
import {connect} from 'react-redux';
import {useForm} from "react-hook-form";
import {Link, Redirect} from "react-router-dom";
import {auth, authClearError} from "../../store/actions/auth";
import './Auth.scss';
import Spinner from "../../components/UI/Spinner/Spinner";

const Login = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const handleLogin = data => {
        props.auth(data.email, data.password, 'login');
    };

    if (props.isAuth) {
        return <Redirect to="/dashboard"/>;
    }

    return (
        <div className="form__container">
            {props.loading ? <Spinner/> :
            <>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                        <p className="error-message">{props.error}</p>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                <p>Didn't register yet?</p>
                <Link to="/register" onClick={props.authClearError}>Click here to Sign Up</Link>
            </>}
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

export default connect(mapStateToProps, {auth, authClearError})(Login);