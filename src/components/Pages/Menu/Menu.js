import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actions'

import Spinner from '../../UI/Spinner/Spinner'
import Category from './Category/Category'

class Menu extends Component {
    componentDidMount() {
        if (this.props.menu.length === 0) {
            this.props.initMenu()
        }
        window.scrollTo(0, 0);
    }

    render() {
        const display = this.props.menu.map(categoryData => <Category
            name={categoryData.name}
            items={categoryData.items}
            key={categoryData.name}
        />
        )

        return (
            <div className="mt-5 pt-2">
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