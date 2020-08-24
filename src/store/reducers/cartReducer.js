import * as actionTypes from '../actions/actionTypes'

const initialState = {
    cart: [],
    itemMap: {},
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    let updatedCart = [...state.cart]
    let updatedPrice = state.totalPrice
    const updatedMap = { ...state.itemMap }

    switch (type) {
        case actionTypes.CLEAR_CART:
            return initialState

        case actionTypes.ADD_ITEM_TO_CART:
            if (payload.item.id in state.itemMap) {
                updatedCart[state.itemMap[payload.item.id]].quantity += 1
            } else {
                updatedMap[payload.item.id] = updatedCart.length
                updatedCart.push({
                    ...payload.item,
                    quantity: 1
                })
            }
            updatedPrice += payload.item.price
            return {
                ...state,
                cart: updatedCart,
                itemMap: updatedMap,
                totalPrice: updatedPrice
            }

        case actionTypes.REMOVE_ITEM_FROM_CART:
            if (!(payload.item.id in state.itemMap)) {
                return state
            }
            updatedPrice -= payload.item.price
            updatedCart[state.itemMap[payload.item.id]].quantity -= 1
            if (updatedCart[state.itemMap[payload.item.id]].quantity === 0) {
                updatedCart = updatedCart.filter(item => item.id !== payload.item.id)
                const index = updatedMap[payload.item.id]
                delete updatedMap[payload.item.id]
                for (let i = index; i < updatedCart.length; i++) {
                    updatedMap[updatedCart[i].id] -= 1
                }
            }
            return {
                ...state,
                cart: updatedCart,
                itemMap: updatedMap,
                totalPrice: updatedPrice
            }

        default:
            return state;
    }
}

export default reducer