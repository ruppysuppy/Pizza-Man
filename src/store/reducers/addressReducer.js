import * as actionTypes from '../actions/actionTypes'

const initialState = {
    address: null,
    error: null,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
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
                isLoading: false,
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
                isLoading: false,
                error: payload.error
            }

        case actionTypes.CLEAR_ADDRESS:
            return initialState

        default:
            return state;
    }
}

export default reducer