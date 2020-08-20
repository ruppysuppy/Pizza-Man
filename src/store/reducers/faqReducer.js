import * as actionTypes from '../actions/actionTypes'

const initialState = {
    faq: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.GET_FAQ:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.GET_FAQ_SUCCESS:
            return {
                ...state,
                faq: payload.faq,
                isLoading: false
            }

        case actionTypes.GET_FAQ_FAIL:
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