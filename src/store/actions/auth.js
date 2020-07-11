import axios from 'axios';
import * as actionTypes from './actionTypes';
import {translate} from "../../functions/translate";

export const authStart = () => ({type: actionTypes.AUTH_START});

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const auth = (email, password, method) => {
    return dispatch => {
        dispatch(authStart());
        const user = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7O4MhJq7_PfqqAREfflZP_M7Cz9qFT0Q';
        if (method === 'login') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7O4MhJq7_PfqqAREfflZP_M7Cz9qFT0Q'
        }

        axios.post(url, user)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(translate(error.response.data.error.message)));
            })
    };
};