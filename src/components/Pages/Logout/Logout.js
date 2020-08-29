import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import firebase from '../../../firebase/firebase'

import * as actions from '../../../store/actions/actions'

function Logout(props) {
    if (props.user) {
        props.clearCart()
        props.clearOrders()
        props.clearAddress()
        firebase.auth().signOut()
    }

    return (
        <Redirect to="/" />
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(actions.clearCart()),
    clearOrders: () => dispatch(actions.clearOrders()),
    clearAddress: () => dispatch(actions.clearAddress())
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)