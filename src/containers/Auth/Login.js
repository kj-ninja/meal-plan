import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import './Auth.scss';

const Login = () => {
    const {register, handleSubmit, errors} = useForm();

    const handleLogin = data => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="form__container">
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="input__container">
                    <input
                        name="email"
                        placeholder="E-mail"
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                            }
                        })}
                    />
                    {errors.email ? <p className="error-message">{errors.email.message}</p> : null}
                </div>
                <div className="input__container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref={register({required: true, minLength: 6})}
                    />
                    {errors.password ? <p className="error-message">{errors.password.message}</p> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>Didn't register yet?</p>
            <Link to="/register">Click here to Sign Up</Link>
        </div>
    );
};

export default Login;