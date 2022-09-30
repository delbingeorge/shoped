import React from "react";
import "../NavBar/NavBar.css";
import shopedLogo from "../NavBar/shopedLogo.png";
function NavBar() {
    return (
        <div>
            <header>
                <div className="header-item-one">
                    <img className="" src={shopedLogo} alt="Shoped Online Shopping Logo"></img>
                </div>
                <div className="header-item-two"></div>
            </header>
        </div>
    );
}

export default NavBar;
