import React from 'react'
import { Link } from 'react-router-dom'

import style from './footer.module.css'

function Footer() {
    return (
        <footer className={`pt-4 pb-2 ${style.Footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 row">
                        <div className={`my-4 ${style.FooterSection}`}>
                            <h2 className={style.H2}>
                                Company
                            </h2>
                            <div className={style.LinksContainer}>
                                <Link className={`${style.Link} ${style.TextLink}`} to="/about">
                                    About Us
                                </Link>
                                <Link className={`${style.Link} ${style.TextLink}`} to="/faq">
                                    FAQ
                                </Link>
                                <a className={`${style.Link} ${style.TextLink}`} href="mailto:no-mail@email.com">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        <div className={`my-4 ${style.FooterSection}`}>
                            <h2 className={style.H2}>
                                Legal
                            </h2>
                            <div className={style.LinksContainer}>
                                <Link className={`${style.Link} ${style.TextLink}`} to="/terms-and-conditions">
                                    Terms & Conditions
                                </Link>
                                <Link className={`${style.Link} ${style.TextLink}`} to="/privacy-policy">
                                    Privacy Policy
                                </Link>
                                <Link className={`${style.Link} ${style.TextLink}`} to="/disclaimer">
                                    Disclaimer
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-4">
                        <h2 className={`text-center ${style.H2}`}>
                            Social Media
                        </h2>
                        <div className={style.Row}>
                            <a className={style.Link} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <div className={`${style.SocialMediaBtn} ${style.FaceBook}`}>
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </div>
                            </a>
                            <a className={style.Link} href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <div className={`${style.SocialMediaBtn} ${style.Twitter}`}>
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </div>
                            </a>
                            <a className={style.Link} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <div className={`${style.SocialMediaBtn} ${style.Instagram}`}>
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </div>
                            </a>
                            <a className={style.Link} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <div className={`${style.SocialMediaBtn} ${style.Youtube}`}>
                                    <i className="fa fa-youtube-play" aria-hidden="true" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`mb-2 ${style.Row}`}>
                    <span className={style.Copyright}>
                        Copyright © {new Date().getFullYear()} Bubilant FoodWorks Ltd. | All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer