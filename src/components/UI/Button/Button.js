import React from 'react'

import * as BtnTypes from './types'

import style from './button.module.css'

function Button(props) {
    const btnProps = { ...props }
    let type
    if (btnProps.children) {
        delete btnProps.children
    }
    if (btnProps.type) {
        type = btnProps.type
        delete btnProps.type
    }

    switch (type) {
        case BtnTypes.DANGER:
            return (
                <button className={`${style.Btn} ${style.Danger}`} {...btnProps}>
                    {props.children}
                </button>
            )

        case BtnTypes.SECONDARY:
            return (
                <button className={`${style.Btn} ${style.Secondary}`} {...btnProps}>
                    {props.children}
                </button>
            )

        default:
            return (
                <button className={`${style.Btn} ${style.Normal}`} {...btnProps}>
                    {props.children}
                </button>
            )
    }
}

export default Button