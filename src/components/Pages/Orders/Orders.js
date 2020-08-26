import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

function Orders(props) {
    return (
        <div>
            {!props.user ? <Redirect to="/" /> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Orders)