import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer
})

export default rootReducer