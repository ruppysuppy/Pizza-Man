import React from 'react'

import style from './socialmedia.module.css'

function SocialMedia() {
    window.scrollTo(0, 0);

    return (
        <div className={`container mt-5 pt-2 ${style.Body}`}>
            <h1 className="display-2">
                Sorry to disappont you!
            </h1>
            <h1 className="pl-1">
                Our Social Media Handles have not been created yet
            </h1>
        </div>
    )
}

export default SocialMedia