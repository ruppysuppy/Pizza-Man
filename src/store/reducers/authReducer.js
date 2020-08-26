import * as actionTypes from '../actions/actionTypes'

const initialState = {
    user: null,
    isLoading: false,
    address: null,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.AUTH_CHANGED:
            return {
                ...state,
                user: payload.user
            }

        case actionTypes.GET_ADDRESS:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.GET_ADDRESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                address: payload.address
            }

        case actionTypes.GET_ADDRESS_FAIL:
            return {
                ...state,
                isLoading: true,
                error: payload.error
            }

        case actionTypes.ADD_ADDRESS:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.ADD_ADDRESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                address: payload.address
            }

        case actionTypes.ADD_ADDRESS_FAIL:
            return {
                ...state,
                isLoading: true,
                error: payload.error
            }

        default:
            return state;
    }
}

export default reducer