import axios from '../../axios/axios'

import * as actionTypes from './actionTypes'


export const getMenu = () => {
    return {
        type: actionTypes.GET_MENU
    }
}

export const setMenu = menu => {
    return {
        type: actionTypes.SET_MENU,
        payload: {
            menu: menu
        }
    }
}

export const menuError = error => {
    return {
        type: actionTypes.MENU_ERROR,
        payload: {
            error: error
        }
    }
}

export const initMenu = () => {
    return dispatch => {
        dispatch(getMenu())
        axios.get("/menu.json")
            .then(response => (
                dispatch(setMenu(response.data))
            ))
            .catch(error => dispatch(menuError(error.message)))
    }
}