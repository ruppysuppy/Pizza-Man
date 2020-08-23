import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../UI/Button/Button'

import style from './home.module.css'

import BG from '../../../static/img/HomeBg/1.jpg'

import Logo from '../../../static/img/Logo.png'

function Home() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <>
            <div className={style.CarouselContainer}>
                <div className={style.ImgContainer} style={{ backgroundImage: `url(${BG})` }} />
            </div>
            <div className={`pt-5 ${style.BodyContainer}`}>
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
            </div>
        </>
    )
}

export default Home