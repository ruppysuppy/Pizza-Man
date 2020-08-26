import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import firebase from '../../../firebase/firebase'

function Logout(props) {
    if (props.user) {
        firebase.auth().signOut()
    }

    return (
        <Redirect to="/" />
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Logout)