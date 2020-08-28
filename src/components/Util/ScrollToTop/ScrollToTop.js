import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
    componentWillReceiveProps(newProps) {
        const { pathname } = this.props.location
        const { pathname: newPathname } = newProps
        if (pathname !== newPathname) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return (<React.Fragment />)
    }
}

export default withRouter(ScrollToTop)