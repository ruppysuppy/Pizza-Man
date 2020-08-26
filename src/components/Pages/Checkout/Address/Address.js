import React from 'react'

function Address(props) {
    const { buildingNumber, city, pinCode, streetName } = props
    return (
        <div>
            {buildingNumber ?
                <p>{buildingNumber}</p> : null}
            {streetName ?
                <p>{streetName}</p> : null}
            {city ?
                <p>{city}</p> : null}
            {pinCode ?
                <p>{pinCode}</p> : null}
        </div>
    )
}

export default Address