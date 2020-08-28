import React from 'react'

function ErrorDisplay(props) {
    return (
        <div className="alert alert-danger mt-4" role="alert">
            <strong>{props.children}</strong>
        </div>
    )
}

export default ErrorDisplay