import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actions'

import Spinner from '../../UI/Spinner/Spinner'
import Category from './Category/Category'

class Menu extends Component {
    componentDidMount() {
        this.props.initMenu()
    }

    render() {
        const display = Object.keys(this.props.menu).map(categoryName => <Category
            name={categoryName}
            items={this.props.menu[categoryName]}
            key={categoryName}
        />
        )

        return (
            <div>
                {this.props.error ?
                    this.props.error
                    : this.props.isLoading ?
                        <Spinner />
                        : display}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.menu.menu,
    isLoading: state.menu.isLoading,
    error: state.menu.error
})

const mapDispatchToProps = dispatch => {
    return {
        initMenu: () => dispatch(actions.initMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)