import * as actionTypes from './actionTypes'

import firebase from '../../firebase/firebase'

const db = firebase.firestore()

// Fetching address
export const getAddressInit = () => {
    return {
        type: actionTypes.GET_ADDRESS
    }
}

export const getAddressSuccess = (address) => {
    return {
        type: actionTypes.GET_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const getAddressFail = (error) => {
    return {
        type: actionTypes.GET_ADDRESS_FAIL,
        payload: {
            error: error
        }
    }
}

export const getAddress = (user) => {
    return dispatch => {
        if (user) {
            dispatch(getAddressInit())
            db.collection('users').doc(user.uid).get()
                .then(snapshot => {
                    if (snapshot.exists) {
                        dispatch(getAddressSuccess(snapshot.data()))
                    } else {
                        dispatch(getAddressFail("No Address Found"))
                    }
                })
                .catch(error => dispatch(getAddressFail(error.message)))
        }
    }
}

// Adding address
export const addAddressInit = () => {
    return {
        type: actionTypes.ADD_ADDRESS
    }
}

export const addAddressSuccess = (address) => {
    return {
        type: actionTypes.ADD_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const addAddressFail = (error) => {
    return {
        type: actionTypes.ADD_ADDRESS_FAIL,
        payload: {
            error: error
        }
    }
}

export const addAddress = (user, address, isNewData = true) => {
    return dispatch => {
        dispatch(addAddressInit())
        if (isNewData) {
            db.collection('users').doc(user.uid).set({ ...address })
                .then(() => dispatch(getAddressSuccess(address)))
                .catch(error => dispatch(getAddressFail(error.message)))
        } else {
            db.collection('users').doc(user.uid).update({ ...address })
                .then(() => dispatch(getAddressSuccess(address)))
                .catch(error => dispatch(getAddressFail(error.message)))
        }
    }
}

// Clearing address
export const clearAddress = () => {
    return {
        type: actionTypes.CLEAR_ADDRESS
    }
}