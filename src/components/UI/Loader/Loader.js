import React from 'react'

import slice from '../../../static/img/Loader/slice.svg'
import style from './loader.module.css'

// Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
function Loader() {
    return (
        <div className={style.LoaderBody}>
            <img src={slice} alt="Pizza Slice" className={style.PizzaSlice} />
            <h2 className={style.Text}>Loading</h2>
        </div>
    )
}

export default Loader