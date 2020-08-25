import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../../store/actions/actions'

import style from './cartPageItem.module.css'

function CartPageItem(props) {
    const { id, name, price, desc, imgLink } = props
    const item = {
        id: id,
        name: name,
        price: price,
        desc: desc,
        imgLink: imgLink
    }

    return (
        <div className={style.Body}>
            <div className={style.Row}>
                <div className={style.ImgHolder}>
                    <div className={style.Img} style={{ backgroundImage: `url(${imgLink})` }} />
                </div>
                <div className={style.ItemBody}>
                    <div>
                        <strong> {name} </strong>
                    </div>
                    <div className={`font-italic font-weight-lighter text-muted ${style.Description}`}>
                        {desc}
                    </div>
                    <div className="row mt-2">
                        <div className={style.Price}>
                            Price: ₹ {price}
                        </div>
                        <div className={`my-auto ml-auto d-inline-block ${style.BtnHolder}`}>
                            <button className={style.ItemActionBtn} onClick={() => props.removeItemFromCart(item)}>
                                <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <span className={`my-auto mx-1 font-weight-light ${style.Quantity}`}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPageItem)