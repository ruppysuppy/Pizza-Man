import React, { useState } from 'react'

import style from './item.module.css'

function Item(props) {
    const { name, desc, imgLink, price } = props

    return (
        <div className={style.Body}>
            <div className={style.ImgContainer}>
                <div className={style.Image} style={{ backgroundImage: `url(${imgLink})` }} />
            </div>
            <div className="container">
                <h4 className="font-weight-light pt-2">{name}</h4>
                <h6 className="font-italic font-weight-lighter">{desc}</h6>
                <div className="row">
                    <div className={`mb-2 ${style.Row}`}>
                        <h6 className={`my-auto font-weight-light ${style.Price}`}>
                            <strong>₹</strong> {price}
                        </h6>
                        <div className={`my-auto ml-auto ${style.BtnHolder}`}>
                            <button className={style.ItemActionBtn} >
                                <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <h6 className={`my-auto mx-1 font-weight-light ${style.Price}`}>
                                <strong> 0 </strong>
                            </h6>
                            <button className={style.ItemActionBtn}>
                                <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item