import React from 'react'

function RadioButton(props) {
    const { isDisabled, children, isRequired, code, name, clickFunc } = props

    return (
        <div className="form-check my-2">
            <input
                className="form-check-input"
                type="radio"
                name={name}
                id={code}
                onClick={isDisabled ? null : clickFunc}
                disabled={isDisabled ? true : null}
                required={isRequired ? true : null} />
            <label className="form-check-label" htmlFor={code} onClick={isDisabled ? null : clickFunc}>
                {children}
            </label>
        </div>
    )
}

export default RadioButton