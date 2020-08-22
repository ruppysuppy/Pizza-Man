import React, { useState } from 'react'

import style from './item.module.css'

function Item(props) {
    // temporary styling, needs to be updated
    const { name, desc, price } = props
    const [totalPrice, setTotalPrice] = useState(price)

    return (
        <div className={style.Body}>
            <div className={style.Row}>
                <div className="container">
                    <h3 className="font-weight-light">{name}</h3>
                    <h5 className="font-italic font-weight-lighter">{desc}</h5>
                    <div className="row">
                        <button className={style.BtnCustomize}>
                            Customize
                        </button>
                        <h5 className={`my-auto font-weight-light ${style.Price}`}>
                            <strong>₹</strong> {totalPrice}
                        </h5>
                    </div>
                </div>
                <div className={`my-auto ${style.BtnHolder}`}>
                    <button className={style.CartBtn} >
                        <i className="fa fa-minus" aria-hidden="true" />
                    </button>
                    <button className={style.CartBtn}>
                        <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item