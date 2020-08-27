import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import Button from '../../UI/Button/Button'
import Address from '../../UI/Address/Address'
import AddressForm from './AddressForm/AddressForm'
import Spinner from '../../UI/Spinner/Spinner'
import RadioButton from '../../UI/RadioButton/RadioButton'

import * as actions from '../../../store/actions/actions'

import style from './checkout.module.css'


const placeOrderHandler = (address, modeSelected, data, placeOrder, placeOrderFail) => {
    if (address && modeSelected) {
        placeOrder(data)
    } else {
        placeOrderFail("Please make sure that all fields are filled")
    }
}

function Checkout(props) {
    const order = props.cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        itemPrice: item.price,
        price: item.quantity * item.price
    }))
    const data = {
        order: order,
        address: props.address,
        uid: props.user && props.user.uid,
        price: {
            price: props.price,
            gst: props.gst,
            total: props.price + props.gst
        }
    }

    const { placeOrderInitialize, getAddress, user } = props

    const [addressFormShown, setAddressFormShown] = useState(false)
    const [modeSelected, setModeSelected] = useState(false)

    useEffect(() => {
        getAddress(user)
    }, [user, getAddress])
    useEffect(() => {
        return () => placeOrderInitialize()
    }, [placeOrderInitialize])

    if (props.orderPlaced) {
        props.clearCart()
    }

    return (
        <div className={`container mt-5 pt-2 ${style.Body}`}>
            {props.isOrderLoading ?
                <Spinner /> :
                <>
                    {props.orderPlaced ?
                        <div>
                            <h1 className="display-6 mb-0">
                                <strong>ORDER PLACED</strong>
                            </h1>
                            <div className={`mt-1 mb-4 ${style.HR}`} />
                            <h1 className="display-6 mt-4">
                                Your yummy pizza will arrive at your doorstep soon! :)
                            </h1>
                        </div>
                        : <>
                            {props.cart.length === 0 ?
                                <Redirect to="./menu" /> : null}
                            {!props.user ?
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
                                {props.isAddressLoading ?
                                    <Spinner /> :
                                    <>
                                        <Address {...props.address} />
                                        {props.addressError ?
                                            <div className="alert alert-danger mt-4" role="alert">
                                                <strong>{props.addressError}</strong>
                                            </div>
                                            : null}

                                        {addressFormShown ? <AddressForm {...props.address} hideAddressForm={() => setAddressFormShown(false)} /> :
                                            props.addressError ?
                                                <button onClick={() => setAddressFormShown(true)}>
                                                    Add Address
                                                </button> :
                                                <button onClick={() => setAddressFormShown(true)}>
                                                    Update Address
                                                </button>
                                        }
                                    </>}
                            </div>
                            <div className="my-4">
                                <div className={style.Row}>
                                    <h2 className={style.H2}>Mode of Payment</h2>
                                    <div className={`my-auto ${style.HRLight}`} />
                                </div>
                                <form>
                                    <div className="col-12 mt-4">
                                        <RadioButton name="ModeOfPayment" code="CashOnDelivery" isRequired clickFunc={() => setModeSelected(true)}>
                                            Cash on Delivery
                                        </RadioButton>
                                        <RadioButton name="ModeOfPayment" code="Wallet" isDisabled isRequired clickFunc={() => setModeSelected(true)}>
                                            Wallet
                                        </RadioButton>
                                        <RadioButton name="ModeOfPayment" code="CreditOrDebitCard" isDisabled isRequired clickFunc={() => setModeSelected(true)}>
                                            Credit / Debit Card
                                        </RadioButton>
                                        <RadioButton name="ModeOfPayment" code="NetBanking" isDisabled isRequired clickFunc={() => setModeSelected(true)}>
                                            Net Banking
                                        </RadioButton>
                                    </div>
                                    <div className="col-12">
                                        {props.orderError ?
                                            <div className="alert alert-danger mt-4" role="alert">
                                                <strong>{props.orderError}</strong>
                                            </div>
                                            : null}
                                    </div>
                                    <div className="col-12">
                                        <Button type="button" onClick={() => placeOrderHandler(props.address, modeSelected, data, props.placeOrder, props.placeOrderFail)}>
                                            Place Order
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </>}
                </>}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    price: state.cart.totalPrice,
    gst: state.cart.gst,
    user: state.auth.user,
    address: state.address.address,
    addressError: state.address.error,
    isAddressLoading: state.address.isLoading,
    orderPlaced: state.order.orderPlaced,
    isOrderLoading: state.order.isLoading,
    orderError: state.order.error
})

const mapDispatchToProps = dispatch => ({
    placeOrderInitialize: () => dispatch(actions.placeOrderInitialize()),
    placeOrder: (data) => dispatch(actions.placeOrder(data)),
    placeOrderFail: (error) => dispatch(actions.placeOrderFail(error)),
    getAddress: (user) => dispatch(actions.getAddress(user)),
    clearCart: () => dispatch(actions.clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)