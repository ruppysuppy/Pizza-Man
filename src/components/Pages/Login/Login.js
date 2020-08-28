import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import PageTitle from '../../UI/PageTitle/PageTitle'
import LoginForm from './LoginForm/LoginForm'

import commonStyle from '../../../static/style/common.module.css'

function Login(props) {
    return (
        <div className={`my-5 pt-2 container ${commonStyle.PageBody}`}>
            {props.user ? <Redirect to="/menu" /> : null}

            <PageTitle>
                Login
            </PageTitle>

            <LoginForm />
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Login)