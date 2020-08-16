import React from 'react'
import { Link } from 'react-router-dom'

import Navlinks from '../NavLinks/Navlinks'

import style from './sidedrawer.module.css'

import Logo from '../../../../static/img/Logo.png'

function SideDrawer(props) {
    const { sidebarClose, sidebarShown } = props

    return (
        <div
            className={`${style.Backdrop} ${sidebarShown ? style.BackdropOpen : style.BackdropClose}`}
            onClick={sidebarClose}>
            <div className={`${style.SideBarBody} ${sidebarShown ? style.SideBarBodyOpen : style.SideBarBodyClose}`}>
                <div className={`container ${style.SideDrawerIcon}`}>
                    <Link to="/">
                        <img src={Logo} alt="Pizza Man" />
                    </Link>
                    <Navlinks />
                </div>
            </div>
        </div>
    )
}

export default SideDrawer