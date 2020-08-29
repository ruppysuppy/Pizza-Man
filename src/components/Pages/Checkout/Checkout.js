import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import Button from '../../UI/Button/Button'
import Address from '../../UI/Address/Address'
import AddressForm from './AddressForm/AddressForm'
import Spinner from '../../UI/Spinner/Spinner'
import RadioButton from '../../UI/RadioButton/RadioButton'
import PageTitle from '../../UI/PageTitle/PageTitle'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import ErrorDisplay from '../../Util/ErrorDisplay/ErrorDisplay'

import * as actions from '../../../store/actions/actions'

import commonStyle from '../../../static/style/common.module.css'


const placeOrderHandler = (event, address, modeSelected, data, placeOrder, placeOrderFail) => {
    event.preventDefault()

    if (address && modeSelected) {
        placeOrder(data)
    } else if (!address && !modeSelected) {
        placeOrderFail("Please make sure that all fields are filled")
    } else if (!address) {
        placeOrderFail("Please fill in the address field")
    } else {
        placeOrderFail("Please select the mode of payment field")
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
        <div className={`container mt-5 pt-2 ${commonStyle.PageBody}`}>
            {props.isOrderLoading ?
                <Spinner /> :
                <>
                    {props.orderPlaced ?
                        <div>
                            <PageTitle>
                                Order Placed
                            </PageTitle>
                            <h1 className="display-6 mt-4">
                                Your yummy pizza will arrive at your doorstep soon! :)
                            </h1>
                        </div>
                        : <>
                            {props.cart.length === 0 ?
                                <Redirect to="./menu" /> : null}
                            {!props.user ?
                                <Redirect to="./login" /> : null}
                            <PageTitle>
                                Checkout
                            </PageTitle>

                            <div className="my-4">
                                <SectionTitle>
                                    Location
                                </SectionTitle>
                                {props.isAddressLoading ?
                                    <Spinner /> :
                                    <>
                                        <Address {...props.address} />

                                        {addressFormShown ?
                                            <AddressForm {...props.address} hideAddressForm={() => setAddressFormShown(false)} />
                                            : props.addressError === "No Address Found" ?
                                                <>
                                                    <ErrorDisplay>
                                                        {props.addressError}
                                                    </ErrorDisplay>
                                                    <span className="my-3 d-inline-block">
                                                        <Button onClick={() => setAddressFormShown(true)}>
                                                            Add Address
                                                    </Button>
                                                    </span>
                                                </> :
                                                <span className="my-3 d-inline-block">
                                                    <Button onClick={() => setAddressFormShown(true)}>
                                                        Update Address
                                                </Button>
                                                </span>
                                        }
                                    </>}
                            </div>
                            <div className="my-4">
                                <SectionTitle>
                                    Mode of Payment
                                </SectionTitle>
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
                                            <ErrorDisplay>
                                                {props.orderError}
                                            </ErrorDisplay>
                                            : null}
                                    </div>
                                    <div className="col-12 my-3">
                                        <Button type="button" onClick={(event) => placeOrderHandler(event, props.address, modeSelected, data, props.placeOrder, props.placeOrderFail)}>
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