import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../../../store/actions/actions'

import style from './item.module.css'

function Item(props) {
    const { name, desc, id, imgLink, price } = props
    const item = {
        id: id,
        name: name,
        price: price,
        desc: desc,
        imgLink: imgLink
    }

    return (
        <div className={style.Body}>
            <div className={style.ImgContainer}>
                <div className={style.Image} style={{ backgroundImage: `url(${imgLink})` }} />
            </div>
            <div className="container">
                <span className="font-weight-light pt-2">
                    <strong>{name}</strong>
                </span>
                <br />
                <span className={`font-italic font-weight-lighter text-muted ${style.Description}`}>{desc}</span>
                <div className="row">
                    <div className={`mb-2 ${style.Row}`}>
                        <span className={`my-auto font-weight-light ${style.Price}`}>
                            <strong>₹</strong> {price}
                        </span>
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
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Item)