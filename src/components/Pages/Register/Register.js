import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import PageTitle from '../../UI/PageTitle/PageTitle'
import RegisterForm from './RegisterForm/RegisterForm'

import commonStyle from '../../../static/style/common.module.css'

function Register(props) {
    return (
        <div className={`my-5 pt-2 container ${commonStyle.PageBody}`}>
            {props.user ? <Redirect to="/menu" /> : null}

            <PageTitle>
                Register
            </PageTitle>

            <RegisterForm />
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Register)