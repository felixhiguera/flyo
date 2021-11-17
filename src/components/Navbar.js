import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={logo} alt="" />
                <div className="navbar-menu">
                    <h5>Features</h5>
                    <h5>Team</h5>
                    <h5>Sign In</h5>
                </div>
            </div>
        </div>
    )
}

export default Navbar
