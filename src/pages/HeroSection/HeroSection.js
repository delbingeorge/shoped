import React from "react";
import Category from "../Category/Category";
import "../HeroSection/HeroSection.css";

function HeroSection() {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-div-banner">
                    <div className="hero-banner-one"></div>
                </div>
            </section>

            <Category />
        </div>
    );
}

export default HeroSection;
