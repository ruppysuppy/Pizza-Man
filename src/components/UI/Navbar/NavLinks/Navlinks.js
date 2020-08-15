import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './navlinks.module.css'

function Navlinks() {
    return (
        <div className={`ml-auto my-auto ${style.NavLinkHolder}`}>
            <NavLink exact to="/" className={style.NavLink} activeClassName={style.NavLinkActive}>
                Home
            </NavLink>
            <NavLink exact to="/menu" className={style.NavLink} activeClassName={style.NavLinkActive}>
                Menu
            </NavLink>
        </div>
    )
}

export default Navlinks