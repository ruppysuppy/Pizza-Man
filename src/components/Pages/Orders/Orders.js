import React, { useEffect, useRef, useCallback } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actions'

import OrderItem from './OrderItem/OrderItem'
import Spinner from '../../UI/Spinner/Spinner'
import PageTitle from '../../UI/PageTitle/PageTitle'

import commonStyle from '../../../static/style/common.module.css'
import style from './order.module.css'


const updateOrderHandler = ({ updateOrder, user, last, hasMore }) => {
    if (hasMore) {
        updateOrder(user.uid, last)
    }
}

function Orders(props) {
    const { user, updateOrder, clearOrders, isLoading, hasMore } = props

    useEffect(() => {
        if (user) {
            updateOrder(user.uid)
        }
        return () => clearOrders()
    }, [])

    const observer = useRef()
    const lastOrderRef = useCallback((node) => {
        if (isLoading) { return }
        if (observer.current) { observer.current.disconnect() }
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                updateOrderHandler(props)
            }
        })
        if (node) { observer.current.observe(node) }
    }, [isLoading, hasMore])

    const items = props.orders.length
    const display = props.orders.map((order, index) => {
        if (items === index + 1) {
            return <OrderItem reference={lastOrderRef} {...order} key={order.ts} />
        }
        else {
            return <OrderItem {...order} key={order.ts} />
        }
    })

    return (
        <div className={`my-5 pt-2 container ${commonStyle.PageBody}`}>
            <PageTitle>
                Orders
            </PageTitle>
            <div className="my-2" />
            {!props.user ? <Redirect to="/" /> : null}
            {props.orders.length > 0 ? <>
                <div className={style.TopBar} />
                {display}
            </>
                : !props.isLoading ? <>
                    <h1 className="display-4">
                        You haven't ordered anything yet!
                    </h1>
                </> : null}
            <br />
            {props.isLoading ? <Spinner />
                : null}
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
    updateOrder: (uid, lastData = null) => dispatch(actions.updateOrder(uid, lastData)),
    clearOrders: () => dispatch(actions.clearOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)