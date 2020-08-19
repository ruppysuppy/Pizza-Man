import { combineReducers } from 'redux'

import menuReducer from './menuReducer'

const rootReducer = combineReducers({
    menu: menuReducer
})

export default rootReducer