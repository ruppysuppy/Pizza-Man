import firebase from '../../firebase/firebase'

import * as actionTypes from './actionTypes'


const db = firebase.firestore()

export const getOrdersInit = () => {
    return {
        type: actionTypes.GET_ORDERS,
    }
}

export const getOrdersSuccess = (orders, last = null) => {
    return {
        type: actionTypes.GET_ORDERS_SUCCESS,
        payload: {
            orders: orders,
            last: last
        }
    }
}

export const getOrdersFail = (error) => {
    return {
        type: actionTypes.GET_ORDERS_FAIL,
        payload: {
            error: error
        }
    }
}

export const updateOrder = (uid, lastData) => (dispatch) => {
    dispatch(getOrdersInit())
    const dbRef = db.collection("orders")
    if (lastData) {
        dbRef.where("uid", "==", uid)
            .orderBy("ts", "desc")
            .startAfter(lastData.data().ts)
            .limit(3)
            .get()
            .then(snapshot => {
                const data = []
                snapshot.forEach(doc => {
                    data.push(doc.data())
                })
                if (snapshot.docs.length > 0) {
                    dispatch(getOrdersSuccess(data, snapshot.docs[snapshot.docs.length - 1]))
                } else {
                    dispatch(getOrdersSuccess(data))
                }
            })
            .catch(error => dispatch(getOrdersFail(error.message)))
    } else {
        dbRef.where("uid", "==", uid)
            .orderBy("ts", "desc")
            .limit(3)
            .get()
            .then(snapshot => {
                const data = []
                snapshot.forEach(doc => {
                    data.push(doc.data())
                })
                if (snapshot.docs.length > 0) {
                    dispatch(getOrdersSuccess(data, snapshot.docs[snapshot.docs.length - 1]))
                } else {
                    dispatch(getOrdersSuccess(data))
                }
            })
            .catch(error => dispatch(getOrdersFail(error.message)))
    }
}

export const clearOrders = () => {
    return {
        type: actionTypes.CLEAR_ORDERS
    }
}