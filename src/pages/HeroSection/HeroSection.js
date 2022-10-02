import React from "react";
import Category from "../Category/Category";
import "../HeroSection/HeroSection.css";

function HeroSection() {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-div-banner">
                    <div className="hero-banner-one">
                        {/* <div className="hero-banner-content">
                            <h2>All New,</h2>
                            <h1>Iphone 14 &</h1>
                            <h1>Iphone 14 Plus </h1>
                        </div> */}
                    </div>
                </div>
            </section>

            <Category />
        </div>
    );
}

export default HeroSection;
