import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../../../store/actions/actions'

import style from './cartItem.module.css'

function CartItem(props) {
    const { id, name, price, desc } = props

    const item = {
        id: id,
        name: name,
        price: price,
        desc: desc
    }

    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {desc}
            </div>
            <div>
                Price: {price}
            </div>
            <div className={`my-auto ml-auto ${style.BtnHolder}`}>
                <button className={style.ItemActionBtn} onClick={() => props.removeItemFromCart(item)}>
                    <i className="fa fa-minus" aria-hidden="true" />
                </button>
                <span className={`my-auto mx-1 font-weight-light ${style.Price}`}>
                    <strong> {id in props.itemMap ?
                        props.cart[props.itemMap[id]].quantity : 0} </strong>
                </span>
                <button className={style.ItemActionBtn} onClick={() => props.addItemToCart(item)}>
                    <i className="fa fa-plus" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    itemMap: state.cart.itemMap
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(actions.addItemToCart(item)),
    removeItemFromCart: item => dispatch(actions.removeItemFromCart(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)