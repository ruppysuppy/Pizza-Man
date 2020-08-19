import React, { useEffect } from 'react'

import style from './error404.module.css'

function Error404() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <div className={`container mt-5 pt-2 ${style.Body}`}>
            <h1 className="display-2">
                Error 404
            </h1>
            <h1 className="pl-1">
                It seems like you are lost!
            </h1>
        </div>
    )
}

export default Error404