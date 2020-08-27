import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import CartPageItem from './CartPageItem/CartPageItem'
import Button from '../../UI/Button/Button'

import { GST_RATE } from '../../../store/reducers/cartReducer'

import style from './cartPage.module.css'

function CartPage(props) {
    const display = props.cart.map(item => (
        <CartPageItem key={item.id} {...item} />
    ))

    return (
        <div className={`container mt-5 pt-2 ${style.Body}`}>
            {props.cart.length === 0 ?
                <Redirect to="./menu" /> : null}
            <h1 className="display-6 mb-0">
                <strong>CART</strong>
            </h1>
            <div className={`mt-1 mb-4 ${style.HR}`} />
            <div className="mt-2">
                {display}
            </div>
            <div className="mt-3">
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
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    price: state.cart.totalPrice,
    gst: state.cart.gst
})

export default connect(mapStateToProps)(CartPage)