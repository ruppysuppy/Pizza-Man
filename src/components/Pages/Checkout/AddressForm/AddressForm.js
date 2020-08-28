import React, { useState } from 'react'
import { connect } from 'react-redux'

import Input from '../../../UI/Input/Input'
import ErrorDisplay from '../../../Util/ErrorDisplay/ErrorDisplay'
import Button from '../../../UI/Button/Button'
import * as BtnTypes from '../../../UI/Button/types'

import * as actions from '../../../../store/actions/actions'

function AddressForm(props) {
    const { buildingNumber, streetName, city, state, country, pinCode, user, hideAddressForm, address } = props

    const [addressBuildingNumber, setBuildingNumber] = useState(buildingNumber || "")
    const [addressStreetName, setStreetName] = useState(streetName || "")
    const [addressCity, setCity] = useState(city || "")
    const [addressState, setState] = useState(state || "")
    const [addressCountry, setCountry] = useState(country || "")
    const [addressPinCode, setPinCode] = useState(pinCode || "")

    const updateHandler = () => {
        const updatedAddress = {
            buildingNumber: addressBuildingNumber,
            streetName: addressStreetName,
            city: addressCity,
            state: addressState,
            country: addressCountry,
            pinCode: addressPinCode
        }
        if (addressBuildingNumber.length >= 1 &&
            addressStreetName.length >= 8 &&
            addressCity.length >= 4 &&
            addressState.length >= 4 &&
            addressCountry.length >= 4 &&
            addressPinCode.length >= 6) {
            props.addAddress(user, updatedAddress, address ? false : true)
            hideAddressForm()
        } else {
            props.addAddressFail("Please Enter a valid address")
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
                val={addressState}
                onChangeFunc={setState}
                placeholder="State"
            />
            <Input
                val={addressCountry}
                onChangeFunc={setCountry}
                placeholder="Country"
            />
            <Input
                val={addressPinCode}
                onChangeFunc={setPinCode}
                placeholder="Pin Code"
            />
            {props.error && props.error !== "No Address Found" ?
                <ErrorDisplay>
                    {props.error}
                </ErrorDisplay>
                : null}
            <span className="my-2 mr-2">
                <Button onClick={hideAddressForm} type={BtnTypes.SECONDARY}>
                    Cancel
            </Button>
            </span>
            <span className="my-2 ml-2">
                <Button onClick={updateHandler}>
                    Update
                </Button>
            </span>
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