import React, { useEffect } from 'react'

import Accordian from '../../UI/Accordian/Accordian'

import style from './faq.module.css'

function FAQ() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <div className={`container mt-5 pt-2 ${style.Body}`}>
            <Accordian title="Something">
                Test
            </Accordian>
            <Accordian title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti itaque reiciendis facilis dicta, consequuntur eius velit possimus accusantium mollitia est commodi. Et voluptas fugiat magnam blanditiis quos tenetur quia?">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti itaque reiciendis facilis dicta, consequuntur eius velit possimus accusantium mollitia est commodi. Et voluptas fugiat magnam blanditiis quos tenetur quia?
            </Accordian>
        </div>
    )
}

export default FAQ