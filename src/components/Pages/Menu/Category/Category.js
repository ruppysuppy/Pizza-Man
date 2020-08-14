import React from 'react'

import Item from './Item.js/Item'

function Category(props) {
    const { name, items } = props

    const itemsDisplay = items.map(item => <Item
        key={item.id}
        name={item.name}
        desc={item.desc}
        price={item.price}
    />)

    return (
        <div>
            <h2>{name}</h2>
            {itemsDisplay}
        </div>
    )
}

export default Category