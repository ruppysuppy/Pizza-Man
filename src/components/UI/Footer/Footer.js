import React from 'react'
import { Link } from 'react-router-dom'

import style from './footer.module.css'

function Footer() {
    return (
        <footer className={`pt-4 ${style.Footer}`}>
            <h2 className={`text-center ${style.H2}`}>
                Social Media
            </h2>
            <div className={style.Row}>
                <Link className={style.Link} to="/social-media-does-not-exist">
                    <div className={`${style.SocialMediaBtn} ${style.FaceBook}`}>
                        <i class="fa fa-facebook" aria-hidden="true" />
                    </div>
                </Link>
                <Link className={style.Link} to="/social-media-does-not-exist">
                    <div className={`${style.SocialMediaBtn} ${style.Twitter}`}>
                        <i class="fa fa-twitter" aria-hidden="true" />
                    </div>
                </Link>
                <Link className={style.Link} to="/social-media-does-not-exist">
                    <div className={`${style.SocialMediaBtn} ${style.Instagram}`}>
                        <i class="fa fa-instagram" aria-hidden="true" />
                    </div>
                </Link>
                <Link className={style.Link} to="/social-media-does-not-exist">
                    <div className={`${style.SocialMediaBtn} ${style.Youtube}`}>
                        <i class="fa fa-youtube-play" aria-hidden="true" />
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer