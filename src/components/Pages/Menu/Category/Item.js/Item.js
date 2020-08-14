import React from 'react'

function Item(props) {
    const { name, desc, price } = props

    return (
        <div>
            <h3>{name}</h3>
            <h5>{desc}</h5>
            <h4>
                <strong>Rs. {price}</strong>
            </h4>
        </div>
    )
}

export default Item