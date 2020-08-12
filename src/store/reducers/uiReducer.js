import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isLoading: false
}

const reducer = (state = initialState, action) => {
    const { type } = action

    switch (type) {
        case actionTypes.START_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case actionTypes.STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}

export default reducer