import React from 'react';
import {connect} from 'react-redux';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {auth} from "../../store/actions/auth";
import './Auth.scss';

const Login = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const handleLogin = data => {
        props.auth(data.email, data.password, 'login');
    };

    return (
        <div className="form__container">
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
                </div>

                <button type="submit">Submit</button>
            </form>
            <p>Didn't register yet?</p>
            <Link to="/register">Click here to Sign Up</Link>
        </div>
    );
};

export default connect(null, {auth})(Login);