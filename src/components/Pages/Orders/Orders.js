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
    const { user, hasMore, updateOrder } = props

    useEffect(() => {
        if (user && hasMore) {
            updateOrder(user.uid)
        }
    }, [user, hasMore, updateOrder])

    const display = props.orders.map(order => <OrderItem {...order} />)

    return (
        <div className={`my-5 pt-2 container ${style.Body}`}>
            <h1 className="display-4 mb-0">
                <strong>Orders</strong>
            </h1>
            <div className={`mt-1 mb-4 ${style.HR}`} />
            {!props.user ? <Redirect to="/" /> : null}
            {props.isLoading ? <Spinner />
                : props.orders.length > 0 ? display : <>
                    <h1 className="display-4">
                        You haven't ordered anything yet!
            </h1>
                </>}
            {props.hasMore ?
                < Button onClick={() => updateOrderHandler(props)}>
                    Load More
            </Button> : null
            }
        </div >
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