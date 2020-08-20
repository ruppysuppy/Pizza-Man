import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import faqReducer from './faqReducer'

const rootReducer = combineReducers({
    faq: faqReducer,
    menu: menuReducer
})

export default rootReducer