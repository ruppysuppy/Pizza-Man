import React, { useEffect } from 'react'
import { withRouter } from 'react-router'

function ScrollToTop(props) {
    const { pathname } = props.location

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (<React.Fragment />)
}

export default withRouter(ScrollToTop)