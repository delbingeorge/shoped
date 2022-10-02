import React from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import "../HeroSection/HeroSection.css";

import playbackVideo from "./videoplayback.mp4";

function HeroSection() {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-div-banner">
                    {/* <div className="hero-banner-content">
                            <h2>All New,</h2>
                            <h1>Iphone 14 &</h1>
                            <h1>Iphone 14 Plus </h1>
                        </div> */}
                    <div className="banner-overlay-text">
                        <h2>All New</h2>
                        <h1>
                            Iphone 14 & <br></br>
                            Iphone 14 Plus
                        </h1>
                        <h3>Oh. So. Pro.</h3>
                        <button className="banner-overlay-btn">PreOrder Now</button>
                    </div>
                    <video className="hero-banner-one" autoPlay muted loop width={1980}>
                        <source src={playbackVideo} type="video/mp4" />
                    </video>

                    {/* </div> */}
                </div>
            </section>

            <Category />
        </div>
    );
}

export default HeroSection;
