import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actions'

import OrderItem from './OrderItem/OrderItem'
import Spinner from '../../UI/Spinner/Spinner'
import Button from '../../UI/Button/Button'

import style from './orders.module.css'


const updateOrderHandler = ({ updateOrder, user, last, hasMore }) => {
    if (hasMore) {
        updateOrder(user.uid, last)
    }
}

function Orders(props) {
    useEffect(() => {
        if (props.user) {
            props.updateOrder(props.user.uid)
        }
    }, [])

    const display = props.orders.map(order => <OrderItem {...order} />)

    return (
        <div className={`my-5 pt-2 container ${style.Body}`}>
            {!props.user ? <Redirect to="/" /> : null}
            {display}
            {props.isLoading ? <Spinner /> : null}
            <Button onClick={() => updateOrderHandler(props)}>
                Load More
            </Button>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    orders: state.pastOrders.orders,
    last: state.pastOrders.last,
    hasMore: state.pastOrders.hasMore,
    isLoading: state.pastOrders.isLoading
})

const mapDispatchToProps = dispatch => ({
    updateOrder: (uid, lastData = null) => dispatch(actions.updateOrder(uid, lastData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)