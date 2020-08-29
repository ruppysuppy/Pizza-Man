import React from 'react'
import Address from '../../../UI/Address/Address'

import style from './orderItem.module.css'

function OrderItem({ address, order, price, ts, reference }) {
    const table = order.map((item, index) => <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.itemPrice}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
    </tr>)

    return (
        <div ref={reference} className={`py-3 ${style.OrderItemBody}`}>
            <strong className="d-inline-block mb-2">Time:</strong> {new Date(ts).toDateString()}
            <Address {...address} />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
            <div className="mt-3">
                <strong>Price: ₹</strong> {price.price}
                <br />
                <strong>GST: ₹</strong> {price.gst}
                <br />
                <strong>Total Price: ₹</strong> {price.total}
            </div>
        </div>
    )
}

export default OrderItem