import React from "react";

import "../Footer/Footer.css";
import footerImg from "../Footer/footerImg.png";
function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-item">
                    <img src={footerImg} alt="Shoped Logo"></img>
                </div>
                <div className="footer-item">
                    <h1>Get to Know Us</h1>
                    <a href="https://delbin.netlify.app">About Us</a>
                    <a href="https://delbin.netlify.app">Customer Care</a>
                    <a href="https://delbin.netlify.app">Privacy & Policy</a>
                    <a href="https://delbin.netlify.app">Careers</a>
                    <a href="https://delbin.netlify.app">Newsletter</a>
                    <a href="https://delbin.netlify.app">Press Releases</a>
                    <a href="https://delbin.netlify.app">Amazon Cares</a>
                    <a href="https://delbin.netlify.app">Report Abuse</a>
                </div>
                <div className="footer-item">
                    <h1>Connect with Us</h1>
                    <a href="https://delbin.netlify.app">Twitter</a>
                    <a href="https://delbin.netlify.app">LinkedIn</a>
                    <a href="https://delbin.netlify.app">Facebook</a>
                    <a href="https://delbin.netlify.app">Instagram</a>
                </div>
                <div className="footer-item">
                    <h1>Make Money with Us</h1>
                    <a href="https://delbin.netlify.app">Sell On Shoped.</a>
                    <a href="https://delbin.netlify.app">Shoped Marketing</a>
                    <a href="https://delbin.netlify.app">Shoped Affiliate</a>
                    <a href="https://delbin.netlify.app">Work with Us</a>
                </div>
            </footer>
            <h1 className="creator-info">Handcrafted by DB</h1>
        </div>
    );
}

export default Footer;
