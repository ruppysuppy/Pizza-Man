import React from 'react'

function Address(props) {
    const { buildingNumber, city, pinCode, streetName } = props
    return (
        <div>
            <strong>Address:</strong>
            <br />
            {buildingNumber ?
                <p className="mb-0">{buildingNumber}</p> : null}
            {streetName ?
                <p className="mb-0">{streetName}</p> : null}
            {city ?
                <p className="mb-0">{city}</p> : null}
            {pinCode ?
                <p className="mb-0">{pinCode}</p> : null}
        </div>
    )
}

export default Address