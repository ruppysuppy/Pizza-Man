import React from 'react'

import style from './input.module.css'

function Input(props) {
    const { onChangeFunc, placeholder, val } = props
    const onChangeHandler = event => onChangeFunc(event.target.value)

    return (
        <input
            type="text"
            onChange={onChangeHandler}
            value={val}
            placeholder={placeholder}
            className={style.Input} />
    )
}

export default Input