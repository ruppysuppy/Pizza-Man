import React, { useState } from 'react'

import style from './accordian.module.css'

function Accordian(props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleAccordian = () => setIsOpen(!isOpen)

    return (
        <>
            <div className={`${style.Heading} ${isOpen ? style.HeadingOpen : style.HeadingClosed}`} onClick={toggleAccordian}>
                <div className="row">
                    <div className={style.HeadingText}>{props.title}</div>
                    <button className={`ml-auto d-inline-block ${style.Toggler}`}>
                        {isOpen ?
                            <i className="fa fa-minus" aria-hidden="true" /> :
                            <i className="fa fa-plus" aria-hidden="true" />
                        }
                    </button>
                </div>
            </div>
            <div className={`${style.AccordianBody} ${isOpen ? style.AccordianOpen : style.AccordianClosed}`}>
                {props.children}
            </div>
        </>
    )
}

export default Accordian