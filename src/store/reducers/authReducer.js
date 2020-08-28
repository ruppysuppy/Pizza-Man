import * as actionTypes from '../actions/actionTypes'

const initialState = {
    user: null,
    isLoading: false,
    registered: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.AUTH_CHANGED:
            return {
                ...state,
                user: payload.user,
                isLoading: false,
                error: null
            }

        case actionTypes.EMAIL_REGISTER:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.EMAIL_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                registered: true
            }

        case actionTypes.EMAIL_REGISTER_FAIL:
            return {
                ...state,
                error: payload.error,
                isLoading: false
            }

        case actionTypes.EMAIL_AUTH:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.EMAIL_AUTH_FAIL:
            return {
                ...state,
                error: payload.error,
                isLoading: false
            }

        default:
            return state;
    }
}

export default reducer