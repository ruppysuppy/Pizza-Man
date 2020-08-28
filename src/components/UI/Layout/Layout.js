import React from 'react'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollToTop from '../../Util/ScrollToTop/ScrollToTop'

function Layout(props) {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout