import { combineReducers } from 'redux'

import uiReducer from './uiReducer'
import menuReducer from './menuReducer'

const rootReducer = combineReducers({
    ui: uiReducer,
    menu: menuReducer
})

export default rootReducer