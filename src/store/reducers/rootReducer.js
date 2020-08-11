import { combineReducers } from 'redux'

import uiReducer from './uiReducer'

const rootReducer = combineReducers({
    ui: uiReducer
})

export default rootReducer