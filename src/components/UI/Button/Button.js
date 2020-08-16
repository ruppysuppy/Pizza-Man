import React from 'react'

import style from './button.module.css'

function Button(props) {
    const btnProps = { ...props }
    delete btnProps.children

    return (
        <button className={style.Btn} {...btnProps}>
            {props.children}
        </button>
    )
}

export default Button