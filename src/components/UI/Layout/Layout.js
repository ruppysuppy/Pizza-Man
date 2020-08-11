import React from 'react'

import Navbar from '../Navbar/Navbar'

function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default Layout