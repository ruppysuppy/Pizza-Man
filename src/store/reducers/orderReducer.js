import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orderPlaced: false,
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.PLACE_ORDER_INIT:
            return initialState

        case actionTypes.PLACE_ORDER:
            return {
                ...state,
                orderPlaced: false,
                isLoading: true,
                error: null
            }

        case actionTypes.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                orderPlaced: true,
                isLoading: false
            }

        case actionTypes.PLACE_ORDER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            }

        default:
            return state;
    }
}

export default reducer