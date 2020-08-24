import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem/CartItem'

import * as actions from '../../../../store/actions/actions'

function Cart(props) {
    const display = props.cart.map(item => (
        <CartItem {...item} />
    ))

    return (
        <div className="mt-4">
            <h1>Cart</h1>
            {props.cart.length > 0 ?
                <button onClick={props.clearCart}>
                    Clear Cart
                </button> : <div>
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <span>
                        Cart is Empty!
                </span>
                </div>}
            <div>
                {display}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(actions.clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)