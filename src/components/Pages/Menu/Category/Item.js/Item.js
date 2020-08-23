import React from 'react'

import style from './item.module.css'

function Item(props) {
    const { name, desc, imgLink, price } = props

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
                <span className={`font-italic font-weight-lighter ${style.Description}`}>{desc}</span>
                <div className="row">
                    <div className={`mb-2 ${style.Row}`}>
                        <span className={`my-auto font-weight-light ${style.Price}`}>
                            <strong>₹</strong> {price}
                        </span>
                        <div className={`my-auto ml-auto ${style.BtnHolder}`}>
                            <button className={style.ItemActionBtn} >
                                <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <span className={`my-auto mx-1 font-weight-light ${style.Price}`}>
                                <strong> 0 </strong>
                            </span>
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