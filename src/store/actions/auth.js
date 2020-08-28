import * as actionTypes from './actionTypes'

import firebase from '../../firebase/firebase'


const auth = firebase.auth()

export const authChangedHandler = (user) => {
    return {
        type: actionTypes.AUTH_CHANGED,
        payload: {
            user: user
        }
    }
}

export const emailRegisterInit = () => {
    return {
        type: actionTypes.EMAIL_REGISTER
    }
}

export const emailRegisterSuccess = () => {
    return {
        type: actionTypes.EMAIL_REGISTER_SUCCESS
    }
}

export const emailRegisterFail = (error) => {
    return {
        type: actionTypes.EMAIL_REGISTER_FAIL,
        payload: {
            error: error
        }
    }
}

export const emailRegister = (email, password) => {
    return dispatch => {
        dispatch(emailAuthInit())
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => dispatch(emailRegisterSuccess()))
            .catch(error => dispatch(emailAuthFail(error.message)))
    }
}

export const emailAuthInit = () => {
    return {
        type: actionTypes.EMAIL_AUTH
    }
}

export const emailAuthFail = (error) => {
    return {
        type: actionTypes.EMAIL_AUTH_FAIL,
        payload: {
            error: error
        }
    }
}

export const emailAuth = (email, password) => {
    return dispatch => {
        dispatch(emailAuthInit())
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => dispatch(emailAuthFail(error.message)))
    }
}