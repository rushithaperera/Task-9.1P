import './footer.css'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
}from '@fortawesome/free-brands-svg-icons'

function Footer()
{
    return(
        <div>
        <form className = "form-inline">
        <label for="email">SUBSCRIBE TO OUR NEWSLETTER</label>
        <input type="email" id="email" placeholder="Enter email" name="email" />
        <button type="submit">SUBMIT</button>
        </form>
        <footer class="footer-distributed">
        <div class="footer-right">
            <a href="facebook"><i className="facebook"><FontAwesomeIcon icon = {faFacebook} size = "1x" /></i></a>
            <a href="twitter"><i className="twitter"><FontAwesomeIcon icon = {faTwitter} size = "1x" /></i></a>
            <a href="linkedin"><i className="instagram"><FontAwesomeIcon icon = {faInstagram} size = "1x" /></i></a>
            <a href="youtube"><i className="youtube"><FontAwesomeIcon icon = {faYoutube} size = "1x" /></i></a>
        </div>

        <div className="footer-left">
            <p className="footer-links">
                <a className="link-1" href="home">How it works</a>

                <a href="blog">Requesters</a>

                <a href="pricing">Workers</a>

                <a href="about">Pricing</a>

                <a href="faq">About</a>
            </p>

            <p>iCrowdTask &copy; 2015</p>
        </div>

    </footer>
    </div>
    )
}

export default Footer