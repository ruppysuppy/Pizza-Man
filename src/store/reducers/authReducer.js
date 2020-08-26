import * as actionTypes from '../actions/actionTypes'

const initialState = {
    user: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.AUTH_CHANGED:
            return {
                user: payload.user
            }

        default:
            return state;
    }
}

export default reducer