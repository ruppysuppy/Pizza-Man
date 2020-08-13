import React, { useState } from 'react'
import { Redirect } from 'react-router'

function Error404() {
    const [redirect, setRedirect] = useState(null)
    setTimeout(() => setRedirect(<Redirect to="/" />), 3000)

    return (
        <div className="container mt-5 pt-2">
            <h1 className="display-2">
                Error 404
            </h1>
            <h1 className="pl-1">
                It seems like you are lost!
            </h1>
            <h3 className="pl-1">
                We are sending you back home
            </h3>
            {redirect}
        </div>
    )
}

export default Error404