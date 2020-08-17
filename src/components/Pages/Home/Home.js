import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../UI/Button/Button'

import style from './home.module.css'

import BG1 from '../../../static/img/HomeBg/1.jpg'
import BG2 from '../../../static/img/HomeBg/2.jfif'
import BG3 from '../../../static/img/HomeBg/3.jpg'
import BG4 from '../../../static/img/HomeBg/4.jpg'

import Logo from '../../../static/img/Logo.png'

function Home() {
    window.scrollTo(0, 0);

    return (
        <>
            <div className={style.CarouselContainer}>
                <div className="carousel slide" data-ride="carousel" data-pause="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="5000" >
                            <div className={style.ImgContainer} style={{ backgroundImage: `url(${BG1})` }} />
                        </div>
                        <div className="carousel-item" data-interval="5000" >
                            <div className={style.ImgContainer} style={{ backgroundImage: `url(${BG2})` }} />
                        </div>
                        <div className="carousel-item" data-interval="5000" >
                            <div className={style.ImgContainer} style={{ backgroundImage: `url(${BG3})` }} />
                        </div>
                        <div className="carousel-item" data-interval="5000" >
                            <div className={style.ImgContainer} style={{ backgroundImage: `url(${BG4})` }} />
                        </div>
                    </div>
                </div>
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