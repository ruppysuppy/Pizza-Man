import React from 'react'

import style from './sectionTitle.module.css'

function SectionTitle(props) {
    return (
        <>
            <div className={style.Row}>
                <h2 className={style.H2}>{props.children}</h2>
                <div className={`my-auto ${style.HR}`} />
            </div>
        </>
    )
}

export default SectionTitle