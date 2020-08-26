import React from 'react'

function Input(props) {
    const { onChangeFunc, placeholder, val } = props
    const onChangeHandler = event => onChangeFunc(event.target.value)

    return (
        <input type="text" onChange={onChangeHandler} value={val} placeholder={placeholder} />
    )
}

export default Input