import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import Button from '../../UI/Button/Button'

import * as actions from '../../../store/actions/actions'

import style from './checkout.module.css'

function Checkout(props) {
    const data = {
        order: props.cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            itemPrice: item.price,
            price: item.quantity * item.price
        }))
    }
    const user = {
        uId: "d78ui2as53gd78am"
    }

    return (
        <div className={`container mt-5 pt-2 ${style.Body}`}>
            {props.cart.length === 0 ?
                <Redirect to="./menu" /> : null}
            <h1 className="display-6 mb-0">
                <strong>CHECKOUT</strong>
            </h1>
            <div className={`mt-1 mb-4 ${style.HR}`} />

            <div className="my-4">
                <div className={style.Row}>
                    <h2 className={style.H2}>Location</h2>
                    <div className={`my-auto ${style.HRLight}`} />
                </div>
            </div>
            <div className="my-4">
                <div className={style.Row}>
                    <h2 className={style.H2}>Mode of Payment</h2>
                    <div className={`my-auto ${style.HRLight}`} />
                </div>
                <form>
                    <div class="col-12 mt-4">
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="ModeOfPayment" id="CashOnDelivery" required />
                            <label class="form-check-label" for="CashOnDelivery">
                                Cash on Delivery
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="ModeOfPayment" id="Wallet" disabled required />
                            <label class="form-check-label" for="Wallet">
                                Wallet
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="ModeOfPayment" id="CreditOrDebitCard" disabled required />
                            <label class="form-check-label" for="CreditOrDebitCard">
                                Credit / Debit Card
                            </label>
                        </div>
                        <div class="form-check my-2">
                            <input class="form-check-input" type="radio" name="ModeOfPayment" id="NetBanking" disabled required />
                            <label class="form-check-label" for="NetBanking">
                                Net Banking
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <Button type="button" onClick={() => props.placeOrder(data, user)}>
                            Place Order
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    price: state.cart.totalPrice
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (data, user) => dispatch(actions.placeOrder(data, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)