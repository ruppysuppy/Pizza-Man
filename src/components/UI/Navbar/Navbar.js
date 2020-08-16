import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navlinks from './NavLinks/Navlinks'
import SideDrawer from './Sidedrawer/SideDrawer'

import style from './navbar.module.css'

import Logo from '../../../static/img/Logo.png'

function Navbar() {
    const [sidebarShown, setSidebarShown] = useState(false)

    return (
        <div className={style.NavBar}>
            <div className={`container ${style.NavContainer}`}>
                <div className={style.NavIcon}>
                    <Link to="/">
                        <img src={Logo} alt="Pizza Man" />
                    </Link>
                </div>
                <div className={`ml-auto my-auto ${style.NavLinkHolder}`}>
                    <Navlinks />
                </div>
                <button
                    className={`ml-auto my-auto ${style.Toggler}`}
                    onClick={() => setSidebarShown(!sidebarShown)}
                >
                    <div className={`${style.Bar1} ${sidebarShown ? style.CrossBar1 : null}`} />
                    <div className={`${style.Bar2} ${sidebarShown ? style.CrossBar2 : null}`} />
                    <div className={`${style.Bar3} ${sidebarShown ? style.CrossBar3 : null}`} />
                </button>
            </div>
            <SideDrawer
                sidebarClose={() => setSidebarShown(false)}
                sidebarShown={sidebarShown}
            />
        </div>
    )
}

export default Navbar