import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../UI/Button/Button'

import style from './home.module.css'

import BG from '../../../static/img/HomeBg/1.jpg'

import Logo from '../../../static/img/Logo.png'

function Home() {
    return (
        <>
            <div
                className={`pt-5 ${style.BodyContainer}`}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BG})` }}>
                <div className="container mt-5 pt-5">
                    <img src={Logo} className={style.Logo} alt="Logo" />
                    <h2 className={style.H2}>Pizza Man Online Ordering</h2>
                    <h1 className={style.H1}>Your Yummy Pizza Delivered Fast & Fresh</h1>
                    <Link to="/menu">
                        <Button>
                            Order Now
                        </Button>
                    </Link>
                </div>
                <div className={style.LandscapeOverlay} />
            </div>
        </>
    )
}

export default Home