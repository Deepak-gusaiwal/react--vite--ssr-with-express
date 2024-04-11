import React from 'react'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const User = () => {
    const {name} = useParams();
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>User Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>{name}</h1>
    </>
  )
}

export default User
