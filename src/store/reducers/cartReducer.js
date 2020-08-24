import * as actionTypes from '../actions/actionTypes'

const initialState = {
    cart: [],
    itemMap: {},
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.CLEAR_CART:
            return initialState

        case actionTypes.ADD_ITEM_TO_CART:
            const updatedCart = [...state.cart]
            const updatedMap = { ...state.itemMap }
            if (payload.item.id in state.itemMap) {
                updatedCart[state.itemMap[payload.item.id]].quantity += 1
            } else {
                updatedMap[payload.item.id] = updatedCart.length
                updatedCart.push(payload.item)
            }
            return {
                ...state,
                cart: updatedCart,
                itemMap: updatedMap
            }

        case actionTypes.REMOVE_ITEM_FROM_CART:
            let updatedCart = [...state.cart]
            const updatedMap = { ...state.itemMap }
            updatedCart[state.itemMap[payload.item.id]].quantity -= 1
            if (updatedCart[state.itemMap[payload.item.id]].quantity === 0) {
                updatedCart = updatedCart.filter(item => item.id !== payload.item.id)
                delete updatedMap[payload.item.id]
            }
            return {
                ...state,
                cart: updatedCart,
                itemMap: updatedMap
            }

        default:
            return state;
    }
}

export default reducer