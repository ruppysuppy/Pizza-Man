import React from 'react'

import PageTitle from '../../UI/PageTitle/PageTitle'

import commonStyle from '../../../static/style/common.module.css'

function Error404() {
    return (
        <div className={`container mt-5 pt-2 ${commonStyle.PageBody}`}>
            <PageTitle>
                Error 404
            </PageTitle>
            <h1 className="font-weight-light">
                It seems like you are lost!
            </h1>
        </div>
    )
}

export default Error404