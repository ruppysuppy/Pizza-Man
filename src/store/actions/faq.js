import axios from '../../axios/axios'

import * as actionTypes from './actionTypes'


export const getFaq = () => {
    return {
        type: actionTypes.GET_FAQ
    }
}

export const getFaqSuccess = faq => {
    return {
        type: actionTypes.GET_FAQ_SUCCESS,
        payload: {
            faq: faq
        }
    }
}

export const getFaqFail = error => {
    return {
        type: actionTypes.GET_FAQ_FAIL,
        payload: {
            error: error
        }
    }
}

export const initFaq = () => {
    return dispatch => {
        dispatch(getFaq())
        axios.get("/faq.json")
            .then(response => (
                dispatch(getFaqSuccess(response.data))
            ))
            .catch(error => dispatch(getFaqFail(error.message)))
    }
}