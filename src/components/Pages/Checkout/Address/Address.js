import React from 'react'

function Address(props) {
    const { street } = props

    return (
        <div>
            {street ?
                <p>{street}</p> : null}
        </div>
    )
}

export default Address