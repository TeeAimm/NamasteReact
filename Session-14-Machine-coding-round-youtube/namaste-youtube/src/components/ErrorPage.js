import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { data, status, statusText } = useRouteError()
    return (
        <>
            <h1>Oops!!!</h1>
            <h3>{status} {data}</h3>
        </>
    )
}

export default ErrorPage