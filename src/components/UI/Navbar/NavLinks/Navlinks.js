import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import style from './navlinks.module.css'

function Navlinks(props) {
    return (
        <div className={`ml-auto my-auto ${style.NavLinkHolder}`}>
            <NavLink exact to="/" className={style.NavLink} activeClassName={style.NavLinkActive}>
                Home
            </NavLink>
            <NavLink exact to="/menu" className={style.NavLink} activeClassName={style.NavLinkActive}>
                Menu
            </NavLink>
            {props.user ? <>
                <NavLink exact to="/orders" className={style.NavLink} activeClassName={style.NavLinkActive}>
                    Orders
                </NavLink>
                <NavLink exact to="/logout" className={style.NavLink} activeClassName={style.NavLinkActive}>
                    Log Out
                </NavLink>
            </> : <>
                    <NavLink exact to="/login" className={style.NavLink} activeClassName={style.NavLinkActive}>
                        Log In
                    </NavLink>
                    <NavLink exact to="/register" className={style.NavLink} activeClassName={style.NavLinkActive}>
                        Register
                    </NavLink>
                </>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Navlinks)