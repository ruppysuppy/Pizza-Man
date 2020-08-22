import React, { useEffect } from 'react'

import PageInfo from '../../UI/PageInfo/PageInfo'

function Disclaimer() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])


    return (
        <>
            <PageInfo>
                DISCLAIMER
            </PageInfo>
        </>
    )
}

export default Disclaimer