import React, { useEffect } from 'react'

import PageInfo from '../../UI/PageInfo/PageInfo'

function Privacy() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])


    return (
        <>
            <PageInfo>
                PRIVACY POLICY
            </PageInfo>
        </>
    )
}

export default Privacy