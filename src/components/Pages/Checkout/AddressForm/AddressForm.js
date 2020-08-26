import React, { useState } from 'react'
import { connect } from 'react-redux'

import Input from '../../../UI/Input/Input'

import * as actions from '../../../../store/actions/actions'

function AddressForm(props) {
    const { buildingNumber, streetName, city, pinCode, user, hideAddressForm, address } = props

    const [addressBuildingNumber, setBuildingNumber] = useState(buildingNumber || "")
    const [addressStreetName, setStreetName] = useState(streetName || "")
    const [addressCity, setCity] = useState(city || "")
    const [addressPinCode, setPinCode] = useState(pinCode || "")

    const updateHandler = () => {
        const updatedAddress = {
            buildingNumber: addressBuildingNumber,
            streetName: addressStreetName,
            city: addressCity,
            pinCode: addressPinCode
        }
        props.addAddress(user, updatedAddress, address ? false : true)
        hideAddressForm()
    }

    return (
        <div>
            <Input val={addressBuildingNumber} onChangeFunc={setBuildingNumber} placeholder="Building Number" />
            <Input val={addressStreetName} onChangeFunc={setStreetName} placeholder="Street Name" />
            <Input val={addressCity} onChangeFunc={setCity} placeholder="City" />
            <Input val={addressPinCode} onChangeFunc={setPinCode} placeholder="Pin Code" />
            <button onClick={hideAddressForm}>
                Cancel
            </button>
            <button onClick={updateHandler}>
                Update
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    address: state.auth.address
})
const mapDispatchToProps = dispatch => ({
    addAddress: (user, address, isNew) => dispatch(actions.authAddAddress(user, address, isNew))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm)