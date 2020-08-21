import React, { useEffect } from 'react'

import Accordian from '../../UI/Accordian/Accordian'

import faq from './faqList'

import style from './faq.module.css'

function FAQ() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])

    const display = faq.map((faqData, index) => <Accordian title={faqData.question} key={index}>
        {faqData.answer}
    </Accordian>)

    return (
        <div className={`container my-5 py-4 ${style.Body}`}>
            {display}
        </div>
    )
}

export default FAQ