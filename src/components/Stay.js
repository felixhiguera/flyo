import React from 'react'
import stayImage from '../images/illustration-2.svg'
import avatar from '../images/avatar-testimonial.jpg'
import quote from '../images/icon-quotes.svg'

const Stay = () => {
    return (
        <div className="stay">
            <div className="container">
                <div className="stay-image-div">
                    <img className="stayImage" src={stayImage} alt="" />
                </div>
                <div className="stay-text">
                    <h2>
                        Stay productive, wherever you are
                    </h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you
                        covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for
                    live collaboration. No email attachments required!</p>
                    <a href="">  See how Fylo works</a>
                    <div className="card">
                        <img className="quotes" src={quote} alt="" />
                        <p> Fylo has improved our team productivity by an order of magnitude. Since
  making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className="card-avatar-info">
                            <img src={avatar} alt="" />
                            <div>
                                <h4>Kyle Burton</h4>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stay
