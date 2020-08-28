import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import StylizedFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase from '../../../firebase/firebase'

import PageTitle from '../../UI/PageTitle/PageTitle'

import commonStyle from '../../../static/style/common.module.css'

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
}

function Login(props) {
    return (
        <div className={`my-5 pt-2 container ${commonStyle.PageBody}`}>
            {props.user ? <Redirect to="/" /> : null}

            <PageTitle>
                Login
            </PageTitle>

            <StylizedFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Login)