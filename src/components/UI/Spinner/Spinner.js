import React from 'react'

import style from './spinner.module.css'

import P1 from '../../../static/img/Spinner/pizza1.png'
import P2 from '../../../static/img/Spinner/pizza2.png'
import P3 from '../../../static/img/Spinner/pizza3.png'
import P4 from '../../../static/img/Spinner/pizza4.png'

function Spinner() {
    return (
        <div className={style.SpinnerContainer}>
            <div className={style.Spinner}>
                <img src={P1} alt="pizza1" className={`${style.PizzaPart} ${style.PizzaPart1}`} />
                <img src={P2} alt="pizza2" className={`${style.PizzaPart} ${style.PizzaPart2}`} />
                <img src={P3} alt="pizza3" className={`${style.PizzaPart} ${style.PizzaPart3}`} />
                <img src={P4} alt="pizza4" className={`${style.PizzaPart} ${style.PizzaPart4}`} />
            </div>
            <h2 className="mt-3">Loading</h2>
        </div>
    )
}

export default Spinner