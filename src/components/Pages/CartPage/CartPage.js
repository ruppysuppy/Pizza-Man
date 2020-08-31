import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import CartPageItem from './CartPageItem/CartPageItem'
import Button from '../../UI/Button/Button'
import PageTitle from '../../UI/PageTitle/PageTitle'

import { GST_RATE } from '../../../store/reducers/cartReducer'

import commonStyle from '../../../static/style/common.module.css'

function CartPage(props) {
    const display = props.cart.map(item => (
        <CartPageItem key={item.id} {...item} />
    ))

    return (
        <div className={`container mt-5 pt-2 ${commonStyle.PageBody}`}>
            {props.cart.length === 0 ?
                <Redirect to="./menu" /> : null}
            <PageTitle>
                Cart
            </PageTitle>
            <div className="mt-2">
                {display}
            </div>
            <div className="my-3">
                <strong>Price: ₹ {props.price}</strong>
                <br />
                <strong>GST: ₹ {props.gst} (rate: {GST_RATE * 100}%)</strong>
                <br />
                <strong>Total Price: ₹ {props.price + props.gst}</strong>
            </div>
            <Link to="/checkout">
                <Button>
                    CHECKOUT
                </Button>
            </Link>
            <br /> <br />
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    price: state.cart.totalPrice,
    gst: state.cart.gst
})

export default connect(mapStateToProps)(CartPage)