import React from 'react'
import Address from '../../Checkout/Address/Address'

function OrderItem({ address, order, price, ts }) {
    return (
        <div>
            <Address {...address} />
            <div className="mt-3">
                <strong>Price: ₹ {price.price}</strong>
                <br />
                <strong>GST: ₹ {price.gst}</strong>
                <br />
                <strong>Total Price: ₹ {price.total}</strong>
            </div>
            Time: {new Date(ts).toDateString()}
        </div>
    )
}

export default OrderItem