import React from 'react'

import style from './pageTitle.module.css'

function PageTitle(props) {
    return (
        <>
            <h1 className="display-6 mb-0">
                <strong className={style.PageTitle}>{props.children}</strong>
            </h1>
            <div className={`mt-1 mb-4 ${style.HR}`} />
        </>
    )
}

export default PageTitle