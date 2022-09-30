import React from "react";

import "../Footer/Footer.css";
import footerImg from "../Footer/footerImg.png";
function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-item">
                    <img src={footerImg}></img>
                </div>
                <div className="footer-item">
                    <h1>Get to Know Us</h1>
                    <a>About Us</a>
                    <a>Customer Care</a>
                    <a>Privacy & Policy</a>
                    <a>Careers</a>
                    <a>Newsletter</a>
                    <a>Press Releases</a>
                    <a>Amazon Cares</a>
                    <a>Report Abuse</a>
                </div>
                <div className="footer-item">
                    <h1>Connect with Us</h1>
                    <a>Twitter</a>
                    <a>LinkedIn</a>
                    <a>Facebook</a>
                    <a>Instagram</a>
                </div>
                <div className="footer-item">
                    <h1>Make Money with Us</h1>
                    <a>Sell On Shoped.</a>
                    <a>Shoped Marketing</a>
                    <a>Shoped Affiliate</a>
                    <a>Work with Us</a>
                </div>
            </footer>
            <h1 className="creater-info">Handcrafted by DB</h1>
        </div>
    );
}

export default Footer;
