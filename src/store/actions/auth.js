import * as actionTypes from './actionTypes'

export const authChangedHandler = user => {
    return {
        type: actionTypes.AUTH_CHANGED,
        payload: {
            user: user
        }
    }
}