import React from 'react';
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import './Auth.scss';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email should be valid')
        .required('Email is required'),
    password: Yup.string()
        .required('Field is required')
        .min(6, 'Password should have more than 6 characters'),
    changepassword: Yup.string().when("password", {
        is: val => (!!(val && val.length > 0)),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both passwords should be the same"
        )
    })
});

const Auth = () => {
    const {register, handleSubmit, errors} = useForm({
        validationSchema: SignupSchema
    });


    const handleRegister = data => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="form__container">
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="input__container">
                    <input
                        name="email"
                        placeholder="E-mail"
                        ref={register}
                    />
                    {errors.email ? <p className="error-message">{errors.email.message}</p> : null}

                </div>
                <div className="input__container">
                    <input type="password" name="password" placeholder="Password" ref={register}/>
                    {errors.password ? <p className="error-message">{errors.password.message}</p> : null}

                </div>
                <div className="input__container">
                    <input type="password" name="changepassword" placeholder="Verify password" ref={register}/>
                    {errors.changepassword ? <p className="error-message">{errors.changepassword.message}</p> : null}

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Auth;