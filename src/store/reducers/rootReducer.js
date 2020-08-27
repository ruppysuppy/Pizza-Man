import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import authReducer from './authReducer'
import addressReducer from './addressReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    address: addressReducer,
    menu: menuReducer,
    cart: cartReducer,
    order: orderReducer
})

export default rootReducer