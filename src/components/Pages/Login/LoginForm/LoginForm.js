import React, { useState } from 'react'
import { connect } from 'react-redux'

import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import ErrorDisplay from '../../../Util/ErrorDisplay/ErrorDisplay'
import Spinner from '../../../UI/Spinner/Spinner'

import * as actions from '../../../../store/actions/actions'
import { Redirect } from 'react-router'

function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const updateHandler = (event) => {
        event.preventDefault()

        if (email.length > 0 &&
            password.length > 0) {
            props.emailAuth(email, password)
        } else {
            props.emailAuthFail("Please fill up all fields")
        }
    }

    return (
        <div>
            {props.registered ?
                <Redirect to="/login" /> : null}
            {props.isLoading ? <Spinner /> :
                <form onSubmit={updateHandler}>
                    <Input
                        val={email}
                        onChangeFunc={setEmail}
                        placeholder="Email"
                        type="email"
                    />
                    <Input
                        val={password}
                        onChangeFunc={setPassword}
                        placeholder="Password"
                        type="password"
                    />
                    {props.error ? <ErrorDisplay>
                        {props.error}
                    </ErrorDisplay> : null}
                    <Button>
                        Login
                    </Button>
                </form>}
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
    emailAuth: (email, password) => dispatch(actions.emailAuth(email, password)),
    emailAuthFail: (error) => dispatch(actions.emailAuthFail(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)