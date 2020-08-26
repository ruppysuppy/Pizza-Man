import React, { useState } from 'react'

import Input from '../../../UI/Input/Input'

function AddressForm() {
    const [buildingNumber, setBuildingNumber] = useState("")
    const [streetName, setStreetName] = useState("")
    const [city, setCity] = useState("")
    const [pinCode, setPinCode] = useState("")

    return (
        <div>
            <Input val={buildingNumber} onChangeFunc={setBuildingNumber} placeholder="Building Number" />
            <Input val={streetName} onChangeFunc={setStreetName} placeholder="Street Name" />
            <Input val={city} onChangeFunc={setCity} placeholder="City" />
            <Input val={pinCode} onChangeFunc={setPinCode} placeholder="Pin Code" />
        </div>
    )
}

export default AddressForm