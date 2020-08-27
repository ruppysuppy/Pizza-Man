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
        if (addressBuildingNumber.length >= 1 &&
            addressStreetName.length >= 8 &&
            addressCity.length >= 4 &&
            addressPinCode.length >= 6) {
            props.addAddress(user, updatedAddress, address ? false : true)
            hideAddressForm()
        } else {
            props.addAddressFail("Please Enter a valid Address in India")
        }
    }

    return (
        <div>
            <Input
                val={addressBuildingNumber}
                onChangeFunc={setBuildingNumber}
                placeholder="Building Number"
            />
            <Input
                val={addressStreetName}
                onChangeFunc={setStreetName}
                placeholder="Street Name"
            />
            <Input
                val={addressCity}
                onChangeFunc={setCity}
                placeholder="City"
            />
            <Input
                val={addressPinCode}
                onChangeFunc={setPinCode}
                placeholder="Pin Code"
            />
            {props.error ?
                <div className="alert alert-danger mt-4" role="alert">
                    <strong>{props.error}</strong>
                </div>
                : null}
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
    address: state.address.address,
    error: state.address.error
})

const mapDispatchToProps = dispatch => ({
    addAddress: (user, address, isNew) => dispatch(actions.addAddress(user, address, isNew)),
    addAddressFail: (error) => dispatch(actions.addAddressFail(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm)