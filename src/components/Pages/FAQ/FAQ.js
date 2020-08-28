import React from 'react'

import Accordian from '../../UI/Accordian/Accordian'
import PageInfo from '../../UI/PageInfo/PageInfo'

import faq from './faqList'


function FAQ() {
    const display = faq.map((faqData, index) => <Accordian title={faqData.question} key={index}>
        {faqData.answer}
    </Accordian>)

    return (
        <>
            <PageInfo>
                FAQ
            </PageInfo>
            <div className="container my-5 py-4">
                {display}
            </div>
        </>
    )
}

export default FAQ