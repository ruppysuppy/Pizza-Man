import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CartItem from './CartItem/CartItem'
import Button from '../../../UI/Button/Button'
import * as BtnTypes from '../../../UI/Button/types'

import * as actions from '../../../../store/actions/actions'

import style from './cart.module.css'

function Cart(props) {
    const display = props.cart.map(item => (
        <CartItem key={item.id} {...item} />
    ))

    return (
        <>
            <div className={`mt-4 ${style.Body}`}>
                <h1 className="my-2 mx-2">Cart</h1>
                <div className="mx-2">
                    {props.cart.length > 0 ?
                        //     <button className={`my-2 mx-2 btn btn-danger ${style.ClearCartBtn}`} onClick={props.clearCart}>

                        // </button>
                        <span className={`my-2 mx-2 ${style.ClearCartBtn}`}>
                            <Button onClick={props.clearCart} type={BtnTypes.DANGER}>
                                Clear Cart
                            </Button>
                        </span>
                        : <div className={style.EmptyBody}>
                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                            <span>
                                Cart is Empty!
                    </span>
                        </div>}
                </div>
                {props.cart.length > 0 ?
                    <>
                        <div className={`mx-2 ${style.CartItemBody}`}>
                            {display}
                        </div>
                        <div className={style.CartUtil}>
                            <strong className={`mx-2 ${style.Price}`}> Total: ₹ {props.price}</strong>
                            <Link to="/cart">
                                <button className={style.CheckoutBtn}>
                                    GO TO CART
                                </button>
                            </Link>
                        </div>
                    </> : null}
            </div>
            {props.cart.length > 0 ?
                <Link to="/cart">
                    <div className={style.BodyMobile}>
                        GO TO CART
                    </div>
                </Link> : null}
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    price: state.cart.totalPrice
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(actions.clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)