import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer
})

export default rootReducer