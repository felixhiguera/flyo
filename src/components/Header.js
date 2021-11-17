import React from 'react'
import mainImage from '../images/illustration-1.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={mainImage} alt="" />
            <div className="header-text">
                <h2>All your files in one secure location, accessible anywhere.</h2>
                <p> Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with friends,
                    family, and co-workers.</p>
                <div className="email">
                    <input type="text" placeholder="Enter your email" />
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Header
