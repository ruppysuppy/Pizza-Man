import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    last: null,
    isLoading: false,
    hasMore: true,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.GET_ORDERS:
            return {
                ...state,
                isLoading: true
            }

        case actionTypes.GET_ORDERS_SUCCESS:
            const updatedOrders = [
                ...state.orders,
                ...payload.orders
            ]
            let updatedHasMore = true
            if (payload.orders.length === 0) {
                updatedHasMore = false
            }
            return {
                ...state,
                orders: updatedOrders,
                last: payload.last,
                hasMore: updatedHasMore,
                isLoading: false
            }

        case actionTypes.GET_ORDERS_FAIL:
            return {
                ...state,
                isLoading: true,
                error: payload.error
            }

        case actionTypes.CLEAR_ORDERS:
            return initialState

        default:
            return state;
    }
}

export default reducer