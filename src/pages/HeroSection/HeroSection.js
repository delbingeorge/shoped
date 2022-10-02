import React from "react";
import { Link } from "react-scroll";
import Category from "../Category/Category";
import "../HeroSection/HeroSection.css";

import playbackVideo from "./videoplayback.mp4";

function HeroSection() {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-div-banner">
                    <div className="banner-overlay-text">
                        <h2>All New</h2>
                        <h1>
                            Iphone 14 & <br></br>
                            Iphone 14 Plus
                        </h1>
                        <h3>Oh. So. Pro.</h3>
                        <Link
                            to="gadgets"
                            spy={true}
                            smooth="true"
                            offset={10}
                            duration={1950}
                            className="banner-overlay-btn"
                        >
                            Pre Order Now
                        </Link>
                    </div>
                    <video className="hero-banner-one" autoPlay muted loop width={1980}>
                        <source src={playbackVideo} type="video/mp4" />
                    </video>
                </div>
            </section>

            <Category />
        </div>
    );
}

export default HeroSection;
