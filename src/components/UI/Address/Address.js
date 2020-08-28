import React from 'react'

function Address(props) {
    const { buildingNumber, city, state, country, pinCode, streetName } = props
    return (
        <div>
            <strong>Address:</strong>
            <br />
            {buildingNumber ?
                <p className="mb-0">{buildingNumber} {streetName}</p> : null}
            {city ?
                <p className="mb-0">{city}, {state}, {country}</p> : null}
            {pinCode ?
                <p className="mb-0">PIN: {pinCode}</p> : null}
        </div>
    )
}

export default Address