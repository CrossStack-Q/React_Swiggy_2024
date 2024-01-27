import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>
            About Us Page
        </h1>
        <p>
            {" "}
            This is the Namaste React ka About wala Page .
        </p>
        
        <Link to={"/about/profile"}>
        Profile Page
        </Link>
        
        <Outlet/>
    </div>
  )
}

export default About