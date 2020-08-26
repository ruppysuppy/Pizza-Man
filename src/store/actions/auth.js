import * as actionTypes from './actionTypes'

import firebase from '../../firebase/firebase'

const db = firebase.firestore()

// Auth
export const authChangedHandler = (user) => {
    return {
        type: actionTypes.AUTH_CHANGED,
        payload: {
            user: user
        }
    }
}

// Fetching address
export const authGetAddressInit = () => {
    return {
        type: actionTypes.GET_ADDRESS
    }
}

export const authGetAddressSuccess = (address) => {
    return {
        type: actionTypes.GET_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const authGetAddressFail = (error) => {
    return {
        type: actionTypes.GET_ADDRESS_FAIL,
        payload: {
            error: error
        }
    }
}

export const authGetAddress = (user) => {
    return dispatch => {
        if (user) {
            dispatch(authGetAddressInit())
            db.collection('users').doc(user.uid).get()
                .then(snapshot => {
                    if (snapshot.exists) {
                        dispatch(authGetAddressSuccess(snapshot.data()))
                    } else {
                        dispatch(authGetAddressFail("No Address Found"))
                    }
                })
                .catch(error => dispatch(authGetAddressFail(error.message)))
        }
    }
}

// Adding address
export const authAddAddressInit = () => {
    return {
        type: actionTypes.ADD_ADDRESS
    }
}

export const authAddAddressSuccess = (address) => {
    return {
        type: actionTypes.ADD_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const authAddAddressFail = () => {
    return {
        type: actionTypes.ADD_ADDRESS_FAIL
    }
}

export const authAddAddress = (user, address) => {
    return dispatch => {
        dispatch(authAddAddressInit())
        db.collection('users').doc(user.uid).set({ address: address })
            .then(() => dispatch(authGetAddressSuccess(address)))
            .catch(error => dispatch(authGetAddressFail(error.message)))
    }
}