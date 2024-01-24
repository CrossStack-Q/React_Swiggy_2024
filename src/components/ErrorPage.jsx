import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const err = useRouteError();
    console.log(err)
  return (
    <div>
        <p>Error page</p>
        <p>{err.status}</p>
        <p>{err.statusText}</p>
    </div>
  )
}

export default ErrorPage