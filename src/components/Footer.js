import React from 'react'
import logo from '../images/logowhite.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="" />
            <div className="container">
                <div>

                    <p> <span><img className="icon" src={phone} alt="" /></span> Phone: +1-543-123-4567</p>
                    <p> <span><img className="icon" src={email} alt="" /></span> example@fylo.com</p>
                </div>
                <div>
                    <p> About Us</p>
                    <p>  Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div>
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className="icons">
                    <i class="fab fa-facebook fa-2x"></i>
                    <i class="fab fa-twitter-square fa-2x"></i>
                    <i class="fab fa-instagram fa-2x"></i>


                </div>
            </div>
        </div>
    )
}

export default Footer
