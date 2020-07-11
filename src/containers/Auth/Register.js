import React from 'react';
import {useForm} from "react-hook-form";
import './Auth.scss';

const Auth = () => {
    const {register, handleSubmit, errors, watch} = useForm();

    const handleRegister = data => {
        console.log('dupa');
    };

    return (
        <div className="form__container">
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
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Auth;