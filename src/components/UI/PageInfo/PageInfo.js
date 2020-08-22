import React, { useEffect } from 'react'

import style from './pageinfo.module.css'

import wave from '../../../static/img/wave.png'

const createParallax = () => {
    const scrollHeight = window.pageYOffset
    const elem = document.getElementById("parallax-title")
    elem.style.bottom = -(scrollHeight * 0.75) + "px"
}

function PageInfo(props) {
    const title = props.children

    useEffect(() => {
        window.addEventListener("scroll", createParallax)
        return () => window.removeEventListener("scroll", createParallax)
    }, [])

    return (
        <div className={style.Body}>
            <div className={`${style.Wave} ${style.Wave1}`} align="center" style={{ backgroundImage: `url(${wave})` }} />
            <div className={`${style.Wave} ${style.Wave2}`} align="center" style={{ backgroundImage: `url(${wave})` }} />
            <div className={`${style.Wave} ${style.Wave3}`} align="center" style={{ backgroundImage: `url(${wave})` }} />
            <span id="parallax-title">{title}</span>
        </div>
    )
}

export default PageInfo