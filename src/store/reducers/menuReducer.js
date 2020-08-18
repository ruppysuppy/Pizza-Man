import * as actionTypes from '../actions/actionTypes'

const initialState = {
    menu: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.GET_MENU:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.SET_MENU:
            return {
                ...state,
                menu: payload.menu,
                isLoading: false
            }

        case actionTypes.MENU_ERROR:
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