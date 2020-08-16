import React from 'react'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout