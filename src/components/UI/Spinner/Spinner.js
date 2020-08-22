import React from 'react'

import style from './spinner.module.css'

import PS from '../../../static/img/Spinner/pizza.svg'

function Spinner() {
    return (
        <div className={style.SpinnerContainer}>
            <div className={style.Spinner}>
                <img src={PS} alt="pizza1" className={`${style.PizzaPart} ${style.PizzaPart1}`} />
                <img src={PS} alt="pizza2" className={`${style.PizzaPart} ${style.PizzaPart2}`} />
                <img src={PS} alt="pizza3" className={`${style.PizzaPart} ${style.PizzaPart3}`} />
                <img src={PS} alt="pizza4" className={`${style.PizzaPart} ${style.PizzaPart4}`} />
            </div>
            <h2 className="mt-3">Loading</h2>
        </div>
    )
}

export default Spinner