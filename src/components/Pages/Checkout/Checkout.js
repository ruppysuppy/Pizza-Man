import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import Button from '../../UI/Button/Button'
import Address from './Address/Address'
import AddressForm from './AddressForm/AddressForm'
import Spinner from '../../UI/Spinner/Spinner'

import * as actions from '../../../store/actions/actions'

import style from './checkout.module.css'

function Checkout(props) {
    const data = {
        order: props.cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            itemPrice: item.price,
            price: item.quantity * item.price,
            address: props.address
        }))
    }
    const user = props.user

    const [addressFormShown, setAddressFormShown] = useState(false)
    useEffect(() => {
        props.getAddress(user)
    }, [user])


    return (
        <div className={`container mt-5 pt-2 ${style.Body}`}>
            {props.cart.length === 0 ?
                <Redirect to="./menu" /> : null}
            {!user ?
                <Redirect to="./login" /> : null}
            <h1 className="display-6 mb-0">
                <strong>CHECKOUT</strong>
            </h1>
            <div className={`mt-1 mb-4 ${style.HR}`} />

            <div className="my-4">
                <div className={style.Row}>
                    <h2 className={style.H2}>Location</h2>
                    <div className={`my-auto ${style.HRLight}`} />
                </div>
                {props.isLoading ?
                    <Spinner /> :
                    <>
                        <Address {...props.address} />
                        {props.error ?
                            <div className="alert alert-danger mt-4" role="alert">
                                <strong>{props.error}</strong>
                            </div>
                            : null}

                        {addressFormShown ? <AddressForm {...props.address} hideAddressForm={() => setAddressFormShown(false)} /> :
                            <button onClick={() => setAddressFormShown(true)}>
                                Update Address
                            </button>}
                    </>}
            </div>
            <div className="my-4">
                <div className={style.Row}>
                    <h2 className={style.H2}>Mode of Payment</h2>
                    <div className={`my-auto ${style.HRLight}`} />
                </div>
                <form>
                    <div className="col-12 mt-4">
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="ModeOfPayment" id="CashOnDelivery" required />
                            <label className="form-check-label" htmlFor="CashOnDelivery">
                                Cash on Delivery
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="ModeOfPayment" id="Wallet" disabled required />
                            <label className="form-check-label" htmlFor="Wallet">
                                Wallet
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="ModeOfPayment" id="CreditOrDebitCard" disabled required />
                            <label className="form-check-label" htmlFor="CreditOrDebitCard">
                                Credit / Debit Card
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="ModeOfPayment" id="NetBanking" disabled required />
                            <label className="form-check-label" htmlFor="NetBanking">
                                Net Banking
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
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
    price: state.cart.totalPrice,
    user: state.auth.user,
    address: state.address.address,
    error: state.address.error,
    isLoading: state.address.isLoading
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (data, user) => dispatch(actions.placeOrder(data, user)),
    getAddress: (user) => dispatch(actions.getAddress(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)